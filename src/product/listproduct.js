
import React from 'react';
import { Link } from 'react-router-dom';
import productsData from './product.json'; // Assuming this is where you import your product data

export default function ListProduct() {
    return (
        
        <>

        <section>
            <div className="container ">
                {productsData.map(product => (
                    <div key={product.id} className="row justify-content-center mb-3">
                        <div className="col-md-12 col-xl-10">
                            <div className="card shadow-0 border rounded-3">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-md-12 col-lg-3 col-xl-3 mb-4 mb-lg-0">
                                            <div className="bg-image hover-zoom ripple rounded ripple-surface">
                                                <img src={product.image} className="w-100" alt={product.name} />
                                                 <a href="#!">
                                                    <div className="hover-overlay">
                                                        <div className="mask" style={{ backgroundColor: 'rgba(253, 253, 253, 0.15)' }}></div>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-lg-6 col-xl-6">
                                            <h5>{product.name}</h5>
                                            <div className="d-flex flex-row">
                                                {/* Dynamically generating star icons */}
                                                {Array.from({ length: Math.floor(product.rating) }, (_, index) => (
                                                    <i key={index} className="fa fa-star text-danger"></i>
                                                ))}
                                                {product.rating % 1 !== 0 && <i className="fa fa-star-half text-danger"></i>}
                                                <span>{product.reviews}</span>
                                            </div>
                                            <p className="text-truncate mb-4 mb-md-0">{product.description}</p>
                                        </div>
                                        <div className="col-md-6 col-lg-3 col-xl-3 border-sm-start-none border-start">
                                            <div className="d-flex flex-row align-items-center mb-1">
                                                <h4 className="mb-1 me-1">${product.price}</h4>
                                                <span className="text-danger"><s>${product.discountedPrice}</s></span>
                                            </div>

                                            <div>
                                                {product.freeShipping &&
                                                    <div className="mt-2">
                                                        <span className="text-success">Free Shipping</span>
                                                    </div>
                                                }
                                            </div>
                                            <div className="d-flex flex-column mt-4">
                                                <Link to={{ pathname: `/product/${product.id}`, state: { product: product } }}>
                                                    <button data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-sm" type="button">Details</button>

                                                </Link>
                                            </div>



                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
       
        </>
    );
}






























// import React from 'react';
// import productsData from './product.json';

// export default function ListProduct() {
//     return (
//         <>
//             <section style={{ backgroundColor: '#eee' }}>
//                 <div className="container py-5">
//                     {productsData.map(product => (
//                         <div key={product.id} className="row justify-content-center mb-3">
//                             <div className="col-md-12 col-xl-10">
//                                 <div className="card shadow-0 border rounded-3">
//                                     <div className="card-body">
//                                         <div className="row">
//                                             <div className="col-md-12 col-lg-3 col-xl-3 mb-4 mb-lg-0">
//                                                 <div className="bg-image hover-zoom ripple rounded ripple-surface">
//                                                     <img src={product.image} className="w-100" alt={product.name} />
//                                                     <a href="#!">
//                                                         <div className="hover-overlay">
//                                                             <div className="mask" style={{ backgroundColor: 'rgba(253, 253, 253, 0.15)' }}></div>
//                                                         </div>
//                                                     </a>
//                                                 </div>
//                                             </div>
//                                             <div className="col-md-6 col-lg-6 col-xl-6">
//                                                 <h5>{product.name}</h5>
//                                                 <div className="d-flex flex-row">
//                                                     {/* Render stars based on product rating */}
//                                                 </div>
//                                                 <span>{product.reviews}</span>
//                                                 <div className="mt-1 mb-0 text-muted small">
//                                                     {Object.entries(product.attributes).map(([key, value]) => (
//                                                         <span key={key}>
//                                                             {value} <span className="text-primary"> • </span>
//                                                         </span>
//                                                     ))}
//                                                 </div>
//                                                 <p className="text-truncate mb-4 mb-md-0">{product.description}</p>
//                                             </div>
//                                             <div className="col-md-6 col-lg-3 col-xl-3 border-sm-start-none border-start">
//                                                 <div className="d-flex flex-row align-items-center mb-1">
//                                                     <h4 className="mb-1 me-1">${product.price}</h4>
//                                                     <span className="text-danger"><s>${product.discountedPrice}</s></span>
//                                                 </div>
//                                                 {product.freeShipping && <h6 className="text-success">Free shipping</h6>}
//                                                 <div className="d-flex flex-column mt-4">
//                                                     <button data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-sm" type="button">Details</button>
//                                                     <button data-mdb-button-init data-mdb-ripple-init className="btn btn-outline-primary btn-sm mt-2" type="button">
//                                                         Add to wishlist
//                                                     </button>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </section>
//         </>
//     );
// }
