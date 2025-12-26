import styles from './news.module.css'
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
    <div className={styles.set}>
      <div className={styles.news}>
        {news.slice(-10).map((newi, index) => {
          if (!newi) return null;

          return (
            <Link
              key={newi.IDnews ?? index}
              to={`/news/${newi.IDnews}`}
              className={styles.box}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <div className={styles.element}>
                <img
                  className={styles.img}
                  src={`http://localhost:3001/${newi.image_path}`}
                  alt={newi.title}
                />
              </div>
              <h1>{newi.title}</h1>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default News;
