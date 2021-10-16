import {useEffect, useState} from 'react'
import { Box, Grid, Toolbar, Tooltip } from "@mui/material"
import Avatar from '@mui/material/Avatar';
import { NavLink,useLocation } from "react-router-dom";
import {searchVideo} from '../api'
import {useVideo} from '../../context/VideoContext'
import Loader from '../loader/Loader'


function useQuery() {
    return new URLSearchParams(useLocation().search);
  }

const Search = () => {

    const {videoState,videoDispatch} = useVideo()
    const [loading,setLoading] = useState(false)
    let query = useQuery();
    let searchTerm = query.get("text") 

    const getVideos = async ()=>{
        try {
            setLoading(true)
           const res = await searchVideo({searchTerm:searchTerm}) 
           videoDispatch({type:'GET_ALL_VIDEO',payload:res.data.data})
           setLoading(false)
        } catch (error) {
            setLoading(false)
        }
    }

    useEffect(()=>{
      getVideos()
      // eslint-disable-next-line
    },[searchTerm])


    return (
        <Box sx={{ marginLeft:{lg: "150px"} }}>
            <Toolbar />
            {/* <Toolbar /> */}
            <Grid container align="center" spacing={2} sx={{ marginTop: "1rem" }}>
                {
                    videoState?.videos?.length>0 && videoState.videos.map(video=>{
                        return    <Grid item lg={3} md={12} sm={12} xs={12} >
                        <Box sx={{ width: "90%" }}>
                            <NavLink to={`/watch/${video._id}`} >
                                <img src={video.thumbnail} sx={{ height: "200px" }} alt="video"/>
                            </NavLink>
                        </Box>
                        <Box sx={{ display: "flex", alignItems: 'center', width: "95%" }}>
    
                            <Avatar sx={{ width: 56, height: 56 }} src={video.channel_image} />
                            <Box sx={{ display: "flex", flexDirection: 'column', marginLeft: "0.8rem" }}>
                                <Tooltip title={video.title}>
                                    <NavLink style={{textDecoration:"none",color:"black" }}  to={`/watch/${video._id}`}>
                                        <p style={{ textOverflow: "ellipsis", overflow: "hidden",whiteSpace:"nowrap",width:"200px",textDecoration:"none",color:"black" }} >{video.title}</p>
                                    </NavLink>
                                </Tooltip>
                                <Box style={{ fontSize: "0.9rem", marginTop: "0.5rem", textAlign:'left'}} >{video.channel_name}</Box>
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

export default Search