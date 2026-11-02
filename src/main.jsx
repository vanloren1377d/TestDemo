import React from "react";
import { createRoot } from "react-dom/client";
import { ConfigProvider } from "antd";
import App from "./App.jsx";
import "./styles.css";

createRoot(document.getElementById("root")).render(
  <ConfigProvider theme={{ token: { colorPrimary: "#2563eb", borderRadius: 8 } }}>
    <App />
  </ConfigProvider>
);
