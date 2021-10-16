import { useState } from 'react'
import { Box, Paper, Toolbar, Typography } from "@mui/material"
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import { NavLink } from "react-router-dom";
import { userLikedVideos,removeFromLikedVideos } from '../api'
import { useEffect } from "react";
import { useVideo } from '../../context/VideoContext'
import Loader from '../loader/Loader'
import toast from 'react-hot-toast';
//import toast from 'react-hot-toast'



const LikedVideo = () => {

    const [loading, setLoading] = useState(false)
    const { videoState, videoDispatch } = useVideo();

    const getUserLikedVideo = async () => {
        try {
            setLoading(true)
            const res = await userLikedVideos();
            let video = res.data.data
            videoDispatch({ type: 'USER_CHOICES', payload: video })
            setLoading(false)
        } catch (error) {
            setLoading(false)
        }
    }

    const removeFromUserLikedVideos = async (video_id) => {
        try {
            const res = removeFromLikedVideos({ video_id: video_id });
            videoDispatch({ type: "REMOVE_FROM_USER_LIKED_VIDEOS", payload: { video_id: video_id } })
            toast.success(res.data.message)
        } catch (error) {
           toast.error('Something went wrong')
        }
    }



    useEffect(() => {
        getUserLikedVideo()
        // eslint-disable-next-line
    }, [])

    return (

        <Box sx={{ marginLeft: {md:"150px", lg: "150px" }, marginTop: "2rem" }}>
            <Toolbar />

            <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                {videoState?.likedVideos?.length > 0 && <Typography gutterBottom={true} variant="h4">Liked Videos</Typography>}

                {
                    videoState?.likedVideos?.length > 0 ?
                        (videoState.likedVideos.map((vid, index) => {
                            return <Paper key={index} elevation={5} sx={{ position: 'relative', display: 'flex', width: { xs: "100%",md:"70%", lg: "50%" }, padding: "10px", marginBottom: "10px" }}>
                                <Box>
                                    <NavLink to={`/watch/${vid._id}`}>
                                        <img src={vid.thumbnail} alt="video" style={{ width: "150px", height: "100px" }} />
                                    </NavLink>
                                </Box>
                                <Box sx={{ display: 'flex', flexDirection: 'column', marginLeft: '8px', }}>
                                    <span style={{ marginBottom: '8px' }}><strong>{vid.title}</strong></span>
                                    <span>{vid.channel_name}</span>
                                </Box>
                                <Box sx={{ position: 'absolute', right: '5px', bottom: '5px', cursor: 'pointer' }} onClick={()=>{removeFromUserLikedVideos(vid._id)}}>
                                    <DeleteOutlinedIcon />
                                </Box>

                            </Paper>
                        }))
                        :
                        (<Typography variant="h5">NO Video added to these playlist.</Typography>)
                }

            </Box>
            {loading && <Loader loading={loading} />}
        </Box>

    );
}

export default LikedVideo