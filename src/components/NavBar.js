import Button from '@mui/material/Button';


function NavBar() {

    //cambiar logo y foto mas tarde
    return(
        <header className='Header-App'>
            <div>
                <h1 className='logoNav'>IMPRONTA SILLONES</h1>
            </div>
            <ul className='Nav-App'>
                    <li><Button className='btnLinks'>inicio</Button></li>
                    <li><Button className='btnLinks'>productos</Button></li>
                    <li><Button className='btnLinks'>somos impronta</Button></li>
                    <li><Button className='btnLinks'>contacto</Button></li>
            </ul>
        </header>
    )
}

export default NavBar;