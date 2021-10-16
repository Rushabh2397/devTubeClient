import { Box, Drawer, List, Toolbar} from "@mui/material"
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import WatchLaterOutlinedIcon from '@mui/icons-material/WatchLaterOutlined';
//import HistoryIcon from '@mui/icons-material/History';
import { NavLink } from "react-router-dom";


const drawerWidth = "100px";



const Sidebar = () => {
    return (
        <Box sx={{ display:{xs:"none",md:'flex',lg:'flex'}  }}>
            <Drawer
                variant="permanent"
                sx={{
                    width: drawerWidth,
                    border: "none",
                    flexShrink: 0,
                    [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box', border: "none", },
                }}
            >
                <Toolbar />
                <Box sx={{ overflow: 'auto' }}>
                    <List>

                        {/* <ListItem button key={"Home"} >
                            <ListItemIcon>
                                <HomeIcon sx={{ fontSize: "2rem", color: 'black' }} />
                            </ListItemIcon>
                            <ListItemText primary={"Home"} />
                        </ListItem> */}
                        <NavLink to="/home" style={{display:"block",marginLeft:"15px",marginBottom:"15px",listStyle:"none",color:"black",textDecoration:"none"}}>
                           <HomeOutlinedIcon sx={{ fontSize: "2rem", color: 'black'}} />
                            <Box sx={{fontSize:"0.8rem"}} >Home</Box>
                        </NavLink>

                        <NavLink to="/playlist" style={{display:"block",marginLeft:"15px",marginBottom:"15px",listStyle:"none",color:"black",textDecoration:"none"}}>
                           <PlaylistAddIcon sx={{ fontSize: "2rem", color: 'black'}} />
                            <Box sx={{fontSize:"0.8rem"}} >Playlist</Box>
                        </NavLink>

                        <NavLink to="/liked" style={{display:"block",marginLeft:"15px",marginBottom:"15px",listStyle:"none",color:"black",textDecoration:"none"}}>
                           <ThumbUpAltOutlinedIcon sx={{ fontSize: "2rem", color: 'black'}} />
                            <Box sx={{fontSize:"0.8rem"}} >Liked</Box>
                        </NavLink>

                        <NavLink to="/watch-later" style={{display:"block",marginLeft:"15px",marginBottom:"15px",listStyle:"none",color:"black",textDecoration:"none"}}>
                           <WatchLaterOutlinedIcon sx={{ fontSize: "2rem", color: 'black'}} />
                            <Box sx={{fontSize:"0.8rem"}} >Watch<br/>Later</Box>
                        </NavLink>

                        {/* <NavLink to="/liked" style={{display:"block",marginLeft:"15px",marginBottom:"15px",listStyle:"none",color:"black",textDecoration:"none"}}>
                           <HistoryIcon sx={{ fontSize: "2rem", color: 'black'}} />
                            <Box sx={{fontSize:"0.8rem"}} >History</Box>
                        </NavLink> */}

                        

                        {/* <ListItem button key={"Playlist"}>
                            <ListItemIcon>
                                <PlaylistAddIcon sx={{ fontSize: "2rem", color: 'black' }} />
                            </ListItemIcon>
                            <ListItemText primary={"Playlist"} />
                        </ListItem> */}


                    </List>
                
                </Box>
            </Drawer>
        </Box>

    )
}

export default Sidebar