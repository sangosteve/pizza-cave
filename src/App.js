
import './App.css';
import Hero from './components/Hero';
import Navbar from './components/Navbar'
import Menu from './components/Menu'
import {MenuProvider} from './components/MenuContext'
function App() {
  return (
    <MenuProvider>
    <div className="App">
      <Navbar/>
      <Hero/>
      <Menu/>
    </div>
    </MenuProvider>
  );
}

export default App;
