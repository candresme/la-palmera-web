import React from 'react';

//Imports components
import Menu from '../components/Menu';
import Bebidas from '../components/Bebidas';
import Comidas from '../components/Comidas';

const Main = ({estado, productos, categorias}) => {
         
    switch(estado){
        case 'menu':
            return <Menu categorias={categorias} productos={productos} />;

        case 'bebidas':
            return <Bebidas categorias={categorias} productos={productos} />;
        
        case 'comidas':
            return <Comidas categorias={categorias} productos={productos} />;

        default: return <Menu categorias={categorias} productos={productos} />;
    }
}

export default Main
