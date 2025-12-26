import { NavLink } from "react-router-dom";
import "./footer.css";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-section">
            <h1 className="logo">
              SPEED <span>ZONE</span>
            </h1>
            <p>
              Nasz sklep motocyklowy to miejsce stworzone z pasji do dwóch
              kółek. Oferujemy szeroki wybór oryginalnych części zamiennych,
              akcesoriów oraz motocykli nowych i używanych, sprawdzonych przez
              doświadczonych mechaników.
            </p>
          </div>
          <div className="footer-section">
            <h2 className="header-h2">SZYBKIE LINKI</h2>
            <ul>
              <NavLink>Home</NavLink>
              <NavLink>Części</NavLink>
              <NavLink>Kontakt</NavLink>
              <NavLink>O nas</NavLink>
            </ul>
          </div>
          <div className="footer-section">
            <h2 className="header-h2">MARKI</h2>
            <ul>
              <NavLink>Suzuki</NavLink>
              <NavLink>Yamaha</NavLink>
              <NavLink>Honda</NavLink>
              <NavLink>Kawasaki</NavLink>
            </ul>
          </div>
          <div className="footer-section">
            <h2 className="header-h2">KONTAKT</h2>
            <p>Email: kontakt@speedzone.pl</p>
            <p>Tel: 333-333-333</p>
            <div className="socials">
              <a href="#" className="social-icon">
                FB
              </a>
              <a href="#" className="social-icon">
                IG
              </a>
              <a href="#" className="social-icon">
                YT
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
                <p>&copy; 2025 SpeedZone. Wszelkie prawa zastrzeżone.</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
