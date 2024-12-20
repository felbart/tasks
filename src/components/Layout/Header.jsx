
import { AppBar, Avatar, Badge, IconButton, Toolbar } from '@mui/material';
import { FaBell } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <AppBar position="static">
            <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div>
                    {/* <img src="/path/to/logo.png" alt="Logo" style={{ height: '40px' }} /> */}
                    <span className='text-2xl font-bold uppercase'>Tasks</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <IconButton color="inherit">
                        <Badge badgeContent={4} color="secondary">
                            <FaBell />
                        </Badge>
                    </IconButton>
                    <Link to="/profile" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <Avatar alt="User Avatar" src="/path/to/avatar.jpg" />
                    </Link>
                </div>
            </Toolbar>
        </AppBar>
    );
};

export default Header;