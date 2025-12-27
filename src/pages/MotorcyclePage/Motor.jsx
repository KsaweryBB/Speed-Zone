import Nav from "../../components/nav/nav";
import NavR from "../../components/nav/nav-res";
import Footer from "../../components/footer/footer";
import { useEffect, useState } from "react";

function Motor() {

    

  const [isMobile, setIsMobile] = useState(
    window.matchMedia("(max-width:1000px").matches
  );

  useEffect(() => {
    const media = window.matchMedia("(max-width:1000px)")
    const handler = (e) => {
        setIsMobile(e.matches);
    }
    media.addEventListener("change", handler)

    return() => {
        media.removeEventListener("change", handler)
    }
  })

  return <>
  {isMobile ? <NavR /> : <Nav />}
  


  <Footer></Footer>
  </>;
}
