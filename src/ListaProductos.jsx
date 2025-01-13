import React, { useEffect, useState } from "react";
import { CartContext } from './CartContext';
import { useContext } from "react";

function ListaProductos() {
    const {cartItems,addToCart} = useContext(CartContext);
    const [datosCatalogo, setDatosCatalogo] = useState([]);

    useEffect(() => {
        const fechData = async () => {
            const response = await fetch("./articulos_navideños.json");
            const data = await response.json();
            setDatosCatalogo(data);
        };
        fechData();
    }, []);


    return (
        <div>
            <h2>Lista de productos</h2>
            <ul>
                {datosCatalogo.map(item => (
                    <li key={item.id}>
                        {item.nombre} . {item.precio}
                        <button onClick={()=>addToCart(item)}>Agrear al carrito</button>
                    </li>
                ))}
            </ul>
        </div>
    )

}
export default ListaProductos;