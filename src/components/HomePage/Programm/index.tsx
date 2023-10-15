import ProgrammCart from "./ProrammCart";
import { data } from "../../../Data";
import "./index.scss";
const Programm = () => {
  return (
    <div id="programm">
      <div className="container">
        <h1>Сбор на действующие программы</h1>
        <div className="programm">
          {data.map((el) => (
            <ProgrammCart el={el} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Programm;
