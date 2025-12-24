import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Nav from '../../components/nav/nav.jsx'
import NavR from '../../components/nav/nav-res.jsx'



const NewsPage = () => {
    const { id } = useParams();
    const [news, setNews] = useState()

     const [isMobile, setIsMobile] = useState(
    window.matchMedia("(max-width: 1000px)").matches
  );

    useEffect(() => {
        fetch(`http://localhost:3001/news/${id}`)
        .then(res => res.json())
        .then(data => setNews(data))
        .catch(err => console.error(err))
    }, [id])

    if (!news) return <p>Ładowanie.........</p>

    return (
        <>
        {isMobile ? <NavR/> : <Nav/>}
        <div>

            <main>
                <section>
                    <div>
                        <h1>{(news.title)}</h1>
                        <img src={`http://localhost:3001/${news.image_path}`} alt={news.title} />
                    </div>
                </section>
            </main>
        </div>
        </>
    )
}

export default NewsPage;