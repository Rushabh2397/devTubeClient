import { Box, Grid, Toolbar } from "@mui/material"
import ReactPlayer from 'react-player'






const Home = () => {


    return (
        <Box sx={{ marginLeft: "150px" }}>
            <Toolbar />
            {/* <Toolbar /> */}
            <Grid container spacing={2} sx={{marginTop:"1rem"}}>
                <Grid item lg={3}>
                    <ReactPlayer light  width="90%" height="200px" url='https://www.youtube.com/watch?v=ysz5S6PUM-U' />
                    <p>Rushbah</p>
                    <p>Sancheti</p>
                </Grid>

                <Grid item lg={3}>
                    <ReactPlayer width="90%" height="200px" url='https://www.youtube.com/watch?v=ysz5S6PUM-U' />
                </Grid>

                <Grid item lg={3}>
                    <ReactPlayer width="90%" height="200px" url='https://www.youtube.com/watch?v=ysz5S6PUM-U' />
                </Grid>

                <Grid item lg={3}>
                    <ReactPlayer width="90%" height="200px" url='https://www.youtube.com/watch?v=ysz5S6PUM-U' />
                </Grid>

                <Grid item lg={3}>
                    <ReactPlayer width="90%" height="200px" url='https://www.youtube.com/watch?v=ysz5S6PUM-U' />
                </Grid>


            </Grid>
        </Box>
    )
}

export default Home