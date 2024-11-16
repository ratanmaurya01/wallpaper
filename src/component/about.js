import React from 'react';
import CustomNavbar from '../navbar/navbar';
import Footer from '../navbar/footer';
import Ratan_maurya_icon from '../Image/Ratan_maurya_icon.jpg'
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
  MDBProgress,
  MDBProgressBar,
  MDBIcon,
  MDBListGroup,
  MDBListGroupItem
} from 'mdb-react-ui-kit';

export default function About() {
  return (
    <>


      <CustomNavbar />

      <section style={{ marginTop: '5%' }}>
        <MDBContainer className="py-5">
          <MDBRow>
            <MDBCol lg="4">
              <MDBCard className="mb-4">
                <MDBCardBody className="text-center">
                  <MDBCardImage
                    src={Ratan_maurya_icon}
                    alt="avatar"
                    className="rounded-circle"
                    style={{ width: 'auto' }}
                    fluid />
                  <p className="text-muted mb-1">Front-End Developer</p>
                  <div className="d-flex justify-content-center mb-2">
                    <MDBBtn>Follow</MDBBtn>
                    <MDBBtn outline className="ms-1">Message</MDBBtn>
                  </div>
                </MDBCardBody>
              </MDBCard>

              <MDBCard className="mb-4 mb-lg-0">
                <MDBCardBody className="p-0">
                  <MDBListGroup flush className="rounded-3">
                    <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                      <MDBIcon fas icon="globe fa-lg text-warning" />
                      <MDBCardText>Ratanmaurya</MDBCardText>
                    </MDBListGroupItem>
                    <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                      <MDBIcon fab icon="github fa-lg" style={{ color: '#333333' }} />
                      <MDBCardText>Ratankumarmaurya05</MDBCardText>
                    </MDBListGroupItem>
                    <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                      <MDBIcon fab icon="twitter fa-lg" style={{ color: '#55acee' }} />
                      <MDBCardText>@Ratanmaurya</MDBCardText>
                    </MDBListGroupItem>
                    <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                      <MDBIcon fab icon="instagram fa-lg" style={{ color: '#ac2bac' }} />
                      <MDBCardText>Ratanmaurya</MDBCardText>
                    </MDBListGroupItem>
                    {/* <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                      <MDBIcon fab icon="facebook fa-lg" style={{ color: '#3b5998' }} />
                      <MDBCardText>Ratanmaurya</MDBCardText>
                    </MDBListGroupItem> */}
                  </MDBListGroup>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
            <MDBCol lg="8">
              <MDBCard className="mb-4">
                <MDBCardBody>
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Full Name</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">Ratan Kumar Maurya</MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Email</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">mauryaratan42@gmail.com</MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Phone</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">(+91) 7619030901</MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Address</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">Jaipur India </MDBCardText>
                    </MDBCol>
                  </MDBRow>
                </MDBCardBody>
              </MDBCard>

              <MDBRow>
                <MDBCol md="6">
                  <MDBCard className="mb-4 mb-md-0">
                    <MDBCardBody>
                      <MDBCardText className="mb-4"><span className="text-primary font-italic me-1">This Project</span> Technology Used</MDBCardText>
                    
                      <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>React Js </MDBCardText>
                      <MDBProgress className="rounded">
                        <MDBProgressBar width={72} valuemin={0} valuemax={100} />
                      </MDBProgress>

                      <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>JavaScript Validation</MDBCardText>
                      <MDBProgress className="rounded">
                        <MDBProgressBar width={90} valuemin={0} valuemax={100} />
                      </MDBProgress>

                      <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Metarial UI</MDBCardText>
                      <MDBProgress className="rounded">
                        <MDBProgressBar width={45} valuemin={0} valuemax={100} />
                      </MDBProgress>


                      <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Firebase</MDBCardText>
                      <MDBProgress className="rounded">
                        <MDBProgressBar width={70} valuemin={0} valuemax={100} />
                      </MDBProgress>

                     

                      <MDBCardText className="mb-1" style={{ fontSize: '.77rem' }}>Responsive </MDBCardText>
                      <MDBProgress className="rounded">
                        <MDBProgressBar width={100} valuemin={0} valuemax={100} />
                      </MDBProgress>

                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>

                <MDBCol md="6">
                  <MDBCard className="mb-4 mb-md-0">
                    <MDBCardBody>
                      <MDBCardText className="mb-4"><span className="text-primary font-italic me-1">assigment</span> Project Status</MDBCardText>
                      <MDBCardText className="mb-1" style={{ fontSize: '.77rem' }}>Web Design</MDBCardText>
                      <MDBProgress className="rounded">
                        <MDBProgressBar width={90} valuemin={0} valuemax={100} />
                      </MDBProgress>

                      <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Website Markup</MDBCardText>
                      <MDBProgress className="rounded">
                        <MDBProgressBar width={72} valuemin={0} valuemax={100} />
                      </MDBProgress>

                      <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>One Page</MDBCardText>
                      <MDBProgress className="rounded">
                        <MDBProgressBar width={89} valuemin={0} valuemax={100} />
                      </MDBProgress>

                      <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Mobile Template</MDBCardText>
                      <MDBProgress className="rounded">
                        <MDBProgressBar width={20} valuemin={0} valuemax={100} />
                      </MDBProgress>

                      <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Backend API</MDBCardText>
                      <MDBProgress className="rounded">
                        <MDBProgressBar width={66} valuemin={0} valuemax={100} />
                      </MDBProgress>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
              </MDBRow>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>



      <Footer />

    </>
  );
}