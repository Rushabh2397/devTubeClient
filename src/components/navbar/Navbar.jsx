import {useState} from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import {NavLink,useRouteMatch} from 'react-router-dom'
import { Menu, MenuItem } from '@mui/material';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import Sidebar from '../sidebar/Sidebar'

const Navbar = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const login = useRouteMatch('/login')
    const signup = useRouteMatch('/signup')

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    // const logout = ()=>{
    //     userDispatch({type:'LOGOUT_SUCCESS'})
    //     localStorage.removeItem("quizMaster")
    //     history.push('/home')
    // }

    const profileMenu = () => {
        return <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
                'aria-labelledby': 'basic-button',
            }}
        >
            
            <NavLink style={{textDecoration:'none',listStyle:'none',color:"black"}} to="/signup"><MenuItem onClick={handleClose}>Signup</MenuItem></NavLink>
            <NavLink style={{textDecoration:'none',listStyle:'none',color:"black"}} to="/login"><MenuItem  onClick={handleClose}>Login</MenuItem></NavLink>
            <MenuItem   onClick={()=>{handleClose()}}>Logout</MenuItem>

        </Menu>
    }


    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="fixed"  sx={{zIndex:1300,background:"white"}}>
                <Toolbar
                  sx={{
                      display:"flex",
                      justifyContent:"space-between"
                  }}
                >

                    <Typography variant="h4" component="div" color="black"  >
                        DevTube
                     </Typography>
                     {
                      !login && !signup &&   
                    <Box
                        sx={{
                            display:{
                                sm:'none',
                                md:'block'
                            },
                            position:'relative',
                            border: "1px solid black",
                            width:"30%"
                        }}
                    >
                        <Box
                        sx={{
                            position:'absolute',
                            zIndex:2,
                            right:"4px",
                            borderLeft:"1px solid black",
                            padding:"4px 11px 4px 11px"
                        }}
                        >
                            <SearchIcon sx={{color:'black'}} />
                        </Box>
                        <InputBase
                        type="search"
                         placeholder="Search" 
                         sx={{
                            width:{
                                lg:"45ch",
                                md:"23ch"
                            },
                            padding:"2px 8px 2px 8px "
                         }}
                         
                        />
                    </Box>
                    }
                    <IconButton
                        color="inherit"
                        aria-label="menu"
                        onClick={handleClick}
                    >
                        <AccountCircleOutlinedIcon sx={{ fontSize: "2.3rem",color:"black" }} />
                    </IconButton>
                </Toolbar>
            </AppBar>
            {!login && !signup && <Sidebar/>}
            {open && profileMenu()}
        </Box>
    );
}

export default Navbar
