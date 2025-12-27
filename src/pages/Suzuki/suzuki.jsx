import './suzuki.css'
import Nav from '../../components/nav/nav.jsx'
import NavR from '../../components/nav/nav-res.jsx';
import { useEffect, useState } from 'react';
import Footer from '../../components/footer/footer.jsx'
import Block from '../../components/block/block.jsx'

function suzuki() {
    const [isMobile, setIsMobile] = useState(
        window.matchMedia("(max-width:1000px)").matches
    );

    useEffect(() => {
        const media =window.matchMedia("(max-width:1000px)");

        const handler = (e) => {
            setIsMobile(e.matches);
        }
        media.addEventListener("change", handler);
        return() => {
            media.removeEventListener("change", handler);
        }
    })

    return (
        <>
        {isMobile ? <NavR/> : <Nav/>}
        <Block marka="Suzuki"></Block>
        <Footer></Footer>

        </>
    )
}

export default suzuki;