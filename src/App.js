import { useEffect } from 'react';
import './App.css';
import RouterPage from './Components/Routerpage';
function App() {
  useEffect(()=>{
    localStorage.setItem('id',1);
  })
  return (
   <div>
    <RouterPage />
    </div>
  );
}

export default App;
