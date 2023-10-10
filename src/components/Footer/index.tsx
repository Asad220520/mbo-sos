import { Link } from "react-router-dom";
import "./index.scss";
const Footer = () => {
  return (
    <div id="footer">
      <div className="container">
        <div className="footer">
          <h2>© 2023 SOS</h2>
          <div className="footer__footer-nav">
            <Link to={"/"}>Главная</Link>
            <Link to={"/"}>Галерея</Link>
            <Link to={"/"}>Реквизиты</Link>
            <Link to={"/"}>О Фонде</Link>
          </div>
          <button>
            НАВЕРХ
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="31"
              viewBox="0 0 16 31"
              fill="none"
            >
              <path
                d="M8.70711 0.292892C8.31658 -0.0976315 7.68342 -0.0976314 7.29289 0.292892L0.928931 6.65685C0.538407 7.04738 0.538407 7.68054 0.928931 8.07107C1.31946 8.46159 1.95262 8.46159 2.34314 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292892ZM9 31L9 1L7 1L7 31L9 31Z"
                fill="white"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
