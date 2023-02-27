import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router'
import Landing from '../Components/Landing/Landing';
import Registration from '../Components/Regestration/Registration';
import Login from '../Components/Login/Login';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className='MyAppBody'>
        <Routes>

          <Route path='/' element={< Landing />} />
          <Route path='/home' element={< Landing />} />
          <Route path='/login' element={< Login />} />
          <Route path='/register' element={< Registration />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
