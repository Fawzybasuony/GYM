


import { Outlet } from "react-router-dom";
import Footer from "../componant/Footer/Footer";
import Nav from "../componant/Nav Bar/Nav";
 
 
 
// PublicLayout.js
const PublicLayout = () => {
  return (
    <>
      <Nav/>
      <Outlet />
      <Footer />
    </>
  );
};


 







export {  PublicLayout };
