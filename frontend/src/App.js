import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Add from "./pages/add/Add";
import Edit from "./pages/edit/Edit";
import Home from "./pages/home/Home";
import View from "./pages/view/View";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/edit/:id" element={<Edit />} />
          <Route path="/add" element={<Add />} />
          <Route path="/view/:id" element={<View />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
