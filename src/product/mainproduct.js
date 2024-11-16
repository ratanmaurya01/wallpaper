// App.js or MainProduct.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import First from './first'; // Corrected import
import ProductDetailsPage from './ProductDetailsPage'; // Corrected import
import ProductPage from './second'

function MainProduct() {
    return (
        // <Router>
            <Routes>
                <Route path="/first" element={<First />} />
          
                <Route path="/second" element={<ProductPage />} />
            </Routes>
        // </Router>
    );
}

export default MainProduct;






































// import React from 'react'
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import First from './first';

// function MainProduct() {
//     return (
//         <>

//             <section>
//                 <Routes>
//                   <Route path="first" element={<First />} />  
              
//                 </Routes>
//             </section>

//         </>
//     )
// }

// export default MainProduct
