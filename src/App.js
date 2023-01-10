import './App.css';
import Subtitulo from './components/Subtitulo';
import Titulo from './components/Titulo';
import Listado from './components/Listado';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <Titulo />
        <Subtitulo />
        <Listado />
      </div>
    </div>
  );
}

export default App;
