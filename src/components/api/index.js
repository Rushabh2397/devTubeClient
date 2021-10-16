import axios from 'axios'



export const userSignup = (data) => {
    return axios.post(`${process.env.REACT_APP_BACKEND}v1/auth/signup`, data)
}

export const userLogin = (data) => {
    return axios.post(`${process.env.REACT_APP_BACKEND}v1/auth/login`, data)
}

export const getAllVideos = (data) => {
    return axios.get(`${process.env.REACT_APP_BACKEND}v1/auth/get_all_videos`)
}

export const getVideoInfo = (data) => {
    return axios.post(`${process.env.REACT_APP_BACKEND}v1/auth/get_single_video`, data)
}

export const getUserChoices = (data) => {
    return axios.get(`${process.env.REACT_APP_BACKEND}v1/api/get_user_choices`)
}

export const addToLikedVideos = (data) => {
    return axios.put(`${process.env.REACT_APP_BACKEND}v1/api/add_to_liked_videos`, data)
}

export const removeFromLikedVideos = (data) => {
    return axios.put(`${process.env.REACT_APP_BACKEND}v1/api/remove_from_liked_videos`, data)
}

export const addToPlayList = (data) => {
    return axios.put(`${process.env.REACT_APP_BACKEND}v1/api/add_to_playlist`, data)
}

export const removeFromPaylist = (data) => {
    return axios.put(`${process.env.REACT_APP_BACKEND}v1/api/remove_from_playlist`, data)
}

export const createPlaylist = (data) => {
    return axios.post(`${process.env.REACT_APP_BACKEND}v1/api/create_playlist`, data)
}

export const userPlaylist = (data) => {
    return axios.get(`${process.env.REACT_APP_BACKEND}v1/api/get_user_playlist`)
}

export const deletePlaylist = (data) => {
    return axios.post(`${process.env.REACT_APP_BACKEND}v1/api/delete_playlist`, data)
}

export const userLikedVideos = (data) => {
    return axios.get(`${process.env.REACT_APP_BACKEND}v1/api/get_user_liked_videos`)
}

export const addToWatchLater = (data) => {
    return axios.put(`${process.env.REACT_APP_BACKEND}v1/api/add_to_watch_later`, data)
}

export const removeFromWatchLater = (data) => {
    return axios.put(`${process.env.REACT_APP_BACKEND}v1/api/remove_from_watch_later`, data)
}


export const userWatchLaterVideos = (data) => {
    return axios.get(`${process.env.REACT_APP_BACKEND}v1/api/get_user_watch_later`)
}

export const searchVideo = (data) => {
    return axios.post(`${process.env.REACT_APP_BACKEND}v1/auth/search`, data)
}