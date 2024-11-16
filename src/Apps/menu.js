
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Hexconvertor from './hexconvert';

function Menu() {
    return (
        <>
            <section>
                <Routes>
                  <Route path="hexconvert" element={<Hexconvertor/>} />  
                </Routes>
            </section>

        </>
    )
}

export default Menu
