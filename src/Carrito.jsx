
import React,{useContext} from "react";
import {CartContext} from './CartContext';

function Carrito(){
    const {cartItems} = useContext(CartContext);

    return(
        <div>
            <h2>Carrito de compras</h2>
            <ul>
                {cartItems.map(item =>(
                    <li key={item.id}>{item.nombre}</li>
                ))}
            </ul>
        </div>
    )
}
export default Carrito;