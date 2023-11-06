import "./index.scss";
import help1 from "../../../img/help1.png";
import help2 from "../../../img/help2.png";
import help3 from "../../../img/help3.png";
const Help = () => {
  return (
    <div id="help">
      <div className="container">
        <div className="help">
          <div className="help__img">
            <img src={help1} alt="" />
            <div>
              <img src={help2} alt="" />
              <img src={help3} alt="" />
            </div>
          </div>
          <div className="help__text">
            <h1>Помогите нам сделать жизнь детей счастливее</h1>
            <p>
              Вы можете внести свой вклад с помощью пожертвования или
              волонтерства
            </p>
            <h2>На 2023 год:</h2>
            <div className="help__text-block">
              <div className="help__text-block-wr">
                <h3>11 393+</h3>
                <h4>волонтёров</h4>
                <p>присоединились к Движению</p>
              </div>
              <div className="help__text-block-wr">
                <h3>11 393+</h3>
                <h4>волонтёров</h4>
                <p>присоединились к Движению</p>
              </div>
              <div className="help__text-block-wr">
                <h3>11 393+</h3>
                <h4>волонтёров</h4>
                <p>присоединились к Движению</p>
              </div>
            </div>
          </div>
        </div>
        <div className="help-block">
        <div className="help-block2">
            <div  className="btn-99">
              
             <div className="btn-100">
              <button>100c</button>
            <button>500c</button>
            <button>1000c</button>
            <button>Другая сума</button>
            </div>
              <h3>Оплата через карту <span>VISA </span>или <span>ЭЛКАРТ</span>
                |
                <span>Другие виды оплаты</span></h3>
            </div>


            <div className="btn-200">
              <button>Я хочу помочь!</button>
              <p>“нажимая кнопку вы соглашайетесь с условиями <br/>оферты и даете согласие на обработку <br/>персональных данных”</p>
            </div>


          </div>
          </div>





          
        </div>
      </div>
   
  );
};

export default Help;
