import { NavLink } from "react-router-dom";
import "./nav-res.css";
import { useState } from "react";
import logo from "../../images/SpeedZone-logo.png";

function NavR() {


  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);


  return (
    <>
      <div className="container">
        <div className="UI">
          <NavLink>
            <img className="logo" src={logo} alt="" />
          </NavLink>
          <NavLink to="" className="cart">
            <div id="cart-icon">🛒</div>
            <div id="cart-total">0.00ZŁ</div>
          </NavLink>
          <NavLink to="" id="account">
            Twoje konto
          </NavLink>
        </div>
        <div id="menu-button" onClick={toggleMenu}>
          &#9776;
        </div>

        <nav id="side-menu" style={{ left: menuOpen ? "0px" : "-400px" }}>
          <NavLink  to="/">Home</NavLink>
          <NavLink  to="/suzuki">Suzuki</NavLink>
          <NavLink  to="/">Kawasaki</NavLink>
          <NavLink  to="/">Honda</NavLink>
          <NavLink  to="/">Yamaha</NavLink>
        </nav>
      </div>
    </>
  );
}

export default NavR;
