import { NavLink } from "react-router-dom";
import logo from "../../icons/logo.svg";
import insta from "../../icons/insta.svg";
import tiktok from "../../icons/tiktok.svg";
import whatsapp from "../../icons/whatsapp.svg";
import "./index.scss";
const Header = () => {
  return (
    <div id="header">
      <div className="container">
        <div className="header">
          <div className="header__logo">
            <NavLink to={"/"}>
              <img src={logo} alt="" />
            </NavLink>
          </div>
          <nav className="header__nav">
            <NavLink to={"/"}>Главная</NavLink>
            <NavLink to={"/"}>Галерея</NavLink>
            <NavLink to={"/"}>Реквизиты</NavLink>
            <NavLink to={"/"}>О Фонде</NavLink>
          </nav>
          <div className="header__btn">
            <NavLink to={"/"}>
              <img src={insta} alt="" />
            </NavLink>
            <NavLink to={"/"}>
              {" "}
              <img src={tiktok} alt="" />
            </NavLink>
            <NavLink to={"/"}>
              <img src={whatsapp} alt="" />
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
