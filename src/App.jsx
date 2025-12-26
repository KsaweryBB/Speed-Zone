
import { useState, useEffect } from 'react';
import Nav from './components/nav/nav.jsx'
import NavR from './components/nav/nav-res.jsx';
import Slider from './components/slider/slider.jsx';
import './App.css'
import News from './components/news/news.jsx';
import Block from './components/block/block.jsx';
import Footer from './components/footer/footer.jsx';

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
    <section className='news-container'>
      <h1>Aktualności</h1>
      <News></News>
    </section>
    <Footer></Footer>
    </>
  )
}

export default App
