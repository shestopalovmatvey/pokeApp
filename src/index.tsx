import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";

import "@/assets/css/app.scss";

import { App } from "@/app";

const app = createRoot(document.getElementById("root")!);
app.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);
