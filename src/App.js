import logo from './logo.svg';
import './App.css';
import RCC from './Components/RCC';
import RFC from './Components/RFC';
import BTLayout from './Components/BTLayout/BTLayout';
import DataBiding from './DataBiding/DataBiding';
import HanldeEvent from './HanldeEvent/HanldeEvent';

function App() {
  return (
    <div className="App">
      <RFC />
      <RFC />
      <RFC />

      <RCC />

      <BTLayout />

      <DataBiding />

      <HanldeEvent />

    </div>
  );
}

export default App;
