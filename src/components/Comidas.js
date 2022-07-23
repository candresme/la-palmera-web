import React from 'react'

const Comidas = ({ categorias, productos }) => {
    return(
        <div className="container p-4">
            <div className="row justify-content-center">
            {
                    categorias.map((data) =>{
                        if(data.tag === 'comidas'){
                            return (
                                <div className="border p-4 col-xl-4 m-4">
                                    <h3 className="fw-bold">{data.nombre}</h3>
                                    <table className="table text-start fs-5">                
                                        <tbody>
                                        {      
                                                                
                                            productos.map( (producto) => {
                                            if (producto.categoria === data.nombre)
                                                return(
                                                    <tr key={producto.id}>
                                                        <th >{producto.nombre}</th>
                                                        <td>${producto.precio}</td>                                
                                                    </tr>
                                                )   
                                            })
                                        }                            
                                        </tbody>
                                    </table>
                                </div>
                            )
                        }})                
                }
            </div>
        </div>
    )
}

export default Comidas
