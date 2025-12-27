import { useEffect, useState } from "react";
import styles from "./block.module.css";
import { Link } from "react-router-dom";

const Block = ({ marka }) => {
  const [oferta, setOferta] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/oferta")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setOferta(data);
        } else {
          setOferta([]);
        }
      })
      .catch((err) => {
        console.error(err);
        setOferta([]);
      });
  }, []);

  // Filtrujemy dane przed renderowaniem, aby kod był czystszy
  const filtrowanaOferta = oferta.filter(ofer => ofer && ofer.marka === marka);

  return (
    <div className={styles.container}>
      {filtrowanaOferta.map((ofer) => (
        <Link 
          key={ofer.IDoferty} 
          to={`/oferta/${ofer.IDoferty}`} 
          className={styles.card}
        >
          <div className={styles.card_container}>
            <h1 className={styles.title}>
              {ofer.marka} <span className={styles.model}>{ofer.model}</span>
            </h1>
            
            <div className={styles.image_wrapper}>
              <img
                src={`http://localhost:3001/${ofer.image_path}`}
                alt={`${ofer.marka} ${ofer.model}`}
                className={styles.image}
              />
            </div>

            <div className={styles.info_grid}>
              <div className={styles.info_item}>
                <span className={styles.label}>Przebieg:</span> {ofer.przebieg}
              </div>
              <div className={styles.info_item}>
                <span className={styles.label}>Pojemność:</span> {ofer.pojemnosc_skokowa}CC
              </div>
              <div className={styles.info_item}>
                <span className={styles.label}>Moc:</span> {ofer.moc}KM
              </div>
              <div className={styles.info_item}>
                <span className={styles.label}>Cena:</span> 
                <span className={styles.price}> {ofer.cena} ZŁ</span>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Block;