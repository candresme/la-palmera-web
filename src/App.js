import React, { useState, useEffect} from 'react';
import './App.css';
import { HashRouter, Routes, Route } from 'react-router-dom';

//Imports componentes
import MenuCafe from './components/MenuCafe';
import Admin from './components/Admin';
import Links from './components/Links';
import Hostel from './components/Hostel';

//firebase imports
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import { db } from './firebase';

function App() {

    const [ categoriaColection, setCategoriaColection ] = useState([]);
    const [ productosColection, setProductosColection ] = useState([]);

    //Llamado a la base de datos.
    const categorias = collection(db, "categorias")
    const productos = collection(db, "productos");
    

    //Funcion para mostrar TODOS los docs
    const getCategorias = async () => {

      const data = await getDocs(categorias);       
      setCategoriaColection(
          data.docs.map( (doc) => ( {...doc.data(), id:doc.id }))
      );   
    };

    //Funcion para mostrar TODOS los docs
    const getProductos = async () => {

      const data = await getDocs(productos);        
      setProductosColection(
          data.docs.map( (doc) => ( {...doc.data(), id:doc.id }))
      );
    };

    //Usamos useEffect
    useEffect( () => {
      getCategorias();
      getProductos();
      // eslint-disable-next-line
    }, [] )

    return (
      <div className="App">
        <HashRouter>
          <Routes>
            <Route path='/' element={<MenuCafe categorias={categoriaColection.sort(((a, b) => a.orden - b.orden))} productos={productosColection.sort()}/>}  />
            <Route path='/links' element={<Links  />}  />
            <Route path='/hostel' element={<Hostel  />}  />
            <Route path='/admin' element={<Admin categorias={categoriaColection} />}  />
          </Routes>
        </HashRouter>
      </div>
    );
}

export default App;
