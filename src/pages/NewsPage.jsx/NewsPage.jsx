import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Nav from "../../components/nav/nav.jsx";
import NavR from "../../components/nav/nav-res.jsx";
import "./NewsPage.css";
import Footer from "../../components/footer/footer.jsx";
import News from "../../components/news/news.jsx";

const NewsPage = () => {
  const [isMobile, setIsMobile] = useState(
    window.matchMedia("(max-width:1000px)").matches
  );

  useEffect(() => {
    const media = window.matchMedia("(max-width:1000px)");

    const handler = (e) => {
      setIsMobile(e.matches);
    };
    media.addEventListener("change", handler);
    return () => {
      media.removeEventListener("change", handler);
    };
  });

  const { id } = useParams();
  const [news, setNews] = useState();

  useEffect(() => {
    fetch(`http://localhost:3001/news/${id}`)
      .then((res) => res.json())
      .then((data) => setNews(data))
      .catch((err) => console.error(err));
  }, [id]);

  if (!news) return <p>Ładowanie.........</p>;

  const renderContent = (text) => {
    if (!text) return null;

    const words = text.split(" ");

    const part1 = words.slice(0, 150).join(" ");
    const part2 = words.slice(150, 400).join(" ");
    const part3 = words.slice(400).join(" ");

    return (
      <>
        <div className="text-NewsPage">
          <p>{part1}</p>
          <img
            className="img-NewsPage"
            src={`http://localhost:3001/${news.image_path2}`}
            alt="Dodatkowe zdjęcie"
          />
          <p>{part2}</p>
          <img
            className="img-NewsPage"
            src={`http://localhost:3001/${news.image_path3}`}
            alt="Dodatkowe zdjęcie"
          />
          <p>{part3}</p>
        </div>
      </>
    );
  };

  return (
    <>
      {isMobile ? <NavR /> : <Nav />}
        <main>
          <section className="NewsPage-section">
            <div className="NewsPage-container">
              <h1>{news.title}</h1>
              <div className="NewsPage-img-container">
              <img
                className="img-NewsPage"
                src={`http://localhost:3001/${news.image_path}`}
                alt={news.title}
              /></div>
              <p>{news.director}</p>
              <p>{news.date_i.split("T")[0]}</p>
              <p>{renderContent(news.description)}</p>
            </div>
            <aside className="aside-NewsPage">
              <News></News>
            </aside>
          </section>
        </main>
      <Footer></Footer>
    </>
  );
};

export default NewsPage;
