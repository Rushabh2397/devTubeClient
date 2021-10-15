import axios from 'axios'



export const getAllVideos = (data)=>{
    return axios.get(`${process.env.REACT_APP_BACKEND}v1/auth/get_all_videos`)
}

export const getVideoInfo = (data)=>{
    return axios.post(`${process.env.REACT_APP_BACKEND}v1/auth/get_single_video`,data)
}

export const getUserChoices = (data)=>{
    return axios.get(`${process.env.REACT_APP_BACKEND}v1/auth/get_user_choices`)
}

export const addToLikedVideos = (data)=>{
    return axios.put(`${process.env.REACT_APP_BACKEND}v1/auth/add_to_liked_videos`,data)
}

export const removeFromLikedVideos = (data)=>{
    return axios.put(`${process.env.REACT_APP_BACKEND}v1/auth/remove_from_liked_videos`,data)
}

export const addToPlayList = (data)=>{
    return axios.put(`${process.env.REACT_APP_BACKEND}v1/auth/add_to_playlist`,data)
}

export const removeFromPaylist = (data)=>{
    return axios.put(`${process.env.REACT_APP_BACKEND}v1/auth/remove_from_playlist`,data)
}

export const createPlaylist = (data)=>{
    return axios.post(`${process.env.REACT_APP_BACKEND}v1/auth/create_playlist`,data)
}
