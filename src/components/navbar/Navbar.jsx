import { useState, useRef } from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import { NavLink, useRouteMatch } from 'react-router-dom'
import { Menu, MenuItem } from '@mui/material';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import Sidebar from '../sidebar/Sidebar'
import { useHistory } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'

const Navbar = () => {
    const { user, userDispatch } = useAuth()
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const login = useRouteMatch('/login')
    const signup = useRouteMatch('/signup')
    const history = useHistory()
    const searchQuery = useRef(null)

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const logout = () => {
        userDispatch({ type: 'LOGOUT_SUCCESS' })
        localStorage.removeItem("devtube")
        history.push('/home')
    }

    const operationSearch = (e) => {
        if (e.key === 'Enter') {
            history.push(`/search?text=${searchQuery.current.value}`)
        }

    }

    const searchOnClick = () => {
        history.push(`/search?text=${searchQuery.current.value}`)
    }

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

            {!user.token && <NavLink style={{ textDecoration: 'none', listStyle: 'none', color: "black" }} to="/signup"><MenuItem onClick={handleClose}>Signup</MenuItem></NavLink>}
            {!user.token && <NavLink style={{ textDecoration: 'none', listStyle: 'none', color: "black" }} to="/login"><MenuItem onClick={handleClose}>Login</MenuItem></NavLink>}
            {user.token && <MenuItem onClick={() => { handleClose(); logout() }}>Logout</MenuItem>}

        </Menu>
    }


    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="fixed" sx={{ zIndex: 1300, background: "white" }}>
                <Toolbar
                    sx={{
                        display: "flex",
                        justifyContent: "space-between"
                    }}
                >
                    <NavLink style={{ textDecoration: 'none', listStyle: 'none', color: "black" }} to="/home">
                        <Typography variant="h4" component="div" color="black"  >
                            DevTube
                     </Typography>
                    </NavLink>
                    {
                        !login && !signup &&
                        <Box
                            sx={{
                                display: {
                                    xs: 'none',
                                    sm: 'none',
                                    md: 'block'
                                },
                                position: 'relative',
                                border: "1px solid black",
                                width: "30%"
                            }}
                        >
                            <Box
                                sx={{
                                    position: 'absolute',
                                    zIndex: 2,
                                    right: "4px",
                                    borderLeft: "1px solid black",
                                    padding: "4px 11px 4px 11px"
                                }}
                                onClick={searchOnClick}
                            >
                                <SearchIcon sx={{ color: 'black' }} />
                            </Box>
                            <InputBase
                                inputRef={searchQuery}
                                type="search"
                                placeholder="Search"
                                sx={{
                                    width: {
                                        lg: "45ch",
                                        md: "23ch"
                                    },
                                    padding: "2px 8px 2px 8px "
                                }}

                                onKeyPress={operationSearch}

                            />
                        </Box>
                    }
                    <IconButton
                        color="inherit"
                        aria-label="menu"
                        onClick={handleClick}
                    >
                        <AccountCircleOutlinedIcon sx={{ fontSize: "2.3rem", color: "black" }} />
                    </IconButton>
                </Toolbar>
            </AppBar>
            {!login && !signup && <Sidebar />}
            {open && profileMenu()}
        </Box>
    );
}

export default Navbar
