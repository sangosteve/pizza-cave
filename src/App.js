
import './App.css';
import Hero from './components/Hero';
import Navbar from './components/Navbar'
import Menu from './components/Menu'
import {MenuProvider} from './components/MenuContext'
import {CartProvider} from './components/CartContext'
import Cart from './components/Cart';
function App() {
  return (
    <MenuProvider>
      <CartProvider>
    <div className="App">
      <Navbar/>
      <Hero/>
      <Menu/>
    </div>
    </CartProvider>
    </MenuProvider>
  );
}

export default App;
