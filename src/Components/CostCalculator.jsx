import React from 'react'
import axios from 'axios'
import { useState,useEffect } from 'react'
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand
} from 'mdb-react-ui-kit';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function CostCalculator() {
  const [km, setKm] = useState(0);
  const [bricks, setBricks] = useState(0);
  const [result, setResult] = useState(0);
  const [cost, setCost] = useState(7);

  useEffect(() => {
    axios.get('https://64f17bb80e1e60602d23d59e.mockapi.io/AnnamrBricks/1')
      .then(response => {
        const data = response.data;
        const fetchedCost = parseInt(data.Price);
        setCost(fetchedCost); 
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        
      });
  }, []);
  useEffect(()=>{
    AOS.init({duration:2000})
  },[]);

  const calculateResult = () => {
    let distance = km || 0;
    let totalBricks = bricks || 0;
    let price = cost;

    if (distance <= 30) {
      setResult(price * totalBricks);
    } else if (distance > 30 && distance <= 60) {
      price += 0.25; 
      setResult(price * totalBricks);
    } else if (distance > 60 && distance <= 80) {
      price += 0.50; 
      setResult(price * totalBricks);
    } else if (distance > 80) {
      price += 1; 
      setResult(price * totalBricks);
    }
  };

  const handleKmChange = (event) => {
    setKm(event.target.value);
  };

  const handleBricksChange = (event) => {
    setBricks(event.target.value);
  };
  return (
    <div>
      <MDBNavbar>
        <MDBContainer lg>
          <MDBNavbarBrand  data-aos='zoom-out'>
            <img
              src='costcalculator.png'
              width='200'
              height='200'
              alt=''
              loading='lazy'
            />
            <h1 style={{ fontFamily: 'fantasy', color: 'blue', fontWeight: 'bold' }}>Cost-calculator</h1>
          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>
      <div className='container-lg'>
        <div className='calc' data-aos='fade-up'>
          <label>
            <h2>Enter the approximate Km</h2>
          </label>
          <br />
          <input type='number' className='input' value={km} onChange={handleKmChange} />
          <br /><br/><br/>
          <label>
            <h2>Enter Number of Bricks</h2>
          </label>
          <br />
          <input type='number' className='input' value={bricks} onChange={handleBricksChange} />
          <br/> <br/><br/>
          <button onClick={calculateResult} className='btn btn-primary'>Calculate</button>
          <br/> <br/><br/>
          <p>Total Cost: {result}</p>
        </div>
      </div>
    </div>
  )
}
