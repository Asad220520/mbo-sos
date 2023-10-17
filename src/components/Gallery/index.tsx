import { useState } from "react";
import "./index.scss";
import { useNavigate } from "react-router-dom";
import kg from "../../img/kg.svg";
import gl1 from "../../img/gl1.png";
import gl2 from "../../img/gl2.png";
import gl3 from "../../img/gl3.png";
import ten1 from "../../img/ten1.jpg";
import Programm from "../HomePage/Programm";
const Gallery = () => {
  const [hovered, setHovered] = useState(false);
  const navig = useNavigate();
  return (
    <>
      <div id="gallery">
        <div className="gallery">
          <div className="container">
            <div className="gallery__text">
              <img className="kg" src={kg} alt="" />
            </div>
            <div className="gallery__img">
              <h1>
                ЛЮДИ РАБОТАБТ{" "}
                <span>
                  С <br /> ЛЮДМИ🤝!
                </span>
              </h1>
              <div className="gallery__img-img">
                <img className="gl1" src={gl1} alt="" />
                <img className="gl2" src={gl2} alt="" />
                <img className="gl3" src={gl3} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="title">
        <div className="container">
          <div className="title">
            <h1>НАМ 10 ЛЕТ</h1>
            <div className="title__img">
              <img src={ten1} alt="" />
              <img src={ten1} alt="" />
            </div>
            <div className="title__img">
              <img src={ten1} alt="" />
              <img src={ten1} alt="" />
            </div>
            <div className="title__img">
              <img src={ten1} alt="" />
              <img src={ten1} alt="" />
            </div>
          </div>
        </div>
        <Programm />
      </div>
    </>
  );
};

export default Gallery;
