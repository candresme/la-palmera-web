import React, { useState } from 'react';

//firebase imports
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase';


//SweetAlert imports
import Swal from 'sweetalert2';

const Admin = ({ categorias }) => {

    const [ nombre, setNombre ] = useState('');
    const [ precio, setPrecio ] = useState('');
    const [ categoria, setCategoria ] = useState([]);
    
    const productos = collection(db, "productos");

    //Funcion para crear el producto
    const crearProducto = async (e) => {
        e.preventDefault();
        //Hace la escritura de la base de datos
        await addDoc( productos, { nombre: nombre, precio:precio, categoria:categoria } );
        
        //Envia notificacion al usuario de la correcta creacion en la base de datos.
        await Swal.fire({
            position: 'top-center',
            icon: 'success',
            title: '¡Fue creado con exito!',
            showConfirmButton: false,
            timer: 1300
        })             
         
        //Limpia el formulario.
        setNombre("");        
        setPrecio("");          
        
    }; 
    
    return (
        <div>
        <form onSubmit={crearProducto} className="p-4">
            <div className="mb-3" >
                <label for="exampleInputEmail1" className="form-label">Nombre Producto</label>
                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={nombre} onChange={ (e) => setNombre(e.target.value)} />

                <label for="exampleInputEmail1" className="form-label">Precio</label>
                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={precio} onChange={ (e) => setPrecio(e.target.value)} />
                
                <select className="form-select" aria-label="Default select example" value={categoria.nombre} onChange={(e)=>setCategoria(e.target.value)} >
                    { categorias.map( (cat) => (
                        <option key={cat.id} value={cat.nombre}>{cat.nombre}</option>                        
                      ))                   
                    }
                </select>                                
            </div>            
            <button type="submit" className="btn btn-primary">Guardar</button>
        </form>
        </div>
    )
}

export default Admin
