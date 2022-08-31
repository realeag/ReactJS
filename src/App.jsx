import './App.css';
import './components/css/styleCuerpo.css';
import './components/css/styleFooter.css';
import './components/css/styleNavbar.css';
import Navbar from './components/Navbar';
import Cuerpo from './components/Cuerpo';
import Footer from './components/Footer';
import ItemListContainer from './components/ItemListContainer';

function App() {

  return (
    <div className='container-fluid colorFondo'>
      <Navbar />
      <hr />
      <main>
        <ItemListContainer proyecto="ACA VA EL TITULO DEL PROYECTO" />
        <Cuerpo />
      </main>
      <Footer ubicacion='CABA' copyright='Nombre™' />
    </div>

  );
}

export default App;
