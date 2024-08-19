import * as React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RedireccionarALanding from "./RedireccionarALanding.jsx";
import Landing from "../views/Landing.jsx";
import Example from "../views/Example.jsx";

const AppRoutes = ({ addToCart }) => {
  return (
    <Router>
      <Routes>
        <Route path="/example" element={<Example />} exact />
        <Route path="/" element={<Landing addToCart={addToCart} />} exact />
        <Route path="*" element={<RedireccionarALanding />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
