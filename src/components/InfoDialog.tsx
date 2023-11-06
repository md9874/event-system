import { Button, Dialog, Typography } from "@mui/material";
import { AppContext } from "context";
import { ReactElement, useContext } from "react";
import { InfoDialogInterface } from "types";

function InfoDialog(props: InfoDialogInterface): ReactElement {
  const appCtx = useContext(AppContext);
  return (
    <Dialog
      open={props.open}
      PaperProps={{
        sx: {
          padding: "30px",
          textAlign: "center",
          zIndex: 2000,
        },
      }}
    >
      <Typography
        sx={{
          fontSize: "1.2rem",
        }}
      >
        {props.content}
      </Typography>
      <Button
        onClick={() => {
          appCtx.dispatch({ type: "CLOSE_INFO_DIALOG" });
        }}
        sx={{ width: "max-content", margin: "15px auto 0px auto" }}
      >
        OK
      </Button>
    </Dialog>
  );
}

export default InfoDialog;
