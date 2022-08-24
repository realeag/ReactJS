import './App.css';
import Navbar from './components/Navbar';
import Cuerpo from './components/Cuerpo';

function App() {

  return (
    <div className='container-fluid colorFondo'>
      <Navbar />
      <hr />
      <Cuerpo />
    </div>

  );
}

export default App;
