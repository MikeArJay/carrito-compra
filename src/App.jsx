import { useState } from 'react';
import './App.css'
import ListaProductos from './ListaProductos';
import { CartProvider } from './CartContext';
import Carrito from './Carrito';


function App() {
  const [showCarrito, setShowCarrito] = useState(false)

  const handleClick = () => {
    setShowCarrito(!showCarrito);
  }


  return (
    <>
      <CartProvider>
        <ListaProductos />
        <button onClick={handleClick}>Ver carrito</button>
        {showCarrito &&
          <Carrito />}
      </CartProvider>
    </>
  )
}

export default App
