import React from 'react';

import CustomNavbar from '../navbar/navbar';
import Image from '../home/Imagelist'
import '../App.css'
import Footer from '../navbar/footer';
import MainPage from '../home/main'
import ImageDownload from '../Apps/imageDownloads'
const Send = () => {

  return (
    <>
      <div>
        <CustomNavbar />
      </div>

      {/* className='StartPage' */}

      <div className='StartPage '>

        <ImageDownload />

        {/* <MainPage/> */}
      </div>

      <Footer />

    </>
  );
};

export default Send;
