import React, { useState, useEffect, useRef, useCallback } from 'react';
import axios from 'axios';
import './style.css'; // Import your CSS file
import SearchIcon from '@mui/icons-material/Search';
import { Button } from 'react-bootstrap';
import { Dialog, Box, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import GetAppIcon from '@mui/icons-material/GetApp';
import { auth } from '../firebase';
import Alert from '@mui/material/Alert';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';


const ImageDownload = () => {
  const [imageData, setImageData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [fullImage, setFullImage] = useState(null);
  const [user, setUser] = useState(null); // State to track user login status
  const [showAlert, setShowAlert] = useState(false); // State to control alert visibility
  const observer = useRef();


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

  useEffect(() => {
    const fetchImages = async (page, query) => {
      setLoading(true);
      try {
        const endpoint = query ? 'https://api.unsplash.com/search/photos' : 'https://api.unsplash.com/photos';
        const params = {
          client_id: '9Qnbgl1n6i0vg7LTWx2MsY4x3KaSJAsYdpVyxUQfsMI',
          per_page: 20,
          page: page,
          query: query,
        };

        const response = await axios.get(endpoint, { params });
        const images = query ? response.data.results : response.data;
        setImageData((prevImages) => [...prevImages, ...images]);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching images:', error);
        setLoading(false);
      }
    };

    fetchImages(currentPage, searchTerm);
  }, [currentPage, searchTerm]);

  const lastImageElementRef = useCallback(node => {
    if (loading) return;
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        setCurrentPage(prevPage => prevPage + 1);
      }
    });
    if (node) observer.current.observe(node);
  }, [loading]);

  const handleSearch = (e) => {
    e.preventDefault();
    setImageData([]);
    setCurrentPage(1);
    setSearchTerm(searchQuery);
  };

  const handleImageClick = (imageUrl, altDescription) => {
    // setFullImage({ imageUrl, altDescription });

    // if (user) {
    //   setFullImage({ imageUrl, altDescription });
    // } else {

    //   setShowAlert(true); // Show alert when user is not logged in
    // }

  };


  const handleUploadImage = () => {

    console.log("You Click me ");




  }


  const handleCloseModal = () => {
    setFullImage(null);
  };


  const handleDownload = (imageUrl) => {
    const link = document.createElement('a');
    link.href = imageUrl;
    link.setAttribute('download', 'image.jpg');
    link.setAttribute('target', '_blank'); // Open in a new tab
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };



  const handleCloseAlert = () => {
    setShowAlert(false); // Close alert when clicked on the close button
  };


  return (
    <>

      <Dialog open={Boolean(fullImage)} onClose={handleCloseModal} maxWidth="lg" fullWidth>

        <Box style={{ marginLeft: '5%' }} display="flex" justifyContent="space-between" alignItems="center">
          <IconButton edge="start" color="inherit" onClick={handleCloseModal} aria-label="close">
            <CloseIcon />
          </IconButton>
          <div>
            <IconButton style={{ marginRight: '5%' }} edge="end" color="inherit" onClick={() => handleDownload(fullImage.imageUrl)} aria-label="download">
              <GetAppIcon />
            </IconButton>

          </div>
        </Box>


        {fullImage && (
          <img src={fullImage.imageUrl} alt={fullImage.altDescription} style={{ width: '100%', height: 'auto' }} />
        )}

      </Dialog>

      <form onSubmit={handleSearch} style={{ marginBottom: '20px', display: 'flex', justifyContent: 'center' }}>
        <input
          type="text"
          className='form-input'
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search for images"
          style={{
            marginRight: '10px',
            padding: '10px',
            borderRadius: '25px', // Make the border radius higher for a more rounded look
            border: '1px solid #ccc',
            outline: 'none', // Optional: Removes the default outline on focus
            boxShadow: '0 0 5px rgba(0, 0, 0, 0.1)' // Optional: Adds a subtle shadow for better visibility
          }}
        />
        <Button
          variant="outlined"
          type="submit"
          style={{
            padding: '10px',
            borderRadius: '5px',
            border: 'none',
            background: '#007bff',
            color: '#fff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <SearchIcon />
        </Button>
      </form>
      <div className="row" style={{ margin: '0' }}>
        {imageData.map((image, index) => (
          <div
            // key={image.id}

            className="col-lg-4 col-md-12 mb-4 mb-lg-0"
            ref={index === imageData.length - 1 ? lastImageElementRef : null}
            onClick={() => handleImageClick(image.urls.regular, image.alt_description)}
            style={{ cursor: 'pointer' }}
          >
            <div className="card" style={{ padding: '0', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '10px' }}>
              <img className="w-100 rounded mb-4" src={image.urls.regular} alt={image.alt_description} />
              <div className="card-body">
                <p><strong>Description:</strong> {image.alt_description || "NA"}</p>
                <p><strong>Created At:</strong> {new Date(image.created_at).toLocaleDateString() || "NA"} </p>
                <p><strong>Bio:</strong> {image.user.bio || "NA"}</p>
                <p><strong>Location:</strong> {image.user.location || "NA"}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      {loading && <div className="loading">Loading...</div>}

      {showAlert && (
        <div className="alert-overlay">
          <Alert
            variant="filled"
            severity="info"
            onClose={handleCloseAlert}
            style={{ zIndex: 999, position: 'absolute', top: '20%', left: '50%', transform: 'translate(-50%, -50%)' }}
          >
            You are not logged in. Please log in to continue.
          </Alert>
        </div>
      )}

    </>
  );
};

export default ImageDownload;
