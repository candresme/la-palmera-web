
import React from 'react';

//imports Material
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';

//Imports icons
import MenuBookIcon from '@mui/icons-material/MenuBook';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import LocalCafeIcon from '@mui/icons-material/LocalCafe';


const BottomNav = ({ setMenu }) => {
    const [value, setValue] = React.useState(0);
    
    return (
        <Box sx={{ width: "100%" }} className="fixed-bottom">

            <BottomNavigation
                showLabels
                value={value}
                onChange={(event, newValue) => {
                setValue(newValue);
                }}
            >
                <BottomNavigationAction label="Menú" icon={<MenuBookIcon />} onClick={()=>setMenu('menu')}/>
                <BottomNavigationAction label="Bebidas" icon={<LocalCafeIcon />} onClick={()=>setMenu('bebidas')}/>
                <BottomNavigationAction label="Comidas" icon={<RestaurantIcon />} onClick={()=>setMenu('comidas')}/>

            </BottomNavigation>
        </Box>
    )
}

export default BottomNav
