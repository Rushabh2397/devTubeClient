import { useState } from 'react'
import { Box, Paper, Toolbar, Typography } from "@mui/material"
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import { NavLink } from "react-router-dom";
import Swal from 'sweetalert2'
import { userPlaylist, removeFromPaylist, deletePlaylist } from '../api'
import { useEffect } from "react";
import { useVideo } from '../../context/VideoContext'
import Loader from '../loader/Loader'
import toast from 'react-hot-toast'



const Playlist = () => {

    const [loading, setLoading] = useState(false)
    const { videoState, videoDispatch } = useVideo();

    const getUserPlaylist = async () => {
        try {
            setLoading(true)
            const res = await userPlaylist();
            let video = res.data.data
            videoDispatch({ type: 'USER_CHOICES', payload: video })
            setLoading(false)
        } catch (error) {
            setLoading(false)
        }
    }

    const deleteUserPlaylist = (playlist_id) => {
        try {
            Swal.fire({
                backdrop: false,
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
            }).then(async (result) => {
                if (result.isConfirmed) {
                    const res = await deletePlaylist({ playlist_id: playlist_id })
                    videoDispatch({ type: 'DELETE_PLAYLIST', payload: { playlist_id: playlist_id } })
                    Swal.fire(
                        {
                            backdrop: false,
                            title: 'Deleted!',
                            text: `${res.data.message}`,
                            icon: 'success'
                        }



                    )
                }
            })
        } catch (error) {
            toast.error('Something went wrong.')
        }
    }

    const removeFromUserPlaylist = async (playlist_id, vid) => {
        try {
            setLoading(true)
            const res = await removeFromPaylist({ playlist_id: playlist_id, video_id: vid })
            videoDispatch({ type: 'REMOVE_VIDEO_FROM_USER_PLAYLIST', payload: { playlist_id: playlist_id, video_id: vid } })
            setLoading(false)
            toast.success(res.data.message, {
                duration: 1500,
                position: 'top-right',
            })
        } catch (error) {
            setLoading(false)
            toast.error(error.response.data.message, {
                duration: 1500,
                position: 'top-right',
            })
        }
    }

    useEffect(() => {
        getUserPlaylist()
        // eslint-disable-next-line
    }, [])

    return (

        <Box sx={{ marginLeft:{md:"150px", lg: "150px" }, marginTop: "2rem" }}>
            <Toolbar />
            {
                videoState && videoState?.playlist?.length > 0 && videoState.playlist.map((play,index) => {
                    return <Box key={index} sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>

                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width:{xs:"90%",md:"80%",lg:"50%"} , marginBottom: "10px" }}>
                            <Typography align='left'  sx={{ fontSize:"2rem" }} >{play.name}</Typography>
                            <DeleteOutlinedIcon sx={{ color: 'red' }} onClick={() => { deleteUserPlaylist(play._id) }} />
                        </Box>
                        {
                            play.videos.length > 0 ?
                                (play.videos.map(vid => {
                                    return <Paper key={vid._id} elevation={5} sx={{ position: 'relative', display: 'flex', width:{xs:"100%",md:"80%",lg:"50%"}, padding: "10px", marginBottom: "10px" }}>
                                        <Box>
                                            <NavLink to={`/watch/${vid._id}`}>
                                                <img src={vid.thumbnail} alt="video" style={{ width: "150px", height: "100px" }} />
                                            </NavLink>
                                        </Box>
                                        <Box sx={{ display: 'flex', flexDirection: 'column', marginLeft: '8px', }}>
                                            <span style={{ marginBottom: '8px' }}><strong>{vid.title}</strong></span>
                                            <span>{vid.channel_name}</span>
                                        </Box>
                                        <Box sx={{ position: 'absolute', right: '5px', bottom: '5px', cursor: 'pointer' }} onClick={() => { removeFromUserPlaylist(play._id, vid._id) }} >
                                            <DeleteOutlinedIcon />
                                        </Box>

                                    </Paper>
                                }))
                                :
                                (<Typography variant="h5">NO Video added to these playlist.</Typography>)
                        }

                    </Box>
                })


            }
         {loading && <Loader loading={loading} />}
        </Box>

    );
}

export default Playlist