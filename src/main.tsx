import { createRoot } from "react-dom/client";
import App from "./app";
import "./index.css";
import "./engines/index";
createRoot(document.getElementById("root")!).render(<App />);
