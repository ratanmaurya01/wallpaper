import React from 'react';
import { useParams } from 'react-router-dom';
import productsData from './product.json'; // Assuming this is where you import your product data
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomNavbar from '../navbar/navbar';

function ProductDetailsPage() {
    const { productId } = useParams();

    // Find the product with the matching ID
    const product = productsData.find(product => product.id === parseInt(productId));

    if (!product) {
        // Handle case when product is null or undefined
        return <div>Product not found!</div>;
    }

    return (
        <>

            <CustomNavbar />
            <div className='StartPage '>
                <div className="container my-5">
                    <h1 className="mb-4">Product Details</h1>
                    <div className="row">
                        <div className="col-md-6 mb-4">
                            <img src={product.image} alt={product.name} className="img-fluid rounded" />
                            <img src={product.image2} alt={product.name} className="img-fluid rounded mt-3" />
                        </div>
                        <div className="col-md-6">
                            <h2 className="mb-3">{product.name}</h2>
                            <p><strong>Rating:</strong> {product.rating} / 5</p>
                            <p><strong>Reviews:</strong> {product.reviews}</p>
                            <p><strong>Description:</strong> {product.description}</p>
                            <p><strong>Price:</strong> ${product.price}</p>
                            <p><strong>Discounted Price:</strong> ${product.discountedPrice}</p>
                            <p><strong>Free Shipping:</strong> {product.freeShipping ? 'Yes' : 'No'}</p>
                            <h3 className="mt-4">Attributes:</h3>
                            <ul className="list-unstyled">
                                {Object.entries(product.attributes).map(([key, value]) => (
                                    <li key={key} className="mb-2">
                                        <strong>{key}:</strong> {value}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div>


                        <div className="container my-5">
                            <h1 className="mb-4">Product OverView</h1>
                            <div className="row">
                                <div className="col-lg-8 mb-4">
                                    <div className="border rounded-2 px-3 py-2 bg-white">
                                        {/* Tabs */}
                                        <ul className="nav nav-tabs nav-pills nav-justified mb-3" id="ex1" role="tablist">
                                            <li className="nav-item" role="presentation">
                                                <a className="nav-link active" id="ex1-tab-1" data-mdb-toggle="tab" href="#ex1-tabs-1" role="tab" aria-controls="ex1-tabs-1" aria-selected="true">Specification</a>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                                <a className="nav-link" id="ex1-tab-2" data-mdb-toggle="tab" href="#ex1-tabs-2" role="tab" aria-controls="ex1-tabs-2" aria-selected="false">Warranty info</a>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                                <a className="nav-link" id="ex1-tab-3" data-mdb-toggle="tab" href="#ex1-tabs-3" role="tab" aria-controls="ex1-tabs-3" aria-selected="false">Shipping info</a>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                                <a className="nav-link" id="ex1-tab-4" data-mdb-toggle="tab" href="#ex1-tabs-4" role="tab" aria-controls="ex1-tabs-4" aria-selected="false">Seller profile</a>
                                            </li>
                                        </ul>
                                        {/* Tabs */}

                                        {/* Tabs content */}
                                        <div className="tab-content" id="ex1-content">
                                            <div className="tab-pane fade show active" id="ex1-tabs-1" role="tabpanel" aria-labelledby="ex1-tab-1">
                                                <p className="mb-0">This is the specification of the product. It includes detailed information about the features, dimensions, materials used, and other technical details.</p>
                                            </div>
                                            <div className="tab-pane fade" id="ex1-tabs-2" role="tabpanel" aria-labelledby="ex1-tab-2">
                                                <p className="mb-0">The warranty information covers the terms and conditions under which the product can be serviced or replaced. It includes the warranty period, what's covered, and how to claim the warranty.</p>
                                            </div>
                                            <div className="tab-pane fade" id="ex1-tabs-3" role="tabpanel" aria-labelledby="ex1-tab-3">
                                                <p className="mb-0">Shipping information provides details about the delivery options, estimated shipping times, and any shipping charges that may apply.</p>
                                            </div>
                                            <div className="tab-pane fade" id="ex1-tabs-4" role="tabpanel" aria-labelledby="ex1-tab-4">
                                                <p className="mb-0">The seller profile includes information about the seller, their reputation, and other products they offer. It may also include customer reviews and ratings.</p>
                                            </div>
                                        </div>
                                        {/* Tabs content */}
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="px-0 border rounded-2 shadow-0">
                                        <div className="card-body">
                                            <h5 className="card-title">Similar items</h5>
                                            {["1.webp", "2.webp", "3.webp", "4.webp", "5.webp"].map((img, index) => (
                                                <div key={index} className="d-flex mb-3">
                                                    <a href="#" className="me-3">
                                                        <img src={`https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img${img}`} style={{ minWidth: "96px", height: "96px" }} className="img-md img-thumbnail" alt={`Similar item ${index + 1}`} />
                                                    </a>
                                                    <div className="info">
                                                        <a href="#" className="nav-link mb-1">GoPro HERO6 4K Action Camera - Black</a>
                                                        <strong className="text-dark"> $790.50</strong>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>

                </div>
            </div>

        </>
    );
}

export default ProductDetailsPage;
