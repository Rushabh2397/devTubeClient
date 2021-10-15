import { useEffect, useState } from 'react'
import { Box, Grid, Toolbar, Avatar, Typography } from "@mui/material";
import ReactPlayer from "react-player";
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import WatchLaterOutlinedIcon from '@mui/icons-material/WatchLaterOutlined';
import HistoryIcon from '@mui/icons-material/History';
import { getVideoInfo, getUserChoices, addToLikedVideos, removeFromLikedVideos } from '../api'
import Loader from '../loader/Loader'
import { useParams } from 'react-router-dom'
import Playlist from './Playlist';
import {useVideo} from '../../context/VideoContext'





const WatchVideo = () => {
    
    const {videoState,videoDispatch} = useVideo()
    const [video, setVideo] = useState('');
    const [loading, setLoading] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    let { video_id } = useParams()


    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const getVideo = async () => {
        try {
            setLoading(true)
            const res = await getVideoInfo({ video_id: video_id })
            setVideo(res.data.data)
            setLoading(false)
        } catch (error) {
            setLoading(false)
        }
    }

    const getUserChoicesInfo = async () => {
        try {
            const res = await getUserChoices();
            let video = res.data.data
            videoDispatch({type:'USER_CHOICES',payload:video})
        } catch (error) {

        }
    }

    const isVideoLiked = ()=>{
        if(videoState && videoState?.likedVideos?.length>0){
           return  videoState.likedVideos.some(vid => vid === video_id)
        } else {
            return false
        }
    }

  

    const handleLikeClick = async (likedValue) => {
        try {
            const res = likedValue ? await addToLikedVideos({ video_id: video_id }) : removeFromLikedVideos({ video_id: video_id });
            let type = likedValue ? "ADD_TO_LIKED_VIDEOS" :"REMOVE_FROM_LIKED_VIDEOS"
            videoDispatch({type:type,payload:{video_id:video_id}})
        } catch (error) {

        }
    }

    useEffect(() => {
        getVideo()
        getUserChoicesInfo()
    }, [])



    return (
        <Box sx={{ marginLeft: "150px" }}>
            <Toolbar />
            <Grid container align="center" sx={{ marginTop: "2rem" }}>
                <Grid item lg={12} align="center" >
                    <ReactPlayer
                        width="80%"
                        url={video?.url}
                        style={{ minHeight: "30rem" }}
                        controls
                    />
                    <Box sx={{ display: "flex", width: "80%", alignItems: 'center' }}>
                        <Avatar component="span" sx={{ width: 56, height: 56 }} src={video?.channel_image} />
                        <Box sx={{ display: "flex", flexDirection: "column", marginLeft: "1rem", justifyContent: 'flex-start' }}>
                            <span style={{ fontSize: "1.5rem" }}  >{video?.title}</span>
                            <span style={{ fontSize: "1.1rem", marginTop: "0.5rem", textAlign: "left" }} >{video.channel_name}</span>
                        </Box>
                    </Box>
                    <Box sx={{ width: "80%", textAlign: "left", marginTop: "1rem" }}>
                        <PlaylistAddIcon
                            fontSize="large"
                            sx={{ marginRight: "2rem" }}
                            onClick={handleClick}
                        />
                        { isVideoLiked() ?
                            <ThumbUpIcon
                                color="action"
                                fontSize="large"
                                sx={{ marginRight: "2rem" }}
                                onClick={() => { handleLikeClick(false) }}
                            />
                            :
                            <ThumbUpAltOutlinedIcon
                                fontSize="large"
                                sx={{ marginRight: "2rem" }}
                                onClick={() => { handleLikeClick(true) }}
                            />}
                        <WatchLaterOutlinedIcon
                            fontSize="large"
                            sx={{ marginRight: "2rem" }}
                        />
                    </Box>
                    <Box sx={{ width: "80%", textAlign: "left", marginTop: "1rem" }}>
                        <Typography variant="h6" >Description</Typography>
                        <Typography variant="subtitle1">
                            {video?.description}
                        </Typography>
                    </Box>
                </Grid>

            </Grid>
            {loading && <Loader loading={loading} />}
            {
                open &&
                <Playlist
                    anchorEl={anchorEl}
                    open={open}
                    handleClose={handleClose}
                    vid ={video_id}
                    userPlaylist = {videoState.playlist}
                    videoDispatch ={videoDispatch}
                    getUserChoicesInfo={getUserChoicesInfo}
                />
            }
        </Box>
    );
}

export default WatchVideo