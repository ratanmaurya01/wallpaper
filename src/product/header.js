import React from 'react'

export default function Header() {
  return (
    <>
    
      {/* Jumbotron */}
      <div className="p-3 text-center bg-white border-bottom">
        <div className="container">
          <div className="row gy-3">
            {/* Left elements */}
            <div className="col-lg-2 col-sm-4 col-4">
              <a href="https://mdbootstrap.com/" target="_blank" rel="noopener noreferrer" className="float-start">
                <img src="https://mdbootstrap.com/img/logo/mdb-transaprent-noshadows.png" height="35" alt="MDB Logo" />
              </a>
            </div>
            {/* Left elements */}

            {/* Center elements */}
            <div className="order-lg-last col-lg-5 col-sm-8 col-8">
              <div className="d-flex float-end">
                <a href="https://github.com/mdbootstrap/bootstrap-material-design" className="me-1 border rounded py-1 px-3 nav-link d-flex align-items-center" target="_blank" rel="noopener noreferrer">
                  <i className="fas fa-user-alt m-1 me-md-2"></i>
                  <p className="d-none d-md-block mb-0">Sign in</p>
                </a>
                <a href="https://github.com/mdbootstrap/bootstrap-material-design" className="me-1 border rounded py-1 px-3 nav-link d-flex align-items-center" target="_blank" rel="noopener noreferrer">
                  <i className="fas fa-heart m-1 me-md-2"></i>
                  <p className="d-none d-md-block mb-0">Wishlist</p>
                </a>
                <a href="https://github.com/mdbootstrap/bootstrap-material-design" className="border rounded py-1 px-3 nav-link d-flex align-items-center" target="_blank" rel="noopener noreferrer">
                  <i className="fas fa-shopping-cart m-1 me-md-2"></i>
                  <p className="d-none d-md-block mb-0">My cart</p>
                </a>
              </div>
            </div>
            {/* Center elements */}

            {/* Right elements */}
            <div className="col-lg-5 col-md-12 col-12">
              <div className="input-group float-center">
                <div className="form-outline">
                  <input type="search" id="form1" className="form-control" />
                  <label className="form-label" htmlFor="form1">Search</label>
                </div>
                <button type="button" className="btn btn-primary shadow-0">
                  <i className="fas fa-search"></i>
                </button>
              </div>
            </div>
            {/* Right elements */}
          </div>
        </div>
      </div>
      {/* Jumbotron */}

      {/* Heading */}
      <div className="bg-primary">
        <div className="container py-4">
          {/* Breadcrumb */}
          <nav className="d-flex">
            <h6 className="mb-0">
              <a href="#" className="text-white-50">Home</a>
              <span className="text-white-50 mx-2"> &gt; </span>
              <a href="#" className="text-white-50">Library</a>
              <span className="text-white-50 mx-2"> &gt; </span>
              <a href="#" className="text-white"><u>Data</u></a>
            </h6>
          </nav>
          {/* Breadcrumb */}
        </div>
      </div>
    </>
  )
}
