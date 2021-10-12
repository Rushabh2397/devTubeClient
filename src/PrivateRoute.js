import {Route,Redirect } from 'react-router-dom'
import {useAuth} from './context/AuthContext'

const PrivateRoute = ({...props})=>{
    const {user} = useAuth()
    console.log("user",user)
    return user.token ? (
        <Route  {...props}/>
      ) : (
        <Redirect to= "/login"/>
      )

}

export default PrivateRoute