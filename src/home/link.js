import React from 'react'
import { BrowserRouter as  Route, Routes } from 'react-router-dom';
import Image from './Imagelist';  
import MainPage from './main'


function Link() {
    return (
        <>

            <section>
                <Routes>
                    <Route path="Imagelist" element={<Image />} />   
                </Routes>
            </section>

        </>
    )
}

export default Link;
