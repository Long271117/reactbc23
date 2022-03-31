import logo from './logo.svg';
import './App.css';
import RCC from './Components/RCC';
import RFC from './Components/RFC';
import BTLayout from './Components/BTLayout/BTLayout';
import DataBiding from './DataBiding/DataBiding';
import HanldeEvent from './HanldeEvent/HanldeEvent';
import StateDemo from './StateDemo/StateDemo';
import StyleComponent from './StyleComponent/StyleComponent';
import RenderArray from './RenderArray/RenderArray';

function App() {
  return (
    <div className="App">
      {/* Buổi 1 */}
      {/* <RFC />
      <RFC />
      <RFC />
      <RCC />
      <BTLayout />
      <DataBiding />
      <HanldeEvent /> */}

      {/* Buổi 2 */}      
      {/* <StyleComponent /> */}
      <StateDemo />
      <RenderArray />


    </div>
  );
}

export default App;
