import Navbar from './components/navbar/Navbar'
import Home from './components/home/Home'
import WatchVideo from './components/watchVideo/WatchVideo'
import Signup from './components/signup/Signup'
import Login from './components/login/Login'
import { Route, Switch } from 'react-router-dom';
import './config/AxiosConfig'
import './App.css'
import { Toaster } from "react-hot-toast";
import Playlist from './components/playlist/Playlist'
import LikedVideo from './components/likedVideo/LikedVideo'
import WatchLater from './components/watchLater/WatchLater'
import BottomBar from './components/bottombar/BottomBar'
import Search from './components/search/Search'
import PrivateRoute from './PrivateRoute'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Toaster />
      <Switch>
        <Route path='/' component={Home} exact></Route>
        <Route path='/home' component={Home} exact></Route>
        <Route path='/watch/:video_id' component={WatchVideo} exact/>
        <Route path='/signup' component={Signup} exact/>
        <Route path='/login' component={Login} exact/>
        <PrivateRoute path='/playlist' component={Playlist} ></PrivateRoute>
        <PrivateRoute path='/liked' component={LikedVideo} ></PrivateRoute>
        <PrivateRoute path='/watch-later' component={WatchLater} ></PrivateRoute>
        <Route path='/search' component={Search} ></Route>
      </Switch>
      <BottomBar/>   

    </div>
  );
}

export default App;
