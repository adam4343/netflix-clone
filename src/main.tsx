import ReactDOM from "react-dom/client";
import "./index.css";
import MainRouter from "./MainRouter.tsx";
import { Toaster } from "sonner";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <>
    <Toaster richColors />
    <MainRouter />
  </>
);
