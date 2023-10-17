import { NavLink } from "react-router-dom";
import logo from "../../icons/logo.svg";
import insta from "../../icons/insta.svg";
import tiktok from "../../icons/tiktok.svg";
import whatsapp from "../../icons/whatsapp.svg";
import "./index.scss";
const Header = () => {
  // npm install react-modal
  
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
            <NavLink to={"/gallery"}>Галерея</NavLink>
            <NavLink to={"/requisites"}>Реквизиты</NavLink>
            <NavLink to={"/aboutFound"}>О Фонде</NavLink>
          </nav>
          <div className="header__btn">
            <NavLink
              target="___blank"
              to={"https://www.instagram.com/volonter.kg/"}
            >
              <img src={insta} alt="" />
            </NavLink>
            <NavLink target="___blank" to={"https://www.tiktok.com/@mbo.sos"}>
              {" "}
              <img src={tiktok} alt="" />
            </NavLink>
            <NavLink
              target="___blank"
              to={
                "https://api.whatsapp.com/send/?phone=996552221112&text&type=phone_number&app_absent=0"
              }
            >
              <img src={whatsapp} alt="" />
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
