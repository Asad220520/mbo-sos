import "./index.scss";
import qrcode from "../../img/qrcode.png";
import dom from "../../icons/dom.svg";
import bic from "../../icons/bic.svg";
import elcart from "../../icons/elkart.svg";
import optima from "../../icons/optima.svg";
import oshka from "../../icons/oshka.svg";
import elsom from "../../icons/elsom.svg";
import embank from "../../icons/embank.svg";
const Requisites = () => {
  return (
    <div className="wrapperreg">
      <div id="requisites">
        <div className="container">
          <div className="requisites">
            <h1>
              Поддержите нас Оформите ежемесячное пожертвование и cтаньте
              творцом добрых дел! <span>«SOS»</span> — это «Уникальный фонд». Мы
              вовлекаем людей в решение социальных проблем через просвещение и
              благотворительность.
            </h1>
            <h2>МБО "SOS"</h2>
          </div>
        </div>
      </div>
      <div id="bank">
        <div className="container">
          <div className="bank">
            <div className="bank__reg">
              <div className="bank__reg-img">
                <img src={dom} alt="" />
                <h3>Расчетный счет(KGS) 1280016052847229 </h3>
              </div>
              <div className="bank__reg-img">
                <img src={bic} alt="" />
                <h3>
                  БИК 128001 <span>(Эрмек О)</span>
                </h3>
              </div>
              <div className="bank__reg-img">
                <img src={elcart} alt="" />
                <h3>
                  Элкарт: 9417018822510905 <span>(Эрмек О)</span>
                </h3>
              </div>
              <div className="bank__reg-img">
                <img src={optima} alt="" />
                <h3>
                  Оптима: 4169585349765239 <span>(Эрмек О)</span>
                </h3>
              </div>
              <div className="bank__reg-img">
                <img src={oshka} alt="" />
                <h3>
                  О!Деньги : 0501354533 <span>(Эрмек О)</span>
                </h3>
              </div>
              <div className="bank__reg-img">
                <img src={elsom} alt="" />
                <h3>
                  Элсом KICB: 0553335335 <span>(Эрмек О)</span>
                </h3>
              </div>
              <div className="bank__reg-img">
                <img src={embank} alt="" />
                <h3>
                  МБанк: 996553335335 <span>(Эрмек О)</span>
                </h3>
              </div>
            </div>
            <div className="bank__img">
              <img src={qrcode} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Requisites;
