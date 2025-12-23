
import { useState, useEffect } from 'react';
import Nav from './components/nav/nav.jsx'
import NavR from './components/nav/nav-res.jsx';
import Slider from './components/slider/slider.jsx';
import './App.css'
import News from './components/news/news.jsx';
import Block from './components/block/block.jsx';

function App({ Articles }) {

 const [isMobile, setIsMobile] = useState(
    window.matchMedia("(max-width: 1000px)").matches
  );

  useEffect(() => {
    const media = window.matchMedia("(max-width: 1000px)");

    const handler = (e) => {
      setIsMobile(e.matches);
    };

    media.addEventListener("change", handler);

    return () => {
      media.removeEventListener("change", handler);
    };
  }, []);



  return (
    <>  
    {isMobile ? <NavR/> : <Nav/>}
    <Slider></Slider>
    <News></News>
    <Block marka="Yamaha"></Block>
    </>
  )
}

export default App
