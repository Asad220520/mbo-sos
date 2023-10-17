import ProgrammCart from "./ProrammCart";
import { data } from "../../../Data";
import "./index.scss";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
const Programm = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <div id="programm">
      <div className="container">
        <h1>Сбор на действующие программы</h1>
        <div className="programm">
          <Swiper
            slidesPerView={3}
            centeredSlides={true}
            spaceBetween={30}
            pagination={{
              type: "fraction",
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            {data.map((el) => (
              <SwiperSlide key="slide1">
                <ProgrammCart el={el} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Programm;
