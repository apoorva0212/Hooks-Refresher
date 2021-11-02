import logo from './logo.svg';
import './App.css';
import StateTutorial from './UseState/StateTutorial';
import Reducer from './UseReducer/Reducer';
import EffectTutorial from './UseEffect/EffectTutorial';
import RefTutorial from './UseRef/RefTutorial';
import ImperativeHandle from './UseImperativeHandle/ImperativeHandle';

function App() {
  return (
    <div className="App">
     {/* <StateTutorial/> */}
     {/* <Reducer /> */}
     {/* <EffectTutorial /> */}
     {/* <RefTutorial /> */}
     <ImperativeHandle />
    </div>
  );
}

export default App;
