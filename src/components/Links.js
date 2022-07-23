import React from 'react';
import { Link } from 'react-router-dom';


const Links = () => {
    
    return (
        <div className="container">
            {/* Header */}
            <div className=''>
                <nav className="fixed-top bg-light">
                    <div className="w-100 position-relative" style={{backgroundImage:`url('https://firebasestorage.googleapis.com/v0/b/lapalmeraweb.appspot.com/o/FOTOS%2Fhostel_47.webp?alt=media&token=276f162b-1992-4837-b645-12f15740767e')`, height:'15rem', backgroundPosition:'center', backgroundSize:'cover'}}>
                        <div className=" rounded-circle bg-light p-2 position-absolute top-100 start-50 translate-middle">
                            <img className="" src="https://firebasestorage.googleapis.com/v0/b/lapalmeraweb.appspot.com/o/La%20Palmera-02.png?alt=media&token=d9af81f8-9919-4fd4-9ca9-1813c483d0ab" alt='' style={{width:'10rem'}} />
                        </div>                    
                    </div> 
                                   
                </nav>
            </div> 

            {/* Contenido */}
            <div className='row justify-content-center p-3' style={{marginTop:'22rem'}}>
                <h2 className='type'>La Palmera Hostel & Coffee shop</h2>                              
                <div className='row border p-3 rounded-3'>
                                        
                    <Link to="/hostel">
                        <div className='btn col-xl border m-2 fs-3' style={{backgroundColor:'#2E9496', color:'white'}}>Your Next Home</div>
                    </Link>

                    <Link to="/">
                        <div className='btn col-xl border m-2 fs-3' style={{backgroundColor:'#2E9496', color:'white'}}>Coffee shop Menu</div>
                    </Link>
                </div>
            </div>     
        </div>
    )
}

export default Links
