import { createContext, useContext, useReducer } from 'react'




const VideoContext = createContext();

const videoReducer = (state, action) => {
    switch (action.type) {
        case 'GET_ALL_VIDEO':
            return {
                ...state,
                videos: action.payload

            }

        case 'USER_CHOICES':
            return {
                ...state,
                playlist: action.payload.playlist,
                likedVideos: action.payload.likedVideos,
                watchLater : action.payload.watch_later
            }

        case 'CREATE_PLAYLIST':
            return {
                ...state,
                playlist: [...state.playlist, action.payload]
            }

        case 'ADD_VIDEO_TO_PLAYLIST':
            return {
                ...state,
                playlist: state.playlist.map(play => {
                    if (play._id === action.payload.playlist_id) {
                        play.videos.push(action.payload.video_id)
                    }
                    return play
                })
            }


        case 'REMOVE_VIDEO_FROM_PLAYLIST':

            return {
                ...state,
                playlist: state.playlist.map(play => {
                    if (play._id === action.payload.playlist_id) {
                        play.videos = play.videos.filter(vid => vid !== action.payload.video_id)
                    }
                    return play
                })
            }

        case 'REMOVE_VIDEO_FROM_USER_PLAYLIST':

            return {
                ...state,
                playlist: state.playlist.map(play => {
                    if (play._id === action.payload.playlist_id) {
                        play.videos = play.videos.filter(vid => vid._id !== action.payload.video_id)
                    }
                    return play
                })
            }

        case 'ADD_TO_LIKED_VIDEOS':
            return {
                ...state,
                likedVideos: [...state.likedVideos, action.payload.video_id]
            }
        case 'REMOVE_FROM_LIKED_VIDEOS':
            return {
                ...state,
                likedVideos: state.likedVideos.filter(id => id !== action.payload.video_id)
            }

        case 'REMOVE_FROM_USER_LIKED_VIDEOS':
            return {
                ...state,
                likedVideos : state.likedVideos.filter(video=>video._id!==action.payload.video_id)
            }

            case 'ADD_TO_WATCH_LATER':
            return {
                ...state,
                watchLater: [...state.watchLater, action.payload.video_id]
            }
        case 'REMOVE_FROM_WATCH_LATER':
            return {
                ...state,
                watchLater: state.watchLater.filter(id => id !== action.payload.video_id)
            }

        case 'REMOVE_FROM_USER_WATCH_LATER':
            return {
                ...state,
                watchLater : state.watchLater.filter(video=>video._id!==action.payload.video_id)
            }

        case 'DELETE_PLAYLIST':
            return {
                ...state,
                playlist: state.playlist.filter(play => play._id !== action.payload.playlist_id)
            }


        default:
            return state

    }
}

let intialState = {
    videos: [],
    playlist: [],
    likedVideos: [],
    watchLater:[]
}

export const VideoProvider = ({ children }) => {
    //const videoState = JSON.parse(localStorage.getItem("devTube")) || {name:'',email:'',token:''};
    // if(userState){
    //     intialState.name= userState.name
    //     intialState.token = userState.token
    //     intialState.email = userState.email
    // }

    const [state, dispatch] = useReducer(videoReducer, intialState)

    return (
        <>
            <VideoContext.Provider value={{ videoState: state, videoDispatch: dispatch }}>
                {children}
            </VideoContext.Provider>
        </>)
}

export const useVideo = () => {
    return useContext(VideoContext)
}