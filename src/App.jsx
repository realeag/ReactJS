import './App.css';
import Navbar from './components/Navbar';
import Cuerpo from './components/Cuerpo';
import Footer from './components/Footer';

function App() {

  return (
    <div className='container-fluid colorFondo'>
      <Navbar />
      <hr />
      <Cuerpo />
      <Footer ubicacion='CABA' copyright='Nombre Proyecto™'/>
    </div>

  );
}

export default App;
