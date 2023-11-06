import App from "App";
import dayjs from "dayjs";
import "dayjs/locale/pl";
import ReactDOM from "react-dom/client";
import "./index.css";

dayjs.locale("pl");

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(<App />);
