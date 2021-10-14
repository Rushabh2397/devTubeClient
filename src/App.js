import Navbar from './components/navbar/Navbar'
import Home from './components/home/Home'
import WatchVideo from './components/watchVideo/WatchVideo'
import { Route, Switch } from 'react-router-dom';
import './App.css'
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/> 
      {/* <WatchVideo/> */}
    </div>
  );
}

export default App;
