import { NavLink } from "react-router-dom";
import logo from "../../icons/logo.svg";
import insta from "../../icons/insta.svg";
import tiktok from "../../icons/tiktok.svg";
import whatsapp from "../../icons/whatsapp.svg";
import "./index.scss";
import { useState } from "react";
import { log } from "console";
const Header = () => {
  const [burger, setBurger] = useState(false);
  console.log(burger);

  return (
    <div id="header" data-aos="flip-down">
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
          <div onClick={() => setBurger(!burger)} className="burger">
            <span
              style={{
                transform: burger ? "rotate(45deg)" : "rotate(0)",
                top: burger ? "37%" : "",
                transition: ".4s",
              }}
            ></span>
            <span
              style={{
                transform: burger ? "scale(0)" : "scale(1)",
                transition: ".4s",
              }}
            ></span>
            <span
              style={{
                transform: burger ? "rotate(-45deg)" : "rotate(0)",
                bottom: burger ? "45%" : "",
                transition: ".4s",
              }}
            ></span>
          </div>
          <div
            style={{ height: burger ? "" : "0", transition: ".4s" }}
            className="header__menu"
          >
            <div
              style={{
                display: burger ? "flex" : "none",
                opacity: burger ? "1" : "0",
                transition: "1s",
                flexDirection: "column",
              }}
            >
              <NavLink to={"/"}>Главная</NavLink>
              <NavLink to={"/gallery"}>Галерея</NavLink>
              <NavLink to={"/requisites"}>Реквизиты</NavLink>
              <NavLink to={"/aboutFound"}>О Фонде</NavLink>
              <div className="header__menu__btn">
                <NavLink
                  target="___blank"
                  to={"https://www.instagram.com/volonter.kg/"}
                >
                  <img src={insta} alt="" />
                </NavLink>
                <NavLink
                  target="___blank"
                  to={"https://www.tiktok.com/@mbo.sos"}
                >
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
      </div>
    </div>
  );
};

export default Header;
