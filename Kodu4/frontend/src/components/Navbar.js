import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar(){
    return(
        <div className="navbar">
            <div className="navmenu">
                <Link to="/">
                    <img className="logo" src="Home.png" alt="webshio"  />
                </Link>
                <Link to="/">
                    <img className="link" src="HomeIcon.png" alt="Pealeht"  />
                </Link>
                <Link to="categories">
                    <img className="link" src="Category.png" alt="Kategooriad" />
                </Link>
            </div>
            <div className="navcart">
                <Link to="cart">
                    <img className="cart" src="cart.svg" alt="cart" />
                </Link>
            </div>
        </div>
    );

}

export default Navbar;