
import React, { useState, useEffect } from 'react';
import '../App.css'
import CustomNavbar from '../navbar/navbar';
import { auth } from '../firebase';
import { ref, getDatabase, onValue } from 'firebase/database';
import Admin from '../Image/Admin.jpg'
import Logout from '../Image/Logout.png';
import { FaEdit } from 'react-icons/fa'; // Import the edit icon from react-icons
import Pen from '../Image/pen.png'

function Welcome() {

    const [user, setUser] = useState(null); // State to hold user information
    const [Name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState("");
    const [loading, setLoading] = useState(true); // Loading state
    const [Email, setEmail] = useState('');



    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((authUser) => {
            if (authUser) {
                setUser(authUser);
                const emailParts = authUser.email.split('@'); // Split email by '@'
                if (emailParts.length === 2) {
                    const number = emailParts[0]; // Get the part before '@'
                    setPhoneNumber(number); // Set extracted number in state
                    getdataFromfirebase(number)
                }
            } else {
                // No user is logged in, you can redirect to another page or handle accordingly
                setUser(null);
                // Example: Redirect to another page
                window.location.href = '/'; // Redirect to your login page
            }
        });
        return () => unsubscribe(); // Cleanup function for unmounting
    }, []);
    const getdataFromfirebase = (number) => {
        const db = getDatabase();
        const adminRootReference = ref(db, `userDetails/${number}`);
        onValue(adminRootReference, (snapshot) => {
            const data = snapshot.val();
            if (data) {
                setName(data.Name);
                setEmail(data.Email);
            } else {
                console.log("Data not found in Firebase.");
            }
            setLoading(false); // Set loading to false after data retrieval
        });
    }

    return (
        <>
            <div>
                <CustomNavbar />
            </div>
            <div >
                <div>
                    {loading ? (
                        <h4>Loading...</h4>
                    ) : (
                        <>
                            <section className="vh-100 PageDown" style={{ backgroundColor: '#f4f5f7' }}>
                                <div className="container py-5 h-100">
                                    <div className="row d-flex justify-content-center align-items-center h-100">
                                        <div className="col col-lg-6 mb-4 mb-lg-0">
                                            <div className="card mb-3" style={{ borderRadius: '.5rem' }}>
                                                <div className="row g-0">
                                                    <div className="col-md-4 gradient-custom text-center text-white" style={{ borderTopLeftRadius: '.5rem', borderBottomLeftRadius: '.5rem' }}>
                                                        {/* Image with edit icon */}
                                                        <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                                            <img
                                                                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                                                                alt="Avatar"
                                                                className="img-fluid my-4"
                                                                style={{ width: '80px' }}
                                                            />
                                                            <div >
                                                                <i style={{ color: 'black' }} className="far fa-edit"></i>
                                                            </div>
                                                        </div>


                                                        <h5 style={{ color: 'black' }}>{Name}</h5>
                                                        <p style={{ color: 'black' }}>NA</p>
                                                      <i className="far fa-edit mb-5"></i> 

                                                    </div>

                                                    <div className="col-md-6 ">
                                                        <div className="card-body p-4 Information">
                                                            <h6>Information</h6>
                                                            <hr className="mt-0 mb-4" />
                                                            <div className="row pt-1">
                                                                <div className="col-6 mb-3">
                                                                    <h6>E-mail</h6>
                                                                    <p className="text-muted">{Email}</p>
                                                                </div>
                                                                <div className="col-6 mb-3">
                                                                    <h6>Phone</h6>
                                                                    <p className="text-muted">{phoneNumber}</p>
                                                                </div>
                                                            </div>
                                                            <h6>Projects</h6>
                                                            <hr className="mt-0 mb-4" />
                                                            <div className="row pt-1">
                                                                <div className="col-6 mb-3">
                                                                    <h6>Recent</h6>
                                                                    <p className="text-muted">Lorem ipsum</p>
                                                                </div>
                                                                <div className="col-6 mb-3">
                                                                    <h6>Most Viewed</h6>
                                                                    <p className="text-muted">Dolor sit amet</p>
                                                                </div>
                                                            </div>
                                                            <div className="d-flex justify-content-start">
                                                                <a href="#!"><i className="fab fa-facebook-f fa-lg me-3"></i></a>
                                                                <a href="#!"><i className="fab fa-twitter fa-lg me-3"></i></a>
                                                                <a href="#!"><i className="fab fa-instagram fa-lg"></i></a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </>
                    )}
                </div>


            </div>
        </>
    )
}

export default Welcome
