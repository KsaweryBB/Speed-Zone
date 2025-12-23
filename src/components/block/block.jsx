import { useEffect, useState } from "react";

const Block = ({marka}) => {
  const [oferta, setOferta] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/oferta")
      .then((res) => res.json())
      .then((data) => {
        // zabezpieczenie na wypadek złych danych z API
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

  return (
    <div style={styles.container}>
      {oferta.map((ofer, index) => {
        // ⛔ jeśli cały rekord jest null / undefined
        if (!ofer) return null;
        if (ofer.marka !== marka) return null;
        if (ofer.marka === marka)
        return (
          <div
            key={ofer.IDoferty ?? index}
            style={styles.card}
          >
            {/* ⛔ jeśli Imie lub Nazwisko są puste → zwróć null */}
            {(ofer.marka || ofer.model) && (
              <h3>
                {ofer.marka  ?? null} {ofer.model ?? null}
              </h3>
            )}

            {/* ⛔ jeśli KlientID puste → null */}
            {ofer.IDoferty && <p>{ofer.IDoferty}</p>}
          </div>
        );
      })}
    </div>
  );
};

// Proste style inline
const styles = {
  container: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "20px",
    padding: "20px",
  },
  card: {
    padding: "15px",
    borderRadius: "10px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
    backgroundColor: "#fff",
    textAlign: "center",
  },
};

export default Block;
