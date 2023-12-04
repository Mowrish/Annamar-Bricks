import React, { useState,useEffect } from 'react';
import {
  MDBNavbar,
  MDBContainer,
  MDBNavbarBrand,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBCollapse,
} from 'mdb-react-ui-kit';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Home,{Login, AdminPage} from './Homepage';
import CostCalculator from './CostCalculator';
import ContactPage from './ContactPage';
import AOS from 'aos';
import 'aos/dist/aos.css';






export default function RouterPage() {
  const [showNavText, setShowNavText] = useState(false); // State to control navbar visibility
  useEffect(()=>{
    AOS.init({duration:2000})
  },[]);
 

  return (
   <div className='container-fluid'> 
   <div className="d-flex justify-content-center"><img src='Logo.png' alt='logo' height={100} data-aos='zoom-out'/></div>
   <div className="d-flex justify-content-center">
    <h4 style={{fontFamily:'serif'}} data-aos='fade-up'>Annamar Bricks</h4>
   </div>
   
   <BrowserRouter>
   <MDBNavbar expand='md' bgColor='primary'>
     <MDBContainer fluid>
       <MDBNavbarBrand>
         <img src='Logo.png' style={{ height: 40, marginRight: 20 }} alt='Logo' data-aos='fade-left' />
         {/* <h2 style={{ color: 'white', margin: 0 }}>Annamar <br/>Bricks</h2> */}
       </MDBNavbarBrand>
       <MDBNavbarToggler
         type='button'
         color='white'
         data-target='#navbarText'
         aria-controls='navbarText'
         aria-expanded='false'
         aria-label='Toggle navigation'
         onClick={() => setShowNavText(!showNavText)}
       >
         <MDBIcon icon='bars' fas style={{ color: 'white' }} />
       </MDBNavbarToggler>
       <MDBCollapse navbar show={showNavText}>
         <MDBNavbarNav className='ms-auto'>
           <MDBNavbarItem data-aos='fade-up'>
             <MDBNavbarLink active aria-current='page'>
               <Link to='/' style={{ color: 'white' }}>Home</Link>
             </MDBNavbarLink>
           </MDBNavbarItem>
           <MDBNavbarItem data-aos='fade-up'>
             <MDBNavbarLink>
               <Link to='/contact' style={{ color: 'white' }}>Contact</Link>
             </MDBNavbarLink>
           </MDBNavbarItem>
           <MDBNavbarItem data-aos='fade-up'>
             <MDBNavbarLink>
               <Link to='/costcalculator' style={{ color: 'white' }}>CostCalculator</Link>
             </MDBNavbarLink>
           </MDBNavbarItem>
         </MDBNavbarNav>
       </MDBCollapse>
     </MDBContainer>
   </MDBNavbar>
   <Routes>
     <Route path='/' element={<Home />} />
     <Route path='/costcalculator' element={<CostCalculator />} />
     <Route path='/contact' element={<ContactPage />} />
     <Route path='/Loginpage' element={<Login />} />
     <Route path='/AdminPage' element={<AdminPage />} />
   </Routes>
 </BrowserRouter>
 </div>
    // <div>
    //   <Login/>
    // </div>
  );
}
