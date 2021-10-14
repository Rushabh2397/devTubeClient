import { Box, Grid, Toolbar, Avatar, Typography } from "@mui/material";
import ReactPlayer from "react-player";
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import WatchLaterOutlinedIcon from '@mui/icons-material/WatchLaterOutlined';
import HistoryIcon from '@mui/icons-material/History';







const WatchVideo = () => {

    return (
        <Box sx={{ marginLeft: "150px" }}>
            <Toolbar />
            <Grid container align="center" sx={{ marginTop: "2rem" }}>
                <Grid item lg={12} align="center" >
                    <ReactPlayer
                        width="80%"
                        url="https://youtu.be/ZvbzSrg0afE"
                        style={{ minHeight: "30rem" }}
                        controls
                    />
                    <Box sx={{ display: "flex", width: "80%", alignItems: 'center' }}>
                        <Avatar component="span" sx={{ width: 56, height: 56 }} src="https://yt3.ggpht.com/ytc/AKedOLR8gqN3fHHNYbehMcsJ49rapBPhJMGPYSrl6YQyNg=s88-c-k-c0x00ffffff-no-rj" />
                        <Box sx={{ display: "flex", flexDirection: "column", marginLeft: "1rem", justifyContent: 'flex-start' }}>
                            <span style={{ fontSize: "1.5rem" }}  >How JavaScript Works 🔥& Execution Context | Namaste JavaScript Ep.1</span>
                            <span style={{ fontSize: "1.1rem", marginTop: "0.5rem", textAlign: "left" }} >Akshay Saini</span>
                        </Box>
                    </Box>
                    <Box sx={{ width: "80%", textAlign: "left", marginTop: "1rem" }}>
                        <PlaylistAddIcon fontSize="large" sx={{ marginRight: "2rem" }} />
                        <ThumbUpAltOutlinedIcon fontSize="large" sx={{ marginRight: "2rem" }} />
                        <WatchLaterOutlinedIcon fontSize="large" sx={{ marginRight: "2rem" }} />
                    </Box>
                    <Box sx={{ width: "80%", textAlign: "left", marginTop: "1rem" }}>
                        <Typography variant="h6" >Description</Typography>
                        <Typography variant="subtitle1">
                            Understanding how JavaScript works behind the scenes, inside the JS Engine will make you a better developer. This video covers details about Execution Context Creation and its 2 phases: Memory Allocation Phase and the Code Execution phase.
                        </Typography>
                    </Box>
                </Grid>

            </Grid>

        </Box>
    );
}

export default WatchVideo