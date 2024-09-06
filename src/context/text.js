import { createContext, useEffect } from "react";
import Aos from "aos";
const ThemeContexttt = createContext();
export function ThemeProvider({ children }) {
  
  useEffect(() => {
    const videoElement = document.getElementById("bg-video");
    if (videoElement) {
      videoElement.play();
    }
    Aos.init({ duration: 1500 });
}, []);


  return (
    <ThemeContexttt.Provider value={{}}>
      {children}
    </ThemeContexttt.Provider>
  );
}

export default ThemeContexttt;
