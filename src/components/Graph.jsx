import React, { useEffect, useState } from "react";
import "../assets/css/Chart.css";
import CytoscapeComponent from "react-cytoscapejs";
import axios from "axios";

const styleSheet = [
  {
    selector: "node",
    style: {
      backgroundColor: "#4a56a6",
      height: 60,
      label: "data(id)",
      width: "data(width)",
      "text-valign": "center",
      "text-halign": "center",
      "overlay-padding": "6px",
      "z-index": "10",
      "text-outline-color": "#4a56a6",
      color: "white",
      fontSize: 20,
      shape: "roundrectangle",
    },
  },
  {
    selector: "edge:active",
    style: {
      "line-color": "lightblue",
    },
  },
  {
    selector: "edge",
    style: {
      width: 5,
      "line-color": "#AAD8FF",
      "target-arrow-color": "#6774cb",
      "target-arrow-shape": "triangle",
      "curve-style": "taxi",
    },
  },
];

const Graph = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/download").then((res) => {
      setData(JSON.parse(res.data));
    });
  }, []);

  return (
    <CytoscapeComponent
      style={{ width: "100%", height: "100%" }}
      elements={data}
      stylesheet={styleSheet}
      pan={{ x: 25, y: 50 }}
    />
  );
};

export default Graph;
