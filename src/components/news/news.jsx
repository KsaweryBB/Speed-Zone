import "./news.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const News = () => {
  const [news, setNews] = useState([]);
  useEffect(() => {
    const fetchData = () => {
      fetch("http://localhost:3001/news")
        .then((res) => res.json())
        .then((data) => {
          if (Array.isArray(data)) {
            setNews(data);
          } else {
            setNews([]);
          }
        })
        .catch((err) => {
          console.error(err);
          setNews([]);
        });
    };

    fetchData();
    const interval = setInterval(fetchData, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="set">
      <div className="news">
        {news.slice(-10).map((newi, index) => {
          if (!newi) return null;

          return (
            <Link
              key={newi.IDnews ?? index}
              to={`/news/${newi.IDnews}`}
              className="box"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <div className="element">
                <img
                  className="img"
                  src={`http://localhost:3001/${newi.image_path}`}
                  alt={newi.title}
                />
                <div className="opis">
                  <p>{newi.date_i.split("T")[0]}</p>
                  <p>{newi.director}</p>
                </div>
              </div>
              <h1>{newi.title}</h1>
              <p>{newi.description}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default News;
