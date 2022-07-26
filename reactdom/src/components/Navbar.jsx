import React from 'react'
import styledComponents, { withTheme } from 'styled-components'

function Navbar() {
    return(
        <>
        <NavBar>
        <h1>La Tiendita de la esquina</h1>
        <div>
            <a href="*/*">Principal</a>
            <a href="*/*">Novedades</a>
            <a href="*/*">Outlet</a>
            <a href="*/*">Carrito</a>

        </div>
        </NavBar>
        </>

    )
}

export default Navbar

const NavBar = styled.nav 

    h1{
    color: white ;
    fontsize: 400 ;
    fontweight : 400 ;

}
padding: 3 rem ;
backgroundcolor: black;
display: flex;
align-items: center;
justify-content: space-between;

a{
color: white;
text-decoration: none;

}

