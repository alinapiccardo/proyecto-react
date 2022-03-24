import React,{ useState } from 'react';
import './Card.css';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../../styles/styles.js';
import ItemCount from '../ItemCount/ItemCount';

export default function Card({ data }) {
    const { product, price, size, stock } = data;
    const [ count, setCount ] = useState(1);

    return (
        <ThemeProvider theme = {theme}>
        <div className="cardItem">
            <h2> { product } </h2>
            <p> Precio: $ { price } </p>
            <p> Talle: { size } </p>
            <ItemCount stock={stock}/>
        </div>
        </ThemeProvider>
    )
}