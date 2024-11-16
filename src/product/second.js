import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Footer from './footer'
import Header from './header'

const ProductPage = () => {
  return (
    <div>

      <section className="py-5">
        <div className="container">
          <div className="row gx-5">

            <aside className="col-lg-6">
              <div className="border rounded-4 mb-3 d-flex justify-content-center">
                <a
                  data-fslightbox="mygalley"
                  className="rounded-4"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-type="image"
                  href="https://mdbcdn.b-cdn.net/img/bootstrap-ecommerce/items/detail1/big.webp"
                >
                  <img
                    style={{ maxWidth: "100%", maxHeight: "100vh", margin: "auto" }}
                    className="rounded-4 fit"
                    src="https://mdbcdn.b-cdn.net/img/bootstrap-ecommerce/items/detail1/big.webp"
                    alt="Product"
                  />
                </a>
              </div>
              <div className="d-flex justify-content-center mb-3">
                {["big1.webp", "big2.webp", "big3.webp", "big4.webp", "big.webp"].map((img, index) => (
                  <a
                    key={index}
                    data-fslightbox="mygalley"
                    className="border mx-1 rounded-2 item-thumb"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-type="image"
                    href={`https://mdbcdn.b-cdn.net/img/bootstrap-ecommerce/items/detail1/${img}`}
                  >
                    <img
                      width="60"
                      height="60"
                      className="rounded-2"
                      src={`https://mdbcdn.b-cdn.net/img/bootstrap-ecommerce/items/detail1/${img}`}
                      alt={`Thumbnail ${index + 1}`}
                    />
                  </a>
                ))}
              </div>
            </aside>


            <main className="col-lg-6">
              <div className="ps-lg-3">
                <h4 className="title text-dark">
                  Quality Men's Hoodie for Winter, Men's Fashion <br />
                  Casual Hoodie
                </h4>
                <div className="d-flex flex-row my-3">
                  <div className="text-warning mb-1 me-2">
                    {[...Array(4)].map((_, i) => (
                      <i key={i} className="fa fa-star"></i>
                    ))}
                    <i className="fas fa-star-half-alt"></i>
                    <span className="ms-1">4.5</span>
                  </div>
                  <span className="text-muted"><i className="fas fa-shopping-basket fa-sm mx-1"></i>154 orders</span>
                  <span className="text-success ms-2">In stock</span>
                </div>

                <div className="mb-3">
                  <span className="h5">$75.00</span>
                  <span className="text-muted">/per box</span>
                </div>

                <p>
                  Modern look and quality demo item is a streetwear-inspired collection that continues to break away from the conventions of mainstream fashion. Made in Italy, these black and brown clothing low-top shirts for
                  men.
                </p>

                <div className="row">
                  <dt className="col-3">Type:</dt>
                  <dd className="col-9">Regular</dd>

                  <dt className="col-3">Color</dt>
                  <dd className="col-9">Brown</dd>

                  <dt className="col-3">Material</dt>
                  <dd className="col-9">Cotton, Jeans</dd>

                  <dt className="col-3">Brand</dt>
                  <dd className="col-9">Reebook</dd>
                </div>

                <hr />

                <div className="row mb-4">
                  <div className="col-md-4 col-6">
                    <label className="mb-2">Size</label>
                    <select className="form-select border border-secondary" style={{ height: '35px' }}>
                      <option>Small</option>
                      <option>Medium</option>
                      <option>Large</option>
                    </select>
                  </div>
                  <div className="col-md-4 col-6 mb-3">
                    <label className="mb-2 d-block">Quantity</label>
                    <div className="input-group mb-3" style={{ width: '170px' }}>
                      <button className="btn btn-white border border-secondary px-3" type="button" id="button-addon1" data-mdb-ripple-color="dark">
                        <i className="fas fa-minus"></i>
                      </button>
                      <input type="text" className="form-control text-center border border-secondary" placeholder="14" aria-label="Example text with button addon" aria-describedby="button-addon1" />
                      <button className="btn btn-white border border-secondary px-3" type="button" id="button-addon2" data-mdb-ripple-color="dark">
                        <i className="fas fa-plus"></i>
                      </button>
                    </div>
                  </div>
                </div>
                <a href="#" className="btn btn-warning shadow-0"> Buy now </a>
                <a href="#" className="btn btn-primary shadow-0"> <i className="me-1 fa fa-shopping-basket"></i> Add to cart </a>
                <a href="#" className="btn btn-light border border-secondary py-2 icon-hover px-3"> <i className="me-1 fa fa-heart fa-lg"></i> Save </a>
              </div>
            </main>
          </div>
        </div>
      </section>


      {/* content */}


      {/* Specification Section */}
      <section className="bg-light border-top py-4">
        <div className="container">
          <div className="row gx-4">
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
                    <p className="mb-0">With supporting text below as a natural lead-in to additional content. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <p className="mb-0">With supporting text below as a natural lead-in to additional content. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                  </div>
                  <div className="tab-pane fade" id="ex1-tabs-2" role="tabpanel" aria-labelledby="ex1-tab-2">
                    <p className="mb-0">With supporting text below as a natural lead-in to additional content.</p>
                    <p className="mb-0">With supporting text below as a natural lead-in to additional content. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  </div>
                  <div className="tab-pane fade" id="ex1-tabs-3" role="tabpanel" aria-labelledby="ex1-tab-3">
                    <p className="mb-0">With supporting text below as a natural lead-in to additional content. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  </div>
                  <div className="tab-pane fade" id="ex1-tabs-4" role="tabpanel" aria-labelledby="ex1-tab-4">
                    <p className="mb-0">With supporting text below as a natural lead-in to additional content.</p>
                    <p className="mb-0">With supporting text below as a natural lead-in to additional content. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
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
                        <a href="#" className="nav-link mb-1">{`GoPro HERO6 4K Action Camera - Black`}</a>
                        <strong className="text-dark"> $790.50</strong>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


    </div>
  );
};

export default ProductPage;
