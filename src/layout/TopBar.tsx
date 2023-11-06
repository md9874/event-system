import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import TranslateIcon from '@mui/icons-material/Translate';
import { Avatar, Box, Button, SxProps, Theme, Typography } from "@mui/material";
import { AppContext } from "context";
import { EncryptStorage } from "encrypt-storage";
import { ReactElement, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LanguageType } from "types";

interface TopBarInterface {
  sx?: SxProps<Theme>;
}

function TopBar(props: TopBarInterface): ReactElement {
  const [select, setSelect] = useState<boolean>(false);

  const navigate = useNavigate();
  const appCtx = useContext(AppContext);

  async function changeAppLanguage(language: LanguageType) {
  }

  return (
    <Box sx={{ width: "inherit", height: "inherit", ...props.sx }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "end",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ background: "#E40613", marginRight: "1vw", width: "5vh", height: "5vh" }}>
          {<AccountCircleIcon style={{ width: "3vh", height: "3vh" }} />}
        </Avatar>
        <Typography sx={{ fontSize: "3vh", fontWeight: "bold", color: "#FFF" }}>{appCtx.state.userData?.user}</Typography>
      </Box>
      <Box
        sx={{
          position: "absolute",
          right: "1vw",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          alignItems: "start",
          height: "inherit",
        }}
      >
        <Button
          startIcon={<LogoutIcon style={{ width: "3vh", height: "3vh" }} />}
          onClick={() => {
            const encryptStorage = new EncryptStorage("aaaaaaaaaa");
            encryptStorage.removeItem("ul");
            encryptStorage.removeItem("up");
            appCtx.dispatch({ type: "REMOVE_USER_DATA" });
            appCtx.dispatch({ type: "SET_ROUTER", router: undefined });
            navigate("/");
          }}
          sx={{
            color: "#FFF",
            width: "fit-content",
            padding: "0px",
            "& span": {
              marginLeft: "0px",
              marginRight: "1vw",
            },
            justifyContent: "start",
          }}
        >
          <Typography sx={{ fontSize: "1.5vh" }}>Wyloguj się</Typography>
        </Button>
        <Button
          startIcon={<TranslateIcon style={{ width: "2.5vh", height: "2.5vh" }} />}
          onClick={() => {
            setSelect(!select);
          }}
          sx={{
            color: "#FFF",
            width: "fit-content",
            padding: "0px",
            "& span": {
              marginLeft: "0px",
              marginRight: "1vw",
            },
            justifyContent: "start",
          }}
        >
          <Typography sx={{ fontSize: "1.5vh" }}>Język</Typography>
        </Button>
        {select && (
          <Box sx={{ display: "flex", flexDirection: "column", background: "#0f0", position: "absolute", top: "100%" }}>
            <Button
              variant="contained"
              onClick={() => {
                changeAppLanguage("pl");
              }}
              sx={{ width: "100%", border: "1px solid #fff", borderRadius: "0px" }}
            >
              Polski
            </Button>
            <Button
              variant="contained"
              onClick={() => {
                changeAppLanguage("en");
              }}
              sx={{ width: "100%", border: "1px solid #fff", borderRadius: "0px" }}
            >
              English
            </Button>
          </Box>
        )}
      </Box>
    </Box>
  );
}
export default TopBar;
