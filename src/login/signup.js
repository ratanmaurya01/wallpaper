import React, { useState } from 'react'
import CustomNavbar from '../navbar/navbar';
import '../App.css'
import TextField from '@mui/material/TextField';
import { NavLink } from 'react-router-dom';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import LockIcon from '@mui/icons-material/Lock';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import PersonIcon from '@mui/icons-material/Person'; // Import the desired icon
import EmailIcon from '@mui/icons-material/Email';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import { validateEmail } from '../Validation/validation'; // Import the validateEmail function
import Footer from '../navbar/footer'
import { database } from '../firebase';
import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
import { ref, set } from 'firebase/database';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'; // Import the 'createUserWithEmailAndPassword' function
import { useNavigate } from 'react-router-dom';

function Signup() {
  
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassowrd] = useState('');
  const [nameError, setNameError] = useState('');
  const [mobileError, setMobileError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwrdError, setPassowrdError] = useState('');
  const [open, setOpen] = React.useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleChangeName = (e) => {
    setNameError('');
    setName(e.target.value);

  };

  const handleChangeMobileNumber = (e) => {
    setMobileError('');
    const inputValue = e.target.value;
    setMobile(inputValue);
    let input = e.target.value.replace(/\D/, '').slice(0, 10); // Remove non-digit characters and limit length to 10 digits

    if (input.length > 0 && input.charAt(0) === '0') {
      input = input.slice(1);
    }
    if (input === '0') {
      // setMobileError('Phone number cannot be 0');
    } else {
      setMobile(input);
      // setMobileError(null);
    }

  };

  const handleChangeEmail = (e) => {
    setEmailError('');
    setEmail(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassowrdError('');
    setPassowrd(e.target.value);
  };
  
  const HandleSubmitButton = async () => {
    if (email.trim() !== '') {
      // Check if email is valid
      if (!validateEmail(email)) {
        setEmailError('Please enter a valid email address.');
        return;
      }
    }


    
    if (name.trim() === '') {
      setNameError('Please Enter Name.');
      return
    }
    if (mobile.trim() === '') {
      setMobileError('Please Enter Mobile Number.');
      return
    }

    if (mobile.length < 10) {
      setMobileError('Please Enter Valid Number. ');
      return
    }
    if (password.trim() === '') {
      setPassowrdError('Please Enter Password.');
      return
    }

    if (password.length < 8) {
      setPassowrdError('Please Should be min 8 Char.');
      return
    }

    setOpen(true);
    const currentDataRef = ref(database, `/userDetails/${mobile}/`);
    const data = {
      Name: name,
      Mobile: mobile,
      Email: email || 'na',
      Password: password,

    };

    let costumemail = `${mobile}@gmail.com`;

    const auth = getAuth();

    try {
      // Sign in the user with email and password
      const userCredential = await createUserWithEmailAndPassword(auth, costumemail, password);
      const user = userCredential.user;
      // console.log('User signed in:', user);
      await set(currentDataRef, data);
      setOpen(false);
     // toast("Hurrahh Accout created.  Now you are a new Member.. ");

     toast("Hurrahh Account created. Now you are a new Member..", {
      onClose: () => {
        setTimeout(() => {
          navigate('/welcome'); // Navigate to your desired page after Toast closes
        }, 1000); // Adjust the timeout as needed
      },
    });

      // Clear input fields after successful save
      // Reset input fields after successful save

      
      setName('');
      setMobile('');
      setEmail('');
      setPassowrd('');
      // You can perform further actions after successful sign-in here
    } catch (error) {
      console.error('Error signing in:', error.message);
      // Handle error, such as displaying an error message to the user
    }

  }


  return (
    <>
      <CustomNavbar />
      <div className='StartPageSignUp'>
        <section>

          <div className="px-1 py-4 px-md-5 text-center text-lg-start" style={{ backgroundColor: ' hsl(0, 0%, 96%)' }}>
            <div className="container">
              <div className="row gx-lg-5 align-items-center">
                <div className="col-lg-6 mb-5 mb-lg-0">
                  <h1 className="my-5 display-3 fw-bold ls-tight">
                    The Best Offer <br />
                    <span className="text-primary">For Your Business</span>
                  </h1>
                  <p style={{ color: 'hsl(217, 10%, 50.8%)' }}>
                    Embark on a journey towards success with our unparalleled offer tailored
                    specifically for your business needs. Our meticulously crafted solutions
                    are designed to elevate your operations, boost productivity, and maximize
                    profitability. Experience the difference as we guide you through a seamless
                    transition towards greater efficiency and prosperity. Embrace innovation,
                    seize opportunities, and unlock the full potential of your business today.
                  </p>
                </div>

                <div className="col-lg-6 mb-5 mb-lg-0">
                  <div className="card">
                    <div className="card-body py-5 px-md-5">

                      <div className="row">
                        <div className="form-outline mb-2">
                          <TextField
                            fullWidth
                            id="firstName"
                            label="First Name"
                            variant="standard"
                            error={!!nameError}
                            helperText={nameError}
                            InputProps={{
                              startAdornment: (
                                <InputAdornment position="start">
                                  <PersonIcon />
                                </InputAdornment>
                              ),
                            }}
                            inputProps={{ maxLength: 24 }}
                            onChange={handleChangeName}
                          />
                        </div>

                        {/* <div class="col-md-6 mb-4">
                            <TextField fullWidth id="fullWidth" label="Last Name" variant="standard" />
                          </div>
                        </div> */}

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
                            onChange={handleChangeMobileNumber}
                          />
                        </div>
                      </div>


                      <div className="form-outline mb-4">
                        <TextField
                          fullWidth
                          id="fullWidth"
                          label="Email Address (optional)"
                          variant="standard"
                          error={!!emailError}
                          helperText={emailError}
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <EmailIcon />
                              </InputAdornment>
                            ),
                          }}
                          inputProps={{ maxLength: 34 }}
                          onChange={handleChangeEmail}
                        />
                      </div>


                      <div className="form-outline mb-4">
                        <TextField
                          fullWidth
                          id="standard-basic"
                          label="Password"
                          variant="standard"
                          error={!!passwrdError}
                          helperText={passwrdError}
                          type={showPassword ? 'text' : 'password'}
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


                      {/* <div class="form-outline mb-4">
                        <TextField  fullWidth  id="fullWidth" label=" Passowrd " variant="standard"  />
                        </div> */}
                      <button className="btn btn-primary btn-block mb-4" onClick={HandleSubmitButton}>
                        Sign up
                      </button>


                      <div className="text-center">
                        <p>or sign up with:</p>
                        <button type="button" className="btn btn-link btn-floating mx-1">
                          <i className="fab fa-facebook-f"></i>
                        </button>

                        <button type="button" className="btn btn-link btn-floating mx-1">
                          <i className="fab fa-google"></i>
                        </button>

                        <button type="button" className="btn btn-link btn-floating mx-1">
                          <i className="fab fa-twitter"></i>
                        </button>

                        <button type="button" className="btn btn-link btn-floating mx-1">
                          <i className="fab fa-github"></i>
                        </button>
                      </div>
                      <p className="mb-5 pb-lg-2" style={{ color: '#393f81' }}>Already Member?

                        <NavLink to="/adminpage/login" style={{ color: '#393f81' }}>Register here</NavLink>

                      </p>


                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </section>

      </div>

      <ToastContainer
        position="top-center"
        pauseOnHover
        autoClose={5000}
      />

      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        onClick={(event) => event.stopPropagation()}
      >
        <CircularProgress color="primary" />
      </Backdrop>


      <Footer />


    </>
  )
}

export default Signup
