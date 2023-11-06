import { ThemeProvider } from "@mui/material/styles";
import { InfoDialog } from "components";
import { AppContext } from "context";
import dayjs from "dayjs";
import "dayjs/locale/pl";
import { useContext } from "react";
import AppContextProvider from "./context";
import "./index.css";
import AppRouter from "./router";
import getTheme from "./styles";

dayjs.locale("pl");
function App() {
  const appCtx = useContext(AppContext);

  return (
    <AppContextProvider>
      <ThemeProvider theme={getTheme()}>
        <AppRouter />
        <InfoDialog open={appCtx.state.infoData.open} content={appCtx.state.infoData.content} />
      </ThemeProvider>
    </AppContextProvider>
  );
}

export default App;
