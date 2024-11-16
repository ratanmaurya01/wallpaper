
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Contactpage from './contactpage';
import Card from './card'

function ContactPage() {
    return (
        <>

            <section>
                <Routes>
                  <Route path="contactpage" element={<Contactpage />} />  
                  <Route path="card" element={<Card />} />  
                    
                </Routes>
            </section>

        </>
    )
}

export default ContactPage
