import {useEffect, useState} from 'react'
import { Box, Grid, Toolbar, Tooltip } from "@mui/material"
import Avatar from '@mui/material/Avatar';
import { NavLink } from "react-router-dom";
import {getAllVideos} from '../api'
import {useVideo} from '../../context/VideoContext'
import Loader from '../loader/Loader'




const Home = () => {

    const {videoState,videoDispatch} = useVideo()
    const [loading,setLoading] = useState(false)

    const getVideos = async ()=>{
        try {
            setLoading(true)
           const res = await getAllVideos() 
           videoDispatch({type:'GET_ALL_VIDEO',payload:res.data.data})
           setLoading(false)
        } catch (error) {
            setLoading(false)
        }
    }

    useEffect(()=>{
      getVideos()
    },[])


    return (
        <Box sx={{ marginLeft: "150px" }}>
            <Toolbar />
            {/* <Toolbar /> */}
            <Grid container spacing={2} sx={{ marginTop: "1rem" }}>
                {
                    videoState?.videos?.length>0 && videoState.videos.map(video=>{
                        return    <Grid item lg={3} md={12} >
                        {/* <ReactPlayer light playing={false}    controls={false}  width="90%" height="200px" url="https://youtu.be/ZvbzSrg0afE"  onClickPreview={()=>{console.log("Rushabh Sancheti")}}	 /> */}
                        <Box sx={{ width: "90%" }}>
                            <NavLink to={`/watch/${video._id}`} >
                                <img src={video.thumbnail} sx={{ height: "200px" }} />
                            </NavLink>
                        </Box>
                        <Box sx={{ display: "flex", alignItems: 'center', width: "95%" }}>
    
                            <Avatar sx={{ width: 56, height: 56 }} src={video.channel_image} />
                            <Box sx={{ display: "flex", flexDirection: 'column', marginLeft: "0.8rem" }}>
                                <Tooltip title={video.title}>
                                    <NavLink style={{ textOverflow: "ellipsis", overflow: "hidden", whiteSpace: "nowrap", width: "48%",textDecoration:"none",color:"black" }} to={`/watch/${video._id}`}>
                                        <span >{video.title}</span>
                                    </NavLink>
                                </Tooltip>
                                <Box style={{ fontSize: "0.9rem", marginTop: "0.5rem", }} >{video.channel_name}</Box>
                            </Box>
    
                        </Box>
    
    
                    </Grid>
                    })
                }

             



            </Grid>
            {loading && <Loader loading={loading} />}
        </Box>
    )
}

export default Home