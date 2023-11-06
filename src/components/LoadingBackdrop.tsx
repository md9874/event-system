import { Backdrop, CircularProgress } from "@mui/material";
import { ReactElement } from "react";

interface LoadingBackdropInterface {
  open: boolean;
}

function LoadingBackdrop(props: LoadingBackdropInterface): ReactElement {
  return (
    <Backdrop sx={{ color: "#fff", zIndex: 5000 }} open={props.open}>
      <CircularProgress color="inherit" />
    </Backdrop>
  );
}

export default LoadingBackdrop;
