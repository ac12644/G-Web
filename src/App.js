import Globalstyles from "./styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { black } from "./styles/Themes";

import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import MovingCar from "./sections/MovingCar";
import tyre from "./assets/tyre.png";
import Totop from "./sections/Totop";

function App() {
  return (
    <>
      <Globalstyles />
      <ThemeProvider theme={black}>
        <Navigation />
        <Footer />
      </ThemeProvider>
      <Totop thesrc={tyre} />
      <MovingCar />
    </>
  );
}

export default App;
