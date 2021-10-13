import Navbar from './components/navbar/Navbar'
import Home from './components/home/Home'
import { Route, Switch } from 'react-router-dom';
import './App.css'
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/> 
    </div>
  );
}

export default App;
