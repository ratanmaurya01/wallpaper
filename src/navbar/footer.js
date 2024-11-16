import React from 'react';
import { NavLink } from 'react-bootstrap';

function Footer() {
  return (


    <>

      <footer className="text-center bg-body-tertiary" >

        <div className="container ">

          <section className="mb-2">

            <a
              data-mdb-ripple-init
              className="btn btn-link btn-floating btn-lg text-body m-1"
              href="#!"
              role="button"
              data-mdb-ripple-color="dark"
            ><i className="fab fa-facebook-f"></i
            ></a>

            <a
              data-mdb-ripple-init
              className="btn btn-link btn-floating btn-lg text-body m-1"
              href="#!"
              role="button"
              data-mdb-ripple-color="dark"
            ><i className="fab fa-twitter"></i
            ></a>

            <a
              data-mdb-ripple-init
              className="btn btn-link btn-floating btn-lg text-body m-1"
              href="#!"
              role="button"
              data-mdb-ripple-color="dark"
            ><i className="fab fa-google"></i
            ></a>


            <a
              data-mdb-ripple-init
              className="btn btn-link btn-floating btn-lg text-body m-1"
              href="#!"
              role="button"
              data-mdb-ripple-color="dark"
            ><i className="fab fa-instagram"></i
            ></a>


            <a
              data-mdb-ripple-init
              className="btn btn-link btn-floating btn-lg text-body m-1"
              href="#!"
              role="button"
              data-mdb-ripple-color="dark"
            ><i className="fab fa-linkedin"></i
            ></a>

            <a
              data-mdb-ripple-init
              className="btn btn-link btn-floating btn-lg text-body m-1"
              href="#!"
              role="button"
              data-mdb-ripple-color="dark"
            ><i className="fab fa-github"></i
            ></a>
          </section>

        </div>



        <div className="text-center p-3" style={{ backgroundColor: ' rgba(0, 0, 0, 0.05)' }}>
          © 2024 Copyright:
          {/* <a className="text-body" href="">RSTAR </a> */}
          <NavLink className="text-body" to="/">
          RSTAR
        </NavLink>
        </div>

      </footer>




    </>


  );
}

export default Footer;
