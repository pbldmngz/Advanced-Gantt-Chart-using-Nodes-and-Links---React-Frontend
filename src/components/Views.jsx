import React from "react";
import { Routes, Route } from "react-router-dom";

import { Upload } from "./Upload";
import Graph from "./Graph";

function Views() {
  return (
    <Routes>
      <Route exact path="/" element={<Upload />} />
      <Route path="/upload" element={<Upload />} />
      <Route path="/chart" element={<Graph />} />
    </Routes>
  );
}

export default Views;
