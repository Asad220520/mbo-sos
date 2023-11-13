import ProgrammCart from "./ProrammCart";
import { data } from "../../../Data";
import "./index.scss";
import "swiper/css";
import "swiper/css/navigation";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination } from "swiper/modules";
const Programm = () => {
  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 5,
  //   slidesToScroll: 1,
  // };

  return (
    <div id="programm">
      <div className="container">
        <h1>Сбор на действующие программы</h1>
        <div className="programm">
          {data.map((el) => (
            <div key="slide1">
              <ProgrammCart el={el} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Programm;
