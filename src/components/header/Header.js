import logoImage from "./../../img/Logo.png";
import { ConnectButton } from "web3uikit";
import { MoralisProvider } from "react-moralis";
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <div className="logo">
        <img className="logo__inner" src={logoImage} alt="" />
      </div>
      <button className="burger-menu">
        <span />
        <span />
        <span />
      </button>
      <div className="header-right">
        <ul className="header__nav">
          <li className="header_nav_inner">Products</li>
          <li className="header_nav_inner">Features</li>
          <li className="header_nav_inner">About</li>
          <li className="header_nav_inner">Contact</li>
        </ul>
        <div className="signIn">
          <button className="login__btn">Login</button>
          <Link to="/main">
          <button className="Register__btn">Register</button>
          </Link>
        </div>
        <MoralisProvider initializeOnMount={false}>
            <ConnectButton moralisAuth={true} />
          </MoralisProvider>
      </div>
    </header>
  );
}

export default Header;
