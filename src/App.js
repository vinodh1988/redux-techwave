import logo from './logo.svg';
import './App.css';
import {SecondHOC} from './Redux/hoc/SecondHOC'
const  App=()=>{
  return(
    <div style={{overflow:'hidden'}}>
      <h1>Root component</h1>
      <SecondHOC></SecondHOC>
    </div>
  )
}

export default App;
