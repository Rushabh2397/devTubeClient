import { createContext, useContext, useReducer} from 'react'




const VideoContext = createContext();

const videoReducer = (state, action) => {
    switch (action.type) {
        case 'GET_ALL_VIDEO':
            return {
                videos: action.payload
            }
            
        default:
            return state

    }
}

let intialState = {
    videos:[]
}

export const VideoProvider = ({ children }) => {
    //const videoState = JSON.parse(localStorage.getItem("devTube")) || {name:'',email:'',token:''};
    // if(userState){
    //     intialState.name= userState.name
    //     intialState.token = userState.token
    //     intialState.email = userState.email
    // }

    const [state, dispatch] = useReducer(videoReducer,  intialState )

    return (
        <>
            <VideoContext.Provider value={{videoState:state,videoDispatch:dispatch}}>
                {children}
            </VideoContext.Provider>
        </>)
}

export const useVideo = () => {
    return useContext(VideoContext)
}