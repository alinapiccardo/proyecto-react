import './NavBar.css'
import Button from '@mui/material/Button';
import CartWidget from '../CartWidget/CartWidget.js';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../../styles/styles.js';


function NavBar() {

    //cambiar logo y foto mas tarde
    return(
        <ThemeProvider theme = {theme}>
        <header className='Header-App'>
            <div className='containerLogo'>
                <h1 className='logoNav'> BAIBON </h1>
            </div>
            <ul className='Nav-App'>
                    <li><Button className='btnLinks' color="secondary">inicio</Button></li>
                    <li><Button className='btnLinks' color="secondary">productos</Button></li>
                    <li><Button className='btnLinks' color="secondary">baibon</Button></li>
                    <li><Button className='btnLinks' color="secondary">contacto</Button></li>
            </ul>
        <CartWidget/>
        </header>
        </ThemeProvider>
    )
}

export default NavBar;