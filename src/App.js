import Navbar from './components/navbar/Navbar'
import Home from './components/home/Home'
import WatchVideo from './components/watchVideo/WatchVideo'
import { Route, Switch } from 'react-router-dom';
import './App.css'
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Switch>
        <Route path='/' component={Home} exact></Route>
        <Route path='/home' component={Home} exact></Route>
        {/* <Route path='/signup' component={Signup} exact />
        <Route path='/login' component={Login} exact /> */}
        <Route path='/watch/:video_id' component={WatchVideo} exact/>
        
        {/* <PrivateRoute path='/rules' component={Rules} exact ></PrivateRoute>
        <PrivateRoute path='/quiz' component={Quiz}></PrivateRoute>
        <PrivateRoute path='/score' component={Score} exact ></PrivateRoute>
        <PrivateRoute path='/scoreboard' component={Scoreboard} exact ></PrivateRoute> */}
      </Switch>

      {/* <WatchVideo/> */}
    </div>
  );
}

export default App;
