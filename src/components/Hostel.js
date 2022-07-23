import React from 'react';

import Link from '@mui/material/Link';

const Hostel = () => {

    const whatsapp = 'https://engine.lobbypms.com/la-palmera-hostel';

  return (
    <div className="container-fluid">

        {/* Banner de inicio */}
        <div className="row align-items-center justify-content-center p-4 position-relative mb-5" style={{backgroundImage:`url('https://firebasestorage.googleapis.com/v0/b/lapalmeraweb.appspot.com/o/FOTOS%2Fhostel_59.webp?alt=media&token=7f55b2b9-2e2f-4235-af75-35294794658a')`, backgroundPosition:'center', backgroundSize:'cover', color:'white', height:'25rem'}} >
            
            <div className="col text-center p-4">                
                <img src="https://firebasestorage.googleapis.com/v0/b/lapalmeraweb.appspot.com/o/La%20Palmera-01.png?alt=media&token=8ba273e0-6cba-4a38-b89f-eb476b357536" alt="" style={{width:"20rem"}} />
                
            </div>
            <div className="row fs-3 type justify-content-center border border-dark position-absolute top-100 start-50 translate-middle rounded-3 p-4" style={{backgroundColor:"#F0433D", width:"20rem"}} >
                <div className="row justify-content-center">Welcome to Cali, Colombia</div>
                <Link href={whatsapp} underline="none" color="#24242E" target="_blank" rel="noopener noreferrer">
                    <div className='btn' style={{backgroundColor:"#EFD46B", width:"15rem"}} >Book Now!</div>
                </Link>
            </div>                        
        </div>


        {/* Seccion de informacion 1 */}
        <div className="row align-items-center p-4 justify-content-center mt-5" >
            
            <div className="col-xl text-start p-4" style={{marginTop:"5rem"}}>
                <div className="row" style={{textAlign:"justify"}} >
                    <p className="fs-4">
                        If you want to explore the city the local way, your next home needs to be our spacious, old family house from the 60ies - located in the very traditional neighborhood of Miraflores. 
                    </p>
                    <p className="fs-4">
                        Being the former area of the Rich & Famous, you’re going to find a lot of greenery as well as beautiful mansions around you.
                    </p>
                </div>

                <div className="row">
                    
                    <div className="fs-4">Other than that everything you need to see is totally walkable:</div>
                    <ul className='ms-xl-5 ms-3 fs-5'>
                        <li>15 min. to San Antonio</li>
                        <li>15 min. to La Galería Alameda</li>
                        <li>30 min. to Downtown</li>
                    </ul>
                    <Link href={whatsapp} underline="none" color="#24242E" target="_blank" rel="noopener noreferrer">                        
                        <div className='btn shadow mt-3 boton'>Book Now!</div>
                    </Link>
                                        
                </div>                
            </div>

            <div className="col-xl-3">
                <img src="https://firebasestorage.googleapis.com/v0/b/lapalmeraweb.appspot.com/o/PALMERA%20HOSTEL_Mesa%20de%20trabajo%201.png?alt=media&token=b4effd7d-88a3-4a55-95f4-4af201173b5b" alt="" style={{width:"9rem"}}  />
            </div>           

            <div className="row mt-4" style={{color:'#F0433D', height:'10rem'}}><h2>So what holds you back? Come and get the local deal!</h2></div>
        </div>

        {/* Seccion 2 */}
        <div className="row align-items-center" >
            <div className="col-xl p-5">
                <div className="row fw-bold titulos">Dorms</div>
                <ul className='fs-5 text-start'>
                    <li>1 x 8 bed-dorm, 2 x 6 bed-dorms</li>
                    <li>1 x 4 bed-dorm (female)</li>
                    <li>solid bunkbeds with curtains</li>
                    <li>personal light, sockets, fan and shelf</li>
                    <li>at least one window in every room</li>
                    <li>2 dorms with a bathroom ensuite</li>
                    <li>2 dorms with a shared bathroom outside</li>                    
                </ul>
                <Link href={whatsapp} underline="none" color="#24242E" target="_blank" rel="noopener noreferrer">
                    <div className='btn shadow mt-3 boton'>Book Now!</div>
                </Link>
            </div>
            <div className="col-xl p-4" style={{backgroundColor:'#EFD46B', height:'35rem'}}>
                <div className="col align-items-center justify-content-center imagen" style={{backgroundImage:`url('https://firebasestorage.googleapis.com/v0/b/lapalmeraweb.appspot.com/o/FOTOS%2Fhostel_46.webp?alt=media&token=95bbf6aa-5529-4fcc-b726-6f6c641e67c7')`}}></div>
            </div>
        </div>

        <div className="row align-items-center" >
            <div className="col-xl p-4 " style={{height:'35rem'}}>
                <div className="col align-items-center justify-content-center imagen" style={{backgroundImage:`url('https://firebasestorage.googleapis.com/v0/b/lapalmeraweb.appspot.com/o/FOTOS%2Fhostel_15.webp?alt=media&token=d8e57152-c6b2-464b-9c0b-e4637e25571b')`}}></div>
            </div>
            <div className="col-xl p-4" style={{height:'35rem'}}>
                <div className="col align-items-center justify-content-center imagen" style={{backgroundImage:`url('https://firebasestorage.googleapis.com/v0/b/lapalmeraweb.appspot.com/o/FOTOS%2Fhostel_49.webp?alt=media&token=8cb78617-e20b-4a39-973c-f55afc2c37c9')`}}></div>
            </div>
        </div>

        {/* Seccion 3 */}
        <div className="row align-items-center" >
            <div className="col-xl p-4" style={{backgroundColor:'#EFD46B', height:'35rem'}}>
                <div className="col align-items-center justify-content-center imagen" style={{backgroundImage:`url('https://firebasestorage.googleapis.com/v0/b/lapalmeraweb.appspot.com/o/FOTOS%2Fhostel_58.webp?alt=media&token=113dca12-2253-44e2-a8a6-87ededa2bbe8')`}}></div>
            </div>
            <div className="col-xl p-5">
                <div className="row fw-bold titulos">Privates</div>
                <ul className='fs-5 text-start'>
                    <li>2 private rooms with a bathroom ensuite</li>
                    <li>1 private room with a shared bathroom outside</li>
                    <li>queensize beds (1,60cm) with headboards and included sockets</li>
                    <li>private patio or balcony with a view</li>
                    <li>one big window in every room</li>
                    <li>work desk & closet</li>                   
                </ul>
                <Link href={whatsapp} underline="none" color="#24242E" target="_blank" rel="noopener noreferrer">
                    <div className='btn shadow mt-3 boton'>Book Now!</div>
                </Link>
            </div>            
        </div>

        <div className="row align-items-center" >
            <div className="col-xl p-4" style={{height:'35rem'}}>
                <div className="col align-items-center justify-content-center imagen" style={{backgroundImage:`url('https://firebasestorage.googleapis.com/v0/b/lapalmeraweb.appspot.com/o/FOTOS%2Fhostel_41.webp?alt=media&token=e3652f6d-54b8-4181-a62b-87b2e02caef2')`}}></div>
            </div>
            <div className="col-xl p-4" style={{height:'35rem'}}>
                <div className="col align-items-center justify-content-center imagen" style={{backgroundImage:`url('https://firebasestorage.googleapis.com/v0/b/lapalmeraweb.appspot.com/o/FOTOS%2Fhostel_4.webp?alt=media&token=3b839d5c-8dce-4e61-9964-a998c4b18f9b')`}}></div>
            </div>
            <div className="col-xl p-4" style={{height:'35rem'}}>
                <div className="col align-items-center justify-content-center imagen" style={{backgroundImage:`url('https://firebasestorage.googleapis.com/v0/b/lapalmeraweb.appspot.com/o/FOTOS%2Fhostel_24.webp?alt=media&token=107556e2-ba44-4fe1-81cf-00dc1a76b35b')`}}></div>
            </div>
        </div>

       {/*  Seccion 4 */}
        <div className="row align-items-center" >
            <div className="col-xl p-5">
                <div className="row fw-bold titulos">Social Areas</div>
                <ul className='fs-5 text-start'>
                    <li>floral garden around the house</li>
                    <li>chill areas with comfy hammocks </li>
                    <li>terrace with a bar AND a view</li>
                    <li>colorful lobby to hang out </li>
                    <li>coworking area with ample lightning, sockets and reliable Wi-Fi</li>
                    <li>fully equipped kitchen</li>
                    <li>spacious Salsa room</li>
                    <li>cozy Coffee shop</li>                    
                </ul>
                <Link href={whatsapp} underline="none" color="#24242E" target="_blank" rel="noopener noreferrer">
                    <div className='btn shadow mt-3 boton'>Book Now!</div>
                </Link>
            </div>
            <div className="col-xl p-4" style={{backgroundColor:'#EFD46B', height:'35rem'}}>
                <div className="col align-items-center justify-content-center imagen" style={{backgroundImage:`url('https://firebasestorage.googleapis.com/v0/b/lapalmeraweb.appspot.com/o/FOTOS%2Fhostel_18.webp?alt=media&token=cda8af31-0f30-4e6c-ad0e-79efa423638b')`}}></div>
            </div>
        </div>

        <div className="row align-items-center" >
            <div className="col-xl p-4" style={{height:'35rem'}}>
                <div className="col align-items-center justify-content-center imagen" style={{backgroundImage:`url('https://firebasestorage.googleapis.com/v0/b/lapalmeraweb.appspot.com/o/FOTOS%2Fhostel_42.webp?alt=media&token=f6024d82-025a-4fff-b2ee-07d3ccb848ee')`}}></div>
            </div>
            <div className="col-xl p-4" style={{height:'35rem'}}>
                <div className="col align-items-center justify-content-center imagen" style={{backgroundImage:`url('https://firebasestorage.googleapis.com/v0/b/lapalmeraweb.appspot.com/o/FOTOS%2Fhostel_55.webp?alt=media&token=436dd041-bb7a-44e0-9c8e-186cd7fdcdfa')`}}></div>
            </div>
            <div className="col-xl p-4" style={{height:'35rem'}}>
                <div className="col align-items-center justify-content-center imagen" style={{backgroundImage:`url('https://firebasestorage.googleapis.com/v0/b/lapalmeraweb.appspot.com/o/FOTOS%2Fhostel_23.webp?alt=media&token=90bcf4af-4b83-47f6-8a86-dedb4bbf82e4')`}}></div>
            </div>
        </div>

        <div className="row align-items-center" >
            <div className="col-xl p-4" style={{height:'35rem'}}>
                <div className="col align-items-center justify-content-center imagen" style={{backgroundImage:`url('https://firebasestorage.googleapis.com/v0/b/lapalmeraweb.appspot.com/o/FOTOS%2Fhostel_6.webp?alt=media&token=d13fe314-6c65-43d5-9dca-c36e5937acd8')`}}></div>
            </div>
            <div className="col-xl p-4" style={{height:'35rem'}}>
                <div className="col align-items-center justify-content-center imagen" style={{backgroundImage:`url('https://firebasestorage.googleapis.com/v0/b/lapalmeraweb.appspot.com/o/FOTOS%2Fhostel_34.webp?alt=media&token=e3d3d94e-b90a-4dc7-a7d4-37e7ea6ba5d3')`}}></div>
            </div>
            <div className="col-xl p-4" style={{height:'35rem'}}>
                <div className="col align-items-center justify-content-center imagen" style={{backgroundImage:`url('https://firebasestorage.googleapis.com/v0/b/lapalmeraweb.appspot.com/o/FOTOS%2Fhostel_35.webp?alt=media&token=935e276c-218c-47ed-a49f-8ff1efa3d030')`}}></div>
            </div>
        </div>

        {/* Seccion 5 */}
        <div className="row align-items-center" >
            <div className="col-xl p-4" style={{backgroundColor:'#EFD46B', height:'35rem'}}>
                <div className="col align-items-center justify-content-center imagen" style={{backgroundImage:`url('https://firebasestorage.googleapis.com/v0/b/lapalmeraweb.appspot.com/o/FOTOS%2Fhostel_1.webp?alt=media&token=0af0b3ff-9b0c-4e1c-9ff3-5f74e5ba2023')`}}></div>
            </div>
            <div className="col-xl p-5">
                <div className="row fw-bold titulos">Activities</div>
                <ul className='fs-5 text-start'>
                    <li>group Salsa classes, every night & for free</li>
                    <li>private Salsa classes with professional dancers</li>
                    <li>Yoga</li>
                    <li>tours in and out of town</li>
                    <li>coffee tastings, cooking classes & more</li>                   
                </ul>
                <Link href={whatsapp} underline="none" color="#24242E" target="_blank" rel="noopener noreferrer">
                    <div className='btn shadow mt-3 boton'>Book Now!</div>
                </Link>
            </div>            
        </div>


        {/*  Banner de imagen */}
        <div className="row align-items-center p-4 justify-content-center mt-5">
            <img src="https://firebasestorage.googleapis.com/v0/b/lapalmeraweb.appspot.com/o/La%20Palmera-09.png?alt=media&token=90f1b4f6-546b-4023-b053-9a199329993d" alt="" style={{width:"40rem"}}  />
        </div>


        {/* Seccion 7 */}
        <div className="row align-items-center" >
            <div className="col-xl p-5">
                <div className="row fw-bold titulos">How to arrive</div>
                <div className="row">
                    <div className="col m-3 p-4" style={{backgroundColor:'#2E9496', color:'white'}}>
                        <div className="fw-bold fs-2">FROM THE AIRPORT</div>
                        <div className="text-start mt-4">
                            <div className="fw-bold" >Option 1</div>
                            <div>Take a taxi in front of the arrival hall. ($ 60.000 COP, 40 min.)</div>
                        </div>

                        <div className="text-start mt-4">
                            <div className="fw-bold" >Option 2</div>
                            <div>Take a bus at the bus stop in front of the arrival hall to the main bus terminal and follow the instructions on the right  side afterwards. ($ 20.000 COP, 30 min.)</div>
                        </div> 
                    </div>
                    <div className="col m-3 p-4" style={{backgroundColor:'#2E9496', color:'white'}}>
                        <div className="fw-bold fs-2">FROM THE MAIN BUS TERMINAL</div>
                        <div className="text-start mt-4">
                            <div className="fw-bold" >Option 1</div>
                            <div>Take a taxi to the hostel. ($ 12.000 COP, 15 min.)</div>
                        </div>

                        <div className="text-start mt-4">
                            <div className="fw-bold" >Option 2</div>
                            <div>Walk to the Mio bus station at AV3N with Calle 31. Take the bus "E27". Exit after 7 stops in Calle 5 with Carrera 22. Walk 4 blocks to the hostel. ($ 2.400 COP, 30 min.)</div>
                        </div>                        
                    </div>
                </div>                
                <Link href={whatsapp} underline="none" color="#24242E" target="_blank" rel="noopener noreferrer">
                    <div className='btn shadow mt-3 boton'>Book Now!</div>
                </Link>
            </div>            
        </div>

        {/* Seccion 8 */}
        <div className="row align-items-center" >
            <div className="col-xl p-5">
                <div className="row fw-bold titulos">WHAT ELSE?</div>
                <ul className='fs-5 text-start'>
                    <li>laundry service</li>
                    <li>organized airport-transfer</li>
                    <li>included breakfast</li>
                    <li>tips & tricks from a Colombian owner </li>
                    <li>team members that really love what they do </li>                    
                </ul>
                <Link href={whatsapp} underline="none" color="#24242E" target="_blank" rel="noopener noreferrer">
                    <div className='btn shadow mt-3 boton'>Book Now!</div>
                </Link>
            </div>
            <div className="col-xl p-4" style={{backgroundColor:'#EFD46B'}}>
                <div className='row align-items-center justify-content-center'>
                    <img src="https://firebasestorage.googleapis.com/v0/b/lapalmeraweb.appspot.com/o/PALMERA%20SOCIETY_Mesa%20de%20trabajo%201.png?alt=media&token=f1ba9cf1-5937-4ec1-80fa-46f07c0c0960" alt="" style={{width:"20rem"}}/>
                </div>                
            </div>
        </div>



    </div>
  )
}

export default Hostel
