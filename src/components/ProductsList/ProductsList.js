import Card from '../Card/Card.js';
import './ProductsList.css';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../../styles/styles.js';
import { dividerClasses } from '@mui/material';

const ProductsList = ({ children }) => {
    let dataProduct = {
        product : 'TOP',
        price : 2900,
        size : 'M',
        stock: 5
    }

    return (
        <ThemeProvider theme = {theme}>
        <div className="containerCards">
            <h2> { children } </h2>
            <Card data = {dataProduct}/>
        </div>
        </ThemeProvider>
    )
}

export default ProductsList;