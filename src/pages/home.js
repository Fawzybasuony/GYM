/** @format */

// import { useContext } from "react";
import Clases from "../componant/Clases";
import Expertrainers from "../componant/Expertrainers";
import Main from "../componant/Main";
import Slidar from "../componant/Slidar";
import Header from "../componant/header";
const Home = () => {
  return (
    <>
      <Header />
      <Slidar />
      <Main />
      <Clases />
      <Expertrainers />
    </>
  );
};

export default Home;
