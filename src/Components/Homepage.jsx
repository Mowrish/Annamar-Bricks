
import React, {useState,useEffect} from 'react';
import './style.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
// import CountContext, { useCount } from './Mycontext';
import {MDBAccordion, MDBAccordionItem,
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBCardOverlay,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBRipple, MDBRow,
  MDBCol
} from 'mdb-react-ui-kit';
export default function Home() { 
  const [count, setcount] = useState(0);
  const [employes,setEmployes] = useState(0);
  const [stock, setStock] = useState(0);
  const [stockcount,setstockcount] =useState();
    const [startCounting, setStartCounting] = useState(false);

  useEffect(() => {
    axios.get('https://64f17bb80e1e60602d23d59e.mockapi.io/AnnamrBricks/1')
      .then(response => {
        const data = response.data;
        const fetchedStock = parseInt(data.Onstock);
        setstockcount(fetchedStock); // Update stock state with fetched data
        setStartCounting(true); // Trigger counting after fetching the stock details
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        // Handle error fetching data, set default values, or handle accordingly
      });
  }, [stockcount]);
  

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100 && !startCounting) {
        setStartCounting(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [startCounting]);

  useEffect(() => {
    if (startCounting) {
      const interval = setInterval(() => {
        if (count < 20000) {
          setcount(prevCount => prevCount + 50);
        } else {
          clearInterval(interval);
        }
      }, 2);

      return () => clearInterval(interval);
    }
  }, [count, startCounting]);
  useEffect(() => {
    if (startCounting) {
      const interval = setInterval(() => {
        if (employes < 20) {
          setEmployes(prevCount => prevCount + 1);
        } else {
          clearInterval(interval);
        }
      }, 200);

      return () => clearInterval(interval);
    }
  }, [employes,stockcount, startCounting]);
  useEffect(() => {
    
    
    if (startCounting) {
      const interval = setInterval(() => {
        const stkcount = stockcount
        if (stock < stkcount  ) {
          setStock(prevCount => prevCount + 50);
        } else {
          clearInterval(interval);
        }
      }, 2);

      return () => clearInterval(interval);
    }
  }, [stock, startCounting,stockcount]);
  useEffect(()=>{
    AOS.init({duration:2000})
  },[]);
  return (
    <div className='container-fluid'>
      <div id='info'>
      <div className="row row-cols-1 row-cols-sm-1 row-cols-md-3 row-cols-lg-4 row-cols-xxl-6 info" >
            <div className="col">
                <div data-aos='zoom-in'><MDBIcon fas icon="mobile" style={{color:'blue'}} />            <span style={{paddingLeft:'10px'}}>96882 27255</span>
              </div>
            </div>
            <div className="col" data-aos='zoom-in'>
            <MDBIcon fas icon="map-marker-alt" style={{color:'blue'}} /><span style={{paddingLeft:'10px'}}>Ring Road, 46 pudur, Erode.</span>
            </div>
            <div className="col" data-aos='zoom-in'>
            <MDBIcon fas icon="clock" style={{color:'blue'}} /><span style={{paddingLeft:'10px'}}>Mon-Sat 10:00-8:00</span>
            </div>
            <div className="col" data-aos='zoom-in'>
            <MDBIcon fas icon="envelope" style={{color:'blue'}} /> <span style={{paddingLeft:'10px'}}>keerthishankar27@gmail.com</span>
            </div>
            
          </div>
          </div>
    {/* marque text for adreress */}
    <div id='marqueAdrees'>
    <div className="scrolling-text-container">
    <h6>Annamar Bricks - RingRoad, 46 pudur, Erode - 638002 (call:96882 27255)</h6>
    </div>
</div>

          {/* Background image */}
          <MDBCard background='dark' className='text-white'>
      <MDBCardImage overlay src='.\carouselimg\carousel-2.png' alt='...' height={600}/>
      <MDBCardOverlay>
        <MDBCardTitle><h1 data-aos='zoom-in' style={{color:'red'}}>Annamar-Bricks</h1></MDBCardTitle>
        <MDBCardText data-aos='fade-left'>
          The Best Fly-ash Bricks Manufacturing in Erode
        </MDBCardText>
        <MDBCardText data-aos='zoom-in'>Bulid Your Homes And <br/> Begin Your Dreams</MDBCardText>
      </MDBCardOverlay>
    </MDBCard>

         
{/* technical specs * */}
<div style={{marginTop:'150px'}}>
<StockDetails count={count} employeeCount={employes} onstock={stock} />

</div>
{/* why fly ash Bricks */}
 <div style={{marginTop:'200px'}}>
<Details/>
</div>
{/* Manufacture Process */}
<div style={{marginTop:'180px'}}>
  <h1 data-aos='zoom-in'>Production Process</h1>
  <ManufactureProcess/>
</div >
<div style={{marginTop:'100px'}}>
  <WhyFlyashBricks/>
</div>
<div className='container-fluid' style={{marginTop:'180px'}}>
  <Footer/>
</div>

    </div>
  );
}

function StockDetails({count,employeeCount,onstock}){
 
  return(
    
<div className="container-fluid" >
<div className="container ">
<div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3">
        <div className="col" >
            <div className="card counts" style={{width: '18rem'}} data-aos='fade-up'>
              <div className="card-body">
                <h5 className="card-title" style={{fontWeight:'bold'}}>Poduction/Day</h5>
                
                <p className="card-text" style={{fontWeight:'bolder',fontSize:'40px'}}><strong>{count}</strong></p>
              </div>
            </div>
        </div>
        <div className="col">
            <div className="card employeecounts1" style={{width: '18rem'}} data-aos='fade-up'>
              <div className="card-body">
                <h5 className="card-title" style={{fontWeight:'bold'}}>Employees</h5>
                
                <p className="card-text" style={{fontWeight:'bolder',fontSize:'40px'}}><strong>{employeeCount}+</strong></p>
              </div>
            </div>
        </div>
        <div className="col">
            <div className="card stocksDetail" style={{width: '18rem'}} data-aos='fade-up'>
              <div className="card-body">
                <h5 className="card-title" style={{fontWeight:'bold'}}>On Stock</h5>
                
                <p className="card-text" style={{fontWeight:'bolder',fontSize:'40px'}}><strong>{onstock}</strong></p>
              </div>
            </div>
        </div>

  
</div>

</div>
</div>

  );
}


function Details(){
 
  return(
<div className='container'>
  
  <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-2">
    <div className="col">
      <img src='bgimg1.jpeg' alt='notfound' className='img-fluid' data-aos='zoom-in'/>
    </div>
    <div className="col">
    <h1><strong style={{fontWeight:'bold', color:'red'}} data-aos='fade-up'>Why Annamar Bricks</strong></h1>
    <p style={{fontFamily:'sans-serif',fontSize:'20px',}} data-aos='fade-up'>
      We, Annamar Flyash Bricks, Erode have the better exposure in Flyash Bricks Manufacturing Industry for the past 3 years. We strive to reduce the cost without compromising the quality of Bricks. Our Bricks have dimensional finishing and the water absorption rate is in the perfect ratio that fits to the dryness of the Bricks which makes the Brick to 
      get stronger.  The price of our product is helpful to reduce the construction cost too.
    </p>
    </div>
  </div>
<div className="row row-cols-1 row-cols-sm-1 row-cols-md-1 row-cols-lg-2">
      <div className="col">
      <div className="container mt-5 deliveryicon">
      <MDBCard className='deliveryicon' data-aos='fade-left'>
          <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
            <MDBCardImage src='deliveryicon.png' color='red' fluid alt='...' />
            
              <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
            
          </MDBRipple>
          <MDBCardBody>
            <MDBCardTitle><h1 style={{fontWeight:'bolder',color:'red'}} id='delivery'>OnTime Delivery </h1></MDBCardTitle>
            <MDBCardText>
              Free Delivery within 30Kms
            </MDBCardText>
            <MDBBtn href='/costcalculator'>calculate</MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </div>
      </div>
      <div className="col">
      <div className="container mt-5 deliveryicon">
      <MDBCard className='deliveryicon' data-aos='fade-right'>
          <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
            <MDBCardImage src='Bestquality.png' color='red' fluid alt='...' />
            
              <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
            
          </MDBRipple>
          <MDBCardBody>
            <MDBCardTitle><h1 style={{fontWeight:'bolder',color:'red'}} id='delivery'>Best Quality </h1></MDBCardTitle>
            <MDBCardText>
              well maintained with the mixers in the perfect ratios
            </MDBCardText>
            <MDBBtn href='/contact'>contact</MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </div>
      </div>
</div>
</div>
  );
}

function ManufactureProcess(){
  return(
    <div className="container" >
         <div className="row row-cols-1 row-cols-sm-1 row-cols-md-1 row-cols-lg-2">
            <div className="col">
                <div className="row">
                    <MDBCard data-aos='fade-left'>
                        <MDBRow className='g-0'>
                          <MDBCol md='2'>
                            <MDBCardImage src='.\production process\Mixing.webp' alt='...' fluid />
                          </MDBCol>
                          <MDBCol md='8'>
                            <MDBCardBody>
                              <MDBCardTitle>Mixing</MDBCardTitle>
                              <MDBCardText>
                                The raw materials for the Flyash are mixed in perfect ratios.
                              </MDBCardText>
                              
                            </MDBCardBody>
                          </MDBCol>
                        </MDBRow>
                      </MDBCard>
                </div>
                <div className="row">
                <MDBCard data-aos='fade-left'>
                        <MDBRow className='g-0'>
                          <MDBCol md='2'>
                            <MDBCardImage src='.\production process\compress.png' alt='...' fluid />
                          </MDBCol>
                          <MDBCol md='8'>
                            <MDBCardBody>
                              <MDBCardTitle>Compress</MDBCardTitle>
                              <MDBCardText>
                               The mixed raw materials are compressed in hydralic pressure at (1.5-2.0psi) ton pressure
                              </MDBCardText>
                              
                            </MDBCardBody>
                          </MDBCol>
                        </MDBRow>
                      </MDBCard>
                </div>
                <div className="row">
                <MDBCard data-aos='fade-left'>
                        <MDBRow className='g-0'>
                          <MDBCol md='2'>
                            <MDBCardImage src='.\production process\water absorption.jpg' alt='...' fluid />
                          </MDBCol>
                          <MDBCol md='8'>
                            <MDBCardBody>
                              <MDBCardTitle>Water Absorption</MDBCardTitle>
                              <MDBCardText>
                                The water absorption of the bricks are 10%-12%.
                              </MDBCardText>
                              
                            </MDBCardBody>
                          </MDBCol>
                        </MDBRow>
                      </MDBCard>
                </div>
                <div className="row">
                <MDBCard >
                        <MDBRow className='g-0'>
                          <MDBCol md='2'>
                            <MDBCardImage src='.\production process\dryness.png'data-aos='zoom-in' alt='...' fluid  />
                          </MDBCol>
                          <MDBCol md='8'>
                            <MDBCardBody>
                              <MDBCardTitle>curing Process</MDBCardTitle>
                              <MDBCardText>
                                The last but not the least process curing process are well mainteined for toughness.
                              </MDBCardText>
                              
                            </MDBCardBody>
                          </MDBCol>
                        </MDBRow>
                      </MDBCard>
                </div>
            </div>
            <div className="col">
              <img src=".\production process\Flyas process.jpg" alt="" className="img-fluid" />
              <div className="row">
              <img src="sglbrk.jpeg" alt="" className="img-fluid" height={200}/>

              </div>
            </div>
         </div>
    </div>
  );
}
function WhyFlyashBricks(){
  return(
    <div className="container">
      <h1 style={{fontWeight:'bold',color:'red'}} data-aos='zoom-in'>
        Why Fly Ash Bricks
      </h1>
      <p data-aos='zoom-in'>
      Fly ash bricks are made from industrial waste materials such as fly ash, which is a by-product of coal-fired power plants. Fly ash is mixed with cement, water, and other materials to form a paste, which is then poured into moulds and baked at high temperatures to create durable, lightweight bricks.
      </p>
      <h2 style={{fontWeight:'bolder'}} data-aos='zoom-in'>Avantages of Fly Ash Bricks</h2>
      <p data-aos='zoom-in'>Using Fly Ash Bricks offers numwrous Benefits</p>

    <MDBAccordion flush initialActive={1} >
      <MDBAccordionItem data-aos='fade-left' className='Benifits' collapseId={1} headerTitle={<><MDBIcon fas icon="leaf" /> &nbsp; <h3 style={{color:'green'}}>Environmentally friendly </h3> </>}>
        <p>Fly ash bricks are the champions of environmental consciousness. By utilising industrial waste materials that would otherwise burden landfills, they pave the way for a greener future.</p>
      </MDBAccordionItem>
      <MDBAccordionItem data-aos='fade-left' className='Benifits' collapseId={2} headerTitle={<><MDBIcon fab icon="superpowers" /> &nbsp; <h3 style={{color:'green'}} >Energy efficient</h3>  </>}>
        <p>With fly ash bricks, energy savings come naturally. Their production process demands less energy compared to the traditional red bricks, resulting in reduced greenhouse gas emissions and a lighter carbon footprint.</p>
      </MDBAccordionItem>
      <MDBAccordionItem data-aos='fade-left' className='Benifits' collapseId={3} headerTitle={<><MDBIcon fas icon="weight-hanging" /> &nbsp;  <h3 style={{color:'green'}}>Lightweight</h3> </>}>
        <p>Fly ash bricks boast a featherlight quality that makes them a breeze to handle and transport. You'll save both time and effort during construction, making your project progress smoother than ever.</p>
      </MDBAccordionItem>
      <MDBAccordionItem data-aos='fade-left' className='Benifits' collapseId={3} headerTitle={<><MDBIcon fas icon="hand-holding-usd" /> &nbsp;  <h3 style={{color:'green'}}>Cost-effective</h3> </>}>
        <p>These cost-effective marvels offer exceptional value for your investment, ensuring your budget stays intact without compromising on quality.</p>
      </MDBAccordionItem>
      <MDBAccordionItem data-aos='fade-left' className='Benifits' collapseId={3} headerTitle={<><MDBIcon fas icon="thumbs-up" /> &nbsp;  <h3 style={{color:'green'}}>Good insulation</h3> </>}>
        <p>Fly ash bricks bring the power of insulation to your construction project. Their remarkable insulation properties help regulate temperature, reducing energy consumption and keeping your space comfortable all year round.</p>
      </MDBAccordionItem>
    </MDBAccordion>

    </div>
  )
}

function Footer(){
  
  return(
<div className='container-fluid' data-aos='zoom-out'>


    <MDBFooter className='text-center' color='white' bgColor='primary'>
      <MDBContainer className='p-4'>
        <section className='mb-4'>
          <MDBBtn outline color="light" floating className='m-1'  role='button'>
            <MDBIcon fab icon='facebook-f' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='/Loginpage' role='button'>
            <MDBIcon fab icon="sign-out" />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1'  role='button'>
            <MDBIcon fab icon='google' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' role='button'>
            <MDBIcon fab icon='instagram' />
          </MDBBtn>
        </section>

        <section >
          <form >
            <MDBRow className='d-flex justify-content-center'>
              <MDBCol size="auto">
                <p className='pt-2'>
                  <strong>Contact us on:9688 227 255, 997 658 7333 <br/>
                  email:keerthishankar27@gamil.com</strong>
                </p>
              </MDBCol>

              

              <MDBCol size="auto">
                <MDBBtn outline color='light' type='submit' className='mb-4'>
                  Cost calculator
                </MDBBtn>
              </MDBCol>
            </MDBRow>
          </form>
        </section>

        <section className='mb-4'>
          <p>
            "Our Quality, Your Trust"
          </p>
        </section>

        <section>
          <MDBRow>
           
            
            
            <MDBCol lg='3' md='6' className='mb-4 mb-md-0' >
              <h5 className='text-uppercase'>Quick Links</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='/' className='text-white'>
                    Home
                  </a>
                </li>
                
                <li>
                  <a href='/contact' className='text-white'>
                    Contact
                  </a>
                </li>
                <li>
                  <a href='/costcalculator' className='text-white'>
                    Cost Calculator
                  </a>
                </li>
                
              </ul>
            </MDBCol>
          </MDBRow>
        </section>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        AnnamarBricks -
        <a className='text-white' href='https://mdbootstrap.com/'>
          46, pudur, RingRoad, Erode.
        </a>
      </div>
    </MDBFooter>
  
</div>
  )
}

//loginpage:


export function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  
  const handleSubmit = () => {
    if (username === 'Keerthi' && password === '2757') {
      alert('Successfully Logged in');
      navigate('/AdminPage')
    } else {
      alert('Invalid username or password');
    }
  };
  return (
    <div className="container-md">
      <form onSubmit={handleSubmit}>
        <h1>This page is for only Admin</h1>
        <label>UserName</label> <br /> <br />
        <input type='text' name='username' value={username} onChange={(e) => setUsername(e.target.value)} /> <br />
        <label>Password</label> <br /> <br />
        <input type='password' name='password' value={password} onChange={(e) => setPassword(e.target.value)} /> <br /> <br />
        <button type='submit' className='btn btn-primary'>Submit</button>
      </form>
    </div>
  );
}
export function AdminPage(){
  const [stock, setStock] = useState('');
  const [amount, setAmount] = useState('');
  const [oldstock,setoldstock] = useState();
  const [oldprice,setoldprice] = useState()
  useEffect(() => {
    axios.get('https://64f17bb80e1e60602d23d59e.mockapi.io/AnnamrBricks/1')
      .then(response => {
        const data = response.data;
        const fetchedstock = parseInt(data.Onstock)
        const fetchedCost = parseInt(data.Price);
        setoldprice(fetchedCost); // Update cost state with fetched data
        setoldstock(fetchedstock)
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        // Handle error fetching data, set default cost, or handle accordingly
      });
  }, []);

  const handleSave = () => {
     const payload = {
    Onstock: stock,
    Price: amount
  };

  axios.put('https://64f17bb80e1e60602d23d59e.mockapi.io/AnnamrBricks/1', payload)
    .then(response => {
      window.alert('changes updated successfully:', response.data);
      // Handle success response if needed
    })
    .catch(error => {
      window.error('Error updating data:', error);
      // Handle errors that may occur during the update process
    });
    };
    
  

  return (
    <div className='container-lg mt-5' >
        Stock:
        <input type="text" value={stock} onChange={(e) => setStock(parseInt(e.target.value))} />
      <br />
      <br />
        Brick Price:
        <input type="text" value={amount} onChange={(e) => setAmount(parseInt(e.target.value))} />
      <br />
      <br />
      <button onClick={handleSave}>Save the values </button>  <br/> <br/>
      <h2>Old Stock:</h2><h3 style={{color:'red'}}>{oldstock}</h3><br/> <br/>
      <h2>Old Price:</h2><h3 style={{color:'red'}}>{oldprice}</h3>
    </div>
  );
}



