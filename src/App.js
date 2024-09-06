/** @format */


import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Contactt from "./componant/contact/Contactt";
import Footer from "./componant/foter/Footer";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/Contactt",
    element: <Contactt />,
  },


]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <Footer/>
    </>
  );
}

export default App;
