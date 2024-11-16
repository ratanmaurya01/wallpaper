import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import { auth } from '../firebase';
import userProfile from '../Image/userProfile.png'
import User from '../Image/user.png'
import { useNavigate } from 'react-router-dom';
import LoginButton from '../Image/logbutton.png';
import ProfilePhoto from '../Image/ProfilePhoto.png'
import { Dropdown } from '@mui/base/Dropdown';
import { Menu } from '@mui/base/Menu';
import { MenuButton as BaseMenuButton } from '@mui/base/MenuButton';
import { MenuItem as BaseMenuItem, menuItemClasses } from '@mui/base/MenuItem';
import { styled } from '@mui/system';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { confirmAlert } from 'react-confirm-alert'; // Import react-confirm-alert module
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css file
import ButtonSidebar from '../sidebar/buttonside'



const CustomNavbar = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null); // State to hold user information
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setUser(authUser);
      } else {
        setUser(null);
      }
    });
    return () => unsubscribe(); // Cleanup function for unmounting
  }, []);


  const handleNavigate = () => {
    navigate('/welcome');
  }
  const handleLogout = () => {
    ///  console.log('click me ');
    auth.signOut();
    navigate('/');
  };



  const Listbox = styled('ul')(
    ({ theme }) => `
    font-family: 'IBM Plex Sans', sans-serif;
    font-size: 0.875rem;
    box-sizing: border-box;
    padding: 6px;
    margin: 12px 0;
    min-width: 200px;
    border-radius: 12px;
    overflow: auto;
    outline: 0px;
    background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
    border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
    color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
    box-shadow: 0px 4px 6px ${theme.palette.mode === 'dark' ? 'rgba(0,0,0, 0.50)' : 'rgba(0,0,0, 0.05)'
      };
    z-index: 1;
    `,
  );

  const MenuItem = styled(BaseMenuItem)(
    ({ theme }) => `
    list-style: none;
    padding: 8px;
    border-radius: 8px;
    cursor: default;
    user-select: none;
  
    &:last-of-type {
      border-bottom: none;
    }
  
    &:focus {
      outline: 3px solid ${theme.palette.mode === 'dark' ? blue[600] : blue[200]};
      background-color: ${theme.palette.mode === 'dark' ? grey[800] : grey[100]};
      color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
    }
  
    &.${menuItemClasses.disabled} {
      color: ${theme.palette.mode === 'dark' ? grey[700] : grey[400]};
    }
    `,
  );

  const blue = {
    50: '#F0F7FF',
    100: '#C2E0FF',
    200: '#99CCF3',
    300: '#66B2FF',
    400: '#3399FF',
    500: '#007FFF',
    600: '#0072E6',
    700: '#0059B3',
    800: '#004C99',
    900: '#003A75',
  };

  const grey = {
    50: '#F3F6F9',
    100: '#E5EAF2',
    200: '#DAE2ED',
    300: '#C7D0DD',
    400: '#B0B8C4',
    500: '#9DA8B7',
    600: '#6B7A90',
    700: '#434D5B',
    800: '#303740',
    900: '#1C2025',
  };

  const MenuButton = styled(BaseMenuButton)(
    ({ theme }) => `
    font-family: 'IBM Plex Sans', sans-serif;
    font-weight: 600;
    font-size: 0.875rem;
    line-height: 1.5;
    padding: 8px 16px;
    border-radius: 8px;
    color: white;
    transition: all 150ms ease;
    cursor: pointer;
    background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
    border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
    color: ${theme.palette.mode === 'dark' ? grey[200] : grey[900]};
    box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  
    &:hover {
      background: ${theme.palette.mode === 'dark' ? grey[800] : grey[50]};
      border-color: ${theme.palette.mode === 'dark' ? grey[600] : grey[300]};
    }
  
    &:active {
      background: ${theme.palette.mode === 'dark' ? grey[700] : grey[100]};
    }
  
    &:focus-visible {
      box-shadow: 0 0 0 4px ${theme.palette.mode === 'dark' ? blue[300] : blue[200]};
      outline: none;
    }
    `,
  );



  const showConfirmationDialog = () => {
    confirmAlert({
      title: 'Confirm to LogOut',
      message: 'Are you sure you want to Logout ?',
      buttons: [
        {
          label: 'Yes',
          onClick: () => {

            handleLogout();

          },
        },
        {
          label: 'No',
          onClick: () => {

          },
        },
      ],
    });
  };



  return (
    <>
      <nav className="navbar fixed-top">
        <div className="container" >

      
          <div className="menu-icon" onClick={handleShowNavbar}>
            <h3 style={{ marginTop: '2px' }}>
              <NavLink style={{ textDecoration: 'none' }} to="/">
                Appy
              </NavLink>
            </h3>
          </div>
          <div className={`nav-elements ${showNavbar && 'active'}`}>
            <ul style={ {alignItems: 'center'}}> 
             
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/mainproduct/first">Product</NavLink>
              </li>

              <li>
                <NavLink to="/menu/hexconvert">App </NavLink>
              </li>

              <li>
                <NavLink to="/contact/contactpage">To do </NavLink>
              </li>

              {user ? (
                <>
                  <li>
                    <Dropdown>
                      <MenuButton>
                        <AccountCircleIcon style={{ marginRight: '5px' }} />
                      </MenuButton>

                      <Menu slots={{ listbox: Listbox }}>
                        <MenuItem  onClick={handleNavigate}>Profile</MenuItem>
                        <MenuItem onClick={showConfirmationDialog}>Log out</MenuItem>
                      </Menu>
                    </Dropdown>
                  </li>

                </>

              ) : (
                <li>
                  <NavLink to="/adminpage/login" className="Navlink Nav.Link">
                    <FaUserCircle />
                  </NavLink>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default CustomNavbar;
