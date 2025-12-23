import './nav.css';
import { NavLink } from 'react-router-dom';
import logo from '../../images/SpeedZone-logo.png'

function Nav() {
        const getLinkClass = ({isActive}) => {
            return isActive ? "active" : "";
        }
    return(
        <nav className='navigation'>
            <div className='left'>
                    <a className='logo' href=""><img src={logo} alt="" className='logo-img' /></a>                
                <NavLink
                to=''
                className="cart">
                    <div id='cart-icon'>🛒</div>
                    <div id='cart-total'>0.00ZŁ</div>

                </NavLink>
                <NavLink to='' id='account' className={getLinkClass}>Twoje konto</NavLink>
            </div>
            <ul className='lista'>
                <NavLink 
                    to='/'
                    className={getLinkClass}
                >Main</NavLink>
                <NavLink 
                    to='/suzuki'
                    className={getLinkClass}
                >Suzuki</NavLink>
                <NavLink 
                    to='/'
                    className={getLinkClass}
                >Yamaha</NavLink>
                <NavLink 
                    to='/'
                    className={getLinkClass}
                >Honda</NavLink>
                <NavLink 
                    to='/'
                    className={getLinkClass}
                >Kawasaki</NavLink>
            </ul>
        </nav>
    )
}

export default Nav;