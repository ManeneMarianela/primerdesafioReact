import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import CartWidget from './components/CartWidget';

function App() {
  return (
    <>
    <Navbar>La Tiendita de la esquina
    <CartWidget/>
    </Navbar>
    </>
  );
}

render (<App name="CartWidget" />,
document.getElementById("products"));

export default App;
