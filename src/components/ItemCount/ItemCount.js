import React, {useState}  from "react";

const ItemCount = ({stock}) => {
    const [count, setCount] = useState(1);

    const addStock = ( ) => {
        if (stock > count) {
            setCount(count + 1);
        }
    }
    const removeStock = ( ) => {
        if (count > 1) {
            setCount(count - 1);
        }
    }

    return(
        <div>
            <p> Cantidad: { count } </p>
            <button onClick={addStock} className="btnBuy">Agregar</button>
            <button onClick={removeStock} className="btnBuy">Eliminar</button>
        </div>
    )

}

export default ItemCount;

