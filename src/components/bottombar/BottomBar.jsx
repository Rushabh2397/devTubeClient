import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import { NavLink } from 'react-router-dom';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';

import WatchLaterOutlinedIcon from '@mui/icons-material/WatchLaterOutlined';
const BottomBar = () => {
  

  return (
    <Box sx={{ display: {md:"none", lg: "none" }, position: 'fixed', bottom: "0", width: "100%" }}>
      <BottomNavigation
        sx={{
          display:'flex',
          justifyContent:'space-evenly'
        }}
      >
        <NavLink to="/home" style={{ display: "block", marginLeft: "15px", marginBottom: "15px", listStyle: "none", color: "black", textDecoration: "none" }}>
          <HomeOutlinedIcon sx={{ fontSize: "2rem", color: 'black' }} />
          
        </NavLink>

        <NavLink to="/playlist" style={{ display: "block", marginLeft: "15px", marginBottom: "15px", listStyle: "none", color: "black", textDecoration: "none" }}>
          <PlaylistAddIcon sx={{ fontSize: "2rem", color: 'black' }} />
          
        </NavLink>

        <NavLink to="/liked" style={{ display: "block", marginLeft: "15px", marginBottom: "15px", listStyle: "none", color: "black", textDecoration: "none" }}>
          <ThumbUpAltOutlinedIcon sx={{ fontSize: "2rem", color: 'black' }} />
          
        </NavLink>

        <NavLink to="/watch-later" style={{ display: "block", marginLeft: "15px", marginBottom: "15px", listStyle: "none", color: "black", textDecoration: "none" }}>
          <WatchLaterOutlinedIcon sx={{ fontSize: "2rem", color: 'black' }} />
        </NavLink>

      </BottomNavigation>
    </Box>
  );
}

export default BottomBar
