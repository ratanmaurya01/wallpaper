import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './login';
import Signup from './signup';
import Signout from './signout'

function Adminpage() {
    return (
        <>

            <section>
                <Routes>
                    <Route path="login" element={<Login />} />
                    <Route path="signup" element={<Signup />} />
                    <Route path="signout" element={<Signout />} />
   


                    
                   
                    
                </Routes>
            </section>

        </>
    )
}

export default Adminpage
