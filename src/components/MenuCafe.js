import React, { useState } from 'react';

//imports components
import NavBar from '../Layouts/NavBar';
import BottomNav from '../Layouts/BottomNav';
import Main from '../Layouts/Main';

//Imports Material Components
import Toolbar from '@mui/material/Toolbar';

const MenuCafe = ({ categorias, productos}) => {
    const [menu, setMenu] = useState('menu');
  return (
    <div>
        <NavBar/>
        <Toolbar />
        <Main estado={menu} categorias={categorias} productos={productos}/>
        <Toolbar />
        <BottomNav setMenu={setMenu} />
    </div>    
  )
}

export default MenuCafe
