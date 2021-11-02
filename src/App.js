import logo from './logo.svg';
import './App.css';
import StateTutorial from './UseState/StateTutorial';
import Reducer from './UseReducer/Reducer';
import EffectTutorial from './UseEffect/EffectTutorial';

function App() {
  return (
    <div className="App">
      <EffectTutorial />
     {/* <StateTutorial/> */}
     {/* <Reducer /> */}
    </div>
  );
}

export default App;
