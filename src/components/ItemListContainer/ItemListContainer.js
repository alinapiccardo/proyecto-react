import './ItemListContainer.css'
import { ThemeProvider } from '@mui/material/styles';
import theme from '../../styles/styles.js';


function ItemListContainer () {
     return(
        <ThemeProvider theme = {theme}> 
        <div className='titleDiv'>
           <h2 className='titleList'> PRODUCTOS </h2>
        </div>
        </ThemeProvider>
     )
}

export default ItemListContainer;