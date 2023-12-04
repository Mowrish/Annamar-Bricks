import React from 'react';

import {
  MDBCard,
  MDBCardBody,
  MDBCardHeader,
  MDBTypography
} from 'mdb-react-ui-kit';

export default function ContactPage() {
  return (
    <div className='container-fluid'>
    <div className="conatactdetails">
     <MDBCard>
      <MDBCardHeader><h2>R.A. Keerthi Shankar (B.E)</h2></MDBCardHeader>
      <MDBCardBody>
        <MDBTypography blockquote className='mb-0'>
          <p>Managing Director of Annamar Bricks</p>
          <footer  style={{color:'blue'}}>
            contact: 9688 227 255 <br/>
            </footer> <br/>
            <h5>Email:keerthishankar27@gmail.com</h5>
         
        </MDBTypography>
      </MDBCardBody>
    </MDBCard>

    </div>
    <div className="conatactdetails">
    <MDBCard>
      <MDBCardHeader><h2>A.S. Kathirvel</h2></MDBCardHeader>
      <MDBCardBody>
        <MDBTypography blockquote className='mb-0'>
          {/* <p>Manager of Annamar Bricks</p> */}
          <footer  style={{color:'blue'}}>
            contact: 9976 587 333
          </footer>
        </MDBTypography>
      </MDBCardBody>
    </MDBCard>
    </div>
    </div>
  )
}
