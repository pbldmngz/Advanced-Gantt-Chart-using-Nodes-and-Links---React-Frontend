import { useState } from "react";
import "./assets/css/App.css";
import MiniDrawer from "./components/MiniDrawer";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <MiniDrawer />
    </BrowserRouter>
  );
}

export default App;
