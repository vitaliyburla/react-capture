import React from "react";
import GlobalStyle from "./components/GlobalStyled";
import AboutUs from "./pages/AboutUs";
import Nav from "./components/Nav";
import ContactUs from "./pages/ContactUs";
import OurWork from "./pages/OurWork";
import MovieDetail from "./pages/MovieDetail";
//Router
import { Switch, Route, useLocation } from "react-router-dom";
//Animation
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.key}>
          <Route path={"/"} exact>
            <AboutUs />
          </Route>
          <Route path={"/contact"}>
            <ContactUs />
          </Route>
          <Route path={"/work"} exact>
            <OurWork />
          </Route>
          <Route path={"/work/:id"}>
            <MovieDetail />
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
