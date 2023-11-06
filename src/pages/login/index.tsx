import { Box, Button, Typography } from "@mui/material";
import { encryptStorageKey } from "appConfig";
import { LoadingBackdrop } from "components";
import { AppContext } from "context";
import { EncryptStorage } from "encrypt-storage";
import { ReactElement, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginTextField from "./LoginTextField";


function LoginField(): ReactElement {
  const [userLogin, setUserLogin] = useState<string>("");
  const [userPassword, setUserPassword] = useState<string>("");
  const [userLoginError, setUserLoginError] = useState<boolean>(false);
  const [userPasswordError, setUserPasswordError] = useState<boolean>(false);

  const [isLoading, setLoading] = useState<boolean>(false);
  const [isLoginError, setLoginError] = useState<boolean>(false);

  const navigate = useNavigate();
  const appCtx = useContext(AppContext);

  async function handleLogin() {
    const encryptStorage = new EncryptStorage(encryptStorageKey);

    setLoading(true);
    let checking: boolean = true;
    if (userLogin === "") {
      checking = false;
      setUserLoginError(true);
    } else {
      setUserLoginError(false);
    }
    if (userPassword === "") {
      checking = false;
      setUserPasswordError(true);
    } else {
      setUserPasswordError(false);
    }
    if (checking) {
    }
    setLoading(false);
  }


  useEffect(() => {
    appCtx.dispatch({ type: "REMOVE_USER_DATA" });
  }, []);

  return (
    <>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(5, 1fr)",
          gridTemplateRows: "repeat(9, 1fr)",
          width: "480px",
          height: "125%",
          background: "#a3a3a3",
        }}
      >
        <Box sx={{ gridRow: "2", gridColumn: "2/5", textAlign: "center" }}>
          <Typography sx={{ color: "#FFF", fontSize: "1.8em", fontWeight: "bold", letterSpacing: "0px" }}>Logowanie</Typography>
        </Box>
        <Box sx={{ gridRow: "4/6", gridColumn: "2/5", display: "flex", flexDirection: "column", rowGap: "19px", position: "relative" }}>
          <LoginTextField
            type="text"
            value={userLogin}
            error={userLoginError}
            onChange={(e) => {
              setUserLogin(e.target.value);
            }}
            label="Login"
            size="small"
          />
          <LoginTextField
            type="password"
            value={userPassword}
            error={userPasswordError}
            onChange={(e) => {
              setUserPassword(e.target.value);
            }}
            label="Hasło"
            size="small"
          />
          <Box sx={{ display: "flex", justifyContent: "start" }}>
            <Button
              onClick={() => {
                navigate("/forgot-password");
              }}
              sx={{
                color: "#fff",
                fontSize: "0.75em",
                fontWeight: "bold",
                width: "max-content",
                position: "relative",
                textTransform: "none",
                top: "-20px",
                "&:hover": { background: "inherit" },
              }}
            >
              Nie pamiętasz hasła?
            </Button>
          </Box>
        </Box>
        <Box
          sx={{
            gridRow: "8",
            gridColumn: "2/5",
          }}
        >
          <Button
            variant="contained"
            onClick={() => {
              handleLogin();
            }}
          >
            Zaloguj się
          </Button>
        </Box>
      </Box>
      <Box sx={{ width: "30%", padding: "0px 1vw", color: "#E80412" }}>
        {isLoginError && (
          <Typography
            sx={{
              fontSize: "inherit",
              fontWeight: "bold",
              display: "inline",
            }}
          >
            {"Nieprawidłowy login lub hasło"}
          </Typography>
        )}
      </Box>
      <LoadingBackdrop open={isLoading} />
    </>
  );
}

export default LoginField;
