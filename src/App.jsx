import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from './components/Navbar';
import Footer from "./components/footer";
import Home from "./components/Home";
import About from "./components/About";
// import Resume from "./Components/Resume";
import Projects from "./components/Projects";
import MoveToTop from "./components/MoveToTop";
import Lottie from  "lottie-react";
import nightsky from "./assets/LottieFiles/night-sky.json";
import HashLoader from "react-spinners/HashLoader";


function App() {
  const[Loading,SetLoading]=useState(true);

  useEffect(()=>{
    SetLoading(true)

    setTimeout(()=>{
    SetLoading(false)}
    ,1900)
  },[])  
  
  return (
    <>
      {Loading ? (
      <div className="loader"> 
        <HashLoader
          color={'#9067C6'}
          loading={true}
          size={100}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
      ):(
      <div>
      
      <Lottie className="bg" animationData={nightsky} loop={true} />  
      <Lottie className="bgtwo" animationData={nightsky} loop={true} />   
      <Lottie className="bgtemp" animationData={nightsky} loop={true} /> 

      <Navbar/>
      <MoveToTop/>

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/About" element={<About/>}/>
        <Route path="/Project" element={<Projects/>}/>
        {/* <Route path="/Resume" element={<Resume/>}/> */}
      </Routes>
      
      <Footer/>
      </div>
      )}  
    </>
  );
}

export default App;