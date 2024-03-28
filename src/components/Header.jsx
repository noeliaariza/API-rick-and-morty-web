import logo from "../images/logo-header.png";
import "../scss/components/Header.scss";

function Header() {
  return (
    <div className="header">
      <img className="header__logo" src={logo} alt="Rick & Morty Logo" />
    </div>
  );
}

export default Header;
