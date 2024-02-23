import './App.css';
import Pic from './Components/Pic';
import Aff from './Components/Aff';


function App() {
  return (
    <div className="App">
        <div className='left'>
          <Aff/>
        </div>
        <div className='right'>
          <Pic/>
        </div>
    </div>
  );
}

export default App;
