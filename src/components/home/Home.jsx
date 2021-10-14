import { Box, Grid, Toolbar, Tooltip } from "@mui/material"
import Avatar from '@mui/material/Avatar';

import ReactPlayer from 'react-player'
import { NavLink } from "react-router-dom";






const Home = () => {


    return (
        <Box sx={{ marginLeft: "150px" }}>
            <Toolbar />
            {/* <Toolbar /> */}
            <Grid container spacing={2} sx={{ marginTop: "1rem" }}>
                <Grid item lg={3} md={12} >
                    {/* <ReactPlayer light playing={false}    controls={false}  width="90%" height="200px" url="https://youtu.be/ZvbzSrg0afE"  onClickPreview={()=>{console.log("Rushabh Sancheti")}}	 /> */}
                    <Box sx={{ width: "90%" }}>
                        <NavLink to="/watch/" >
                            <img src="https://i.ytimg.com/vi/ZvbzSrg0afE/hqdefault.jpg" sx={{ height: "200px" }} />
                        </NavLink>
                    </Box>
                    <Box sx={{ display: "flex", alignItems: 'center', width: "95%" }}>

                        <Avatar sx={{ width: 56, height: 56 }} src="https://yt3.ggpht.com/ytc/AKedOLR8gqN3fHHNYbehMcsJ49rapBPhJMGPYSrl6YQyNg=s88-c-k-c0x00ffffff-no-rj" />
                        <Box sx={{ display: "flex", flexDirection: 'column', marginLeft: "0.8rem" }}>
                            <Tooltip title="How JavaScript Works 🔥& Execution Context | Namaste JavaScript Ep.1">
                                <NavLink style={{ textOverflow: "ellipsis", overflow: "hidden", whiteSpace: "nowrap", width: "48%",textDecoration:"none",color:"black" }} to="/watch">
                                    <span >How JavaScript Works 🔥& Execution Context | Namaste JavaScript Ep.1</span>
                                </NavLink>
                            </Tooltip>
                            <Box style={{ fontSize: "0.9rem", marginTop: "0.5rem", }} >Akshay Saini</Box>
                        </Box>

                    </Box>


                </Grid>
                <Grid item lg={3} >
                    {/* <ReactPlayer light playing={false}    controls={false}  width="90%" height="200px" url="https://youtu.be/ZvbzSrg0afE"  onClickPreview={()=>{console.log("Rushabh Sancheti")}}	 /> */}
                    <Box sx={{ width: "95%" }}>
                        <img src="https://i.ytimg.com/vi/ZvbzSrg0afE/hqdefault.jpg" />
                    </Box>
                    <p>Rushbah</p>
                    <p>Sancheti</p>
                </Grid>
                <Grid item lg={3} >
                    {/* <ReactPlayer light playing={false}    controls={false}  width="90%" height="200px" url="https://youtu.be/ZvbzSrg0afE"  onClickPreview={()=>{console.log("Rushabh Sancheti")}}	 /> */}
                    <Box sx={{ width: "95%" }}>
                        <img src="https://i.ytimg.com/vi/ZvbzSrg0afE/hqdefault.jpg" />
                    </Box>
                    <p>Rushbah</p>
                    <p>Sancheti</p>
                </Grid>
                <Grid item lg={3} >
                    {/* <ReactPlayer light playing={false}    controls={false}  width="90%" height="200px" url="https://youtu.be/ZvbzSrg0afE"  onClickPreview={()=>{console.log("Rushabh Sancheti")}}	 /> */}
                    <Box sx={{ width: "95%" }}>
                        <img src="https://i.ytimg.com/vi/ZvbzSrg0afE/hqdefault.jpg" />
                    </Box>
                    <p>Rushbah</p>
                    <p>Sancheti</p>
                </Grid>
                <Grid item lg={3} >
                    {/* <ReactPlayer light playing={false}    controls={false}  width="90%" height="200px" url="https://youtu.be/ZvbzSrg0afE"  onClickPreview={()=>{console.log("Rushabh Sancheti")}}	 /> */}
                    <Box sx={{ width: "95%" }}>
                        <img src="https://i.ytimg.com/vi/ZvbzSrg0afE/hqdefault.jpg" />
                    </Box>
                    <p>Rushbah</p>
                    <p>Sancheti</p>
                </Grid>



            </Grid>
        </Box>
    )
}

export default Home