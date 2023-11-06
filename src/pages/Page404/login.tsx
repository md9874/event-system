import { CircularProgress } from "@mui/material";
import { useSessionChecking } from "hooks";
import { ReactElement, useEffect } from "react";
import { useLocation } from "react-router-dom";

function Login404(): ReactElement {
  const location = useLocation();

  const sessionChecking = useSessionChecking();
  useEffect(() => {
    sessionChecking(location.pathname);
  }, []);

  return <CircularProgress />;
}

export default Login404;
