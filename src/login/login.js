import React, { useState } from 'react';
import '../App.css'
import CustomNavbar from '../navbar/navbar';
import { NavLink } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import LockIcon from '@mui/icons-material/Lock';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import EmailIcon from '@mui/icons-material/Email';
import { validateEmail } from '../Validation/validation'; // Import the validateEmail function
import Footer from '../navbar/footer'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import { ToastContainer, toast } from 'react-toastify';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import LogPage from '../Image/logPage.jpg'

function Login() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [Password, setPassword] = useState('');
  const [mobile, setMobile] = useState('');
  const [mobileError, setMobileError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [open, setOpen] = React.useState(false);


  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleChangeInput = (e) => {
    setMobileError('');
    setMobile(e.target.value);
  }

  const handleChangePassword = (e) => {
    setPasswordError('');
    setPassword(e.target.value);
  }

  const HandleSubmitButton = () => {
    // if (email.trim() === '') {
    //   setEmailError('Please enter an email address.');
    //   return;
    // } else if (!validateEmail(email)) {
    //   setEmailError('Please enter a valid email address.');
    //   return;
    // }
    if (mobile.trim() === '') {
      setMobileError('Please Enter Mobile Number.');
      return
    }

    if (mobile.length < 10) {
      setMobileError('Please Enter Valid Number. ');
      return
    }

    if (Password.trim() === '') {
      setPasswordError('Please Enter Password.');
      return;
    }
    if (Password.length < 8) {
      setPasswordError('Please Enter Password.');
      return;
    }
    const email = `${mobile}@gmail.com`; // Convert phone number to custom email format

    setOpen(true);
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, Password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        //  console.log('Logged user:', user);
        setOpen(false);
        navigate('/welcome');

        // ...
      })
      .catch((error) => {
        setOpen(false);
        const errorCode = error.code;
        const errorMessage = error.message;
        // setPasswordError(errorCode);
        // setPasswordError(errorMessage);
        if (errorCode === 'auth/user-not-found') {
          // Account does not exist
          setPasswordError('Account does not exist');
        } else if (errorCode === 'auth/invalid-credential') {
          // Invalid credential error
          setPasswordError('Invalid Phone or password');
        } else {
          // Other errors
          setPasswordError(errorMessage);
        }
      });

  }

  return (
    <>
      <CustomNavbar />

     
       <div className=' LoginPage'>

       <section className="vh-25 " style={{ backgroundColor: '#9A616D' , marginTop:'2%'}}>
        <div className="container py-5 h-50">
          <div className="row d-flex justify-content-center align-items-center h-50">
            <div className="col col-xl-10">
              <div className="card" style={{ borderRadius: '1rem' }}>
                <div className="row g-0">
                  <div className="col-md-6 col-lg-5 d-none d-md-block">
                    <img src={LogPage}
                      alt="login form" className="img-fluid" style={{ height: '100%', borderRadius: '1rem 0 0 1rem' }} />
                  </div>
                  <div className="col-md-6 col-lg-7 d-flex align-items-center">
                    <div className="card-body p-4 p-lg-5 text-black">
                      <div className="d-flex align-items-center mb-3 pb-1">
                        <i className="fas fa-cubes fa-2x me-3" style={{ color: '#ff6219' }}></i>
                        <span className="h1 fw-bold mb-0">Logo</span>
                      </div>

                      <h5 className="fw-normal mb-3 pb-3" style={{ letterSpacing: '1px' }}>Sign into your account</h5>

                      <div className="form-outline mb-4">
                        <TextField
                          fullWidth
                          id="mobileNumber"
                          label="Mobile Number"
                          variant="standard"
                          error={!!mobileError}
                          helperText={mobileError}
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <PhoneAndroidIcon />
                              </InputAdornment>
                            ),
                          }}
                          inputProps={{ maxLength: 10 }}
                          value={mobile}
                          onChange={handleChangeInput}
                        />
                      </div>


                      <div className="form-outline mb-4">
                        <TextField
                          fullWidth
                          id="standard-basic"
                          label="Password"
                          variant="standard"
                          type={showPassword ? 'text' : 'password'}
                          error={!!passwordError}
                          helperText={passwordError}
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <LockIcon />
                              </InputAdornment>
                            ),
                            endAdornment: (
                              <InputAdornment position="end">
                                <IconButton onClick={togglePasswordVisibility} edge="end">
                                  {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                                </IconButton>
                              </InputAdornment>
                            ),
                          }}
                          inputProps={{ maxLength: 24 }}
                          onChange={handleChangePassword}
                        />
                      </div>

                      <div className="pt-1 mb-4">
                        <button className="btn btn-dark btn-lg btn-block" onClick={HandleSubmitButton}>Login</button>
                      </div>

                      <a className="small text-muted" href="#!">Forgot password?</a>

                      <p className="mb-5 pb-lg-2" style={{ color: '#393f81' }}>Don't have an account?
                        <NavLink to="/adminpage/signup" style={{ color: '#393f81' }}>Register here</NavLink>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
        </div>

      <Backdrop
        sx={{ color: '#red', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        onClick={(event) => event.stopPropagation()}
      >
        <CircularProgress color="primary" />
      </Backdrop>
      <Footer />

    </>
  )
}

export default Login
