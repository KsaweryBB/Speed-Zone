import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';


const NewsPage = () => {
    const { id } = useParams();
    const [news, setNews] = useState()

    useEffect(() => {
        fetch(`http://localhost:3001/news/${id}`)
        .then(res => res.json())
        .then(data => setNews(data))
        .catch(err => console.error(err))
    }, [id])

    if (!news) return <p>Ładowanie.........</p>

    return (
        <div>
            <h1>{(news.title)}</h1>
        </div>
    )
}

export default NewsPage;