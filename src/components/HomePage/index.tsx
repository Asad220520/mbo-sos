import Fondom from "../Fond/fond";
import Puzl from "../Puzl/puzl";
import AboutUs from "./AboutUs";
import Fond from "./Fond";
import Help from "./Help";
import Home from "./Home";
import Programm from "./Programm";
import "../HomePage/";
const HomePage = () => {
  return (
    <div>
      <Home />
      <Fond />
      <Programm />
      <Puzl />
      <AboutUs />
      <Help />
      <Fondom />
    </div>
  );
};

export default HomePage;
