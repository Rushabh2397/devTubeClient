import { Box, Menu, TextField } from "@mui/material"
import { useState, useRef } from "react";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import CheckIcon from '@mui/icons-material/Check';
import { addToPlayList, removeFromPaylist, createPlaylist } from '../api'
import ModalComp from '../modalComp/ModalComp'
import Loader from '../loader/Loader'
import toast from 'react-hot-toast'

const Playlist = ({ anchorEl, handleClose, open, vid, userPlaylist, videoDispatch }) => {

    const [loading, setLoading] = useState(false)
    const [modalOpen, setModalOpen] = useState(false)
    const handleOpenModal = () => { setModalOpen(true) };
    const handleCloseModal = () => { setModalOpen(false) };
    const playlistName = useRef(null)

    const addToUserPlaylist = async (playlist_id) => {
        try {
            const res = await addToPlayList({ playlist_id: playlist_id, video_id: vid })
            
            videoDispatch({ type: 'ADD_VIDEO_TO_PLAYLIST', payload: { playlist_id: playlist_id, video_id: vid } })
            toast.success(res.data.message)
        } catch (error) {
            toast.error('Something went wrong.')
        }
    }

    const removeFromUserPlaylist = async (playlist_id) => {
        try {
            setLoading(true)
            const res = await removeFromPaylist({ playlist_id: playlist_id, video_id: vid })
            videoDispatch({ type: 'REMOVE_VIDEO_FROM_PLAYLIST', payload: { playlist_id: playlist_id, video_id: vid } })
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


    const createNewPlaylist = async (name) => {
        try {
            if (name.trim() === '') {
                toast.error('Name is required.')
            } else {
                setLoading(true)
                const res = await createPlaylist({ name: name })

                setModalOpen(false)
                setLoading(false)
                videoDispatch({ type: 'CREATE_PLAYLIST', payload: { name: name, videos: [] } })

                toast.success(res.data.message, {
                    duration: 1500,
                    position: 'top-right',
                })


            }

        } catch (error) {
            setLoading(false)
            toast.error(error.response.data.message, {
                duration: 1500,
                position: 'top-right',
            })
        }
    }


    const addNewPlaylist = () => {
        return <Box sx={{ position: 'relative' }}>
            <Box sx={{ position: 'absolute', right: "10px", top: "18px", zIndex: 4 }} onClick={() => { createNewPlaylist(playlistName.current.value) }} >
                <AddCircleOutlineIcon />
            </Box>
            <TextField inputRef={playlistName} fullWidth label="playlist name" id="fullWidth" />

        </Box>
    }

    return (
        <Box>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >

                {/* <NavLink style={{ textDecoration: 'none', listStyle: 'none', color: "black" }} to="/signup"><MenuItem onClick={handleClose}>Signup</MenuItem></NavLink>
                <NavLink style={{ textDecoration: 'none', listStyle: 'none', color: "black" }} to="/login"><MenuItem onClick={handleClose}>Login</MenuItem></NavLink>
                <MenuItem onClick={() => { handleClose() }}>Logout</MenuItem> */}
                {

                    userPlaylist?.map((play, index) => {
                        return <Box
                            key={index}
                            sx={{ display: 'flex', alignItems: 'center', padding: "5px 15px", cursor: "pointer" }}
                            onClick={() => {
                                play.videos.some(id => id === vid) ? removeFromUserPlaylist(play._id) : addToUserPlaylist(play._id)
                                handleClose()
                            }}
                        >
                            <span>{
                                play.videos.some(id => id === vid) ?
                                    <CheckIcon
                                    />
                                    :
                                    <AddCircleOutlineIcon
                                    />} </span>
                            <span style={{ marginLeft: "8px" }}>{play.name}</span>
                        </Box>
                    })
                }
                <Box
                    sx={{ display: 'flex', alignItems: 'center', padding: "5px 15px" }}
                    onClick={handleOpenModal}
                >
                    <AddCircleOutlineIcon sx={{ marginRight: "8px" }} /> New Playlist
                </Box>

            </Menu>
            {modalOpen && <ModalComp component={addNewPlaylist} handleClose={handleCloseModal} open={modalOpen} />}
            {loading && <Loader loading={loading} />}
        </Box>
    )
}

export default Playlist