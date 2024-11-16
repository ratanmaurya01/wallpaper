import React from 'react'
import CustomNavbar from '../navbar/navbar';
import '../App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Button from '@mui/material/Button';
import Card from './card'

function Contactpage() {

  const notify = () => toast("Data Save Successfully ");

  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <>
 
      <CustomNavbar />
      <div className='StartPage '>
           
          <div>
               <Card />
          </div>
      </div>


    </>
  )
}

export default Contactpage
