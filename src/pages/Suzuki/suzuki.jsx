import './suzuki.css'
import Nav from '../../components/nav/nav.jsx'
import NavR from '../../components/nav/nav-res.jsx';
import { useEffect, useState } from 'react';

function suzuki() {
    const [isMobile, setIsMobile] = useState(
        window.matchMedia("(max0width:1000px)").matches
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
        

        </>
    )
}

export default suzuki;