import logo from './logo.svg';
import './App.css';
import StateTutorial from './UseState/StateTutorial';
import Reducer from './UseReducer/Reducer';
import EffectTutorial from './UseEffect/EffectTutorial';
import RefTutorial from './UseRef/RefTutorial';

function App() {
  return (
    <div className="App">
     {/* <StateTutorial/> */}
     {/* <Reducer /> */}
     {/* <EffectTutorial /> */}
     <RefTutorial />
    </div>
  );
}

export default App;
