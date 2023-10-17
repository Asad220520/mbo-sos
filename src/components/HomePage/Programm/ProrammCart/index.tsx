import { Link } from "react-router-dom";
import { Itype } from "../../../../Types";

import "./index.scss";
interface IProductCart {
  el: Itype;
}
// npm install swiper
// npm install --save-dev @types/swiper

const ProgrammCart: React.FC<IProductCart> = ({ el }) => {

  return (
    <div id="programmcart">
      <div className="container">
        <div className="programmcart">
          <div className="programmcart__slide">
            <div className="programmcart__slide-block">
              <img src={el.image} alt="" />
              <h1>{el.title}</h1>
              <p>{el.description}</p>
              <Link to={"/Подробнее"}>
                <button>Подробнее</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgrammCart;
