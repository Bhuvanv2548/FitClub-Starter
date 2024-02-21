// import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer/Footer';
import Hero from './Components/Hero/Hero';
import Join from './Components/Join/Join';
// import Login from "./Components/Login/Login";
// import Header from './Components/Header/Header';
import LoginSignup from './Components/LoginSignup/LoginSignup';
import Plans from './Components/Plans/Plans';
import Programs from './Components/Programs/Programs';
import Reasons from './Components/Reasons/Reasons';
import Testimonials from './Components/Testimonials/Testimonials';
function App() {
  return (
    <div className="App">
         {/* <Router>
        <Routes>
          <Route path="/" element={<Hero/>}/>
          <Route path="/programs" element={<Programs/>}/>
          <Route path="/loginsignup" element={<LoginSignup/>}/>
        </Routes>
      </Router> */}
      <Hero/>
      {/* <Header/> */}
      <Programs/>
      <Reasons/>
      <Plans/>
      <LoginSignup/>
      <Testimonials/>
      <Join/>
      <Footer/>
    </div>
  );
};
export default App;
