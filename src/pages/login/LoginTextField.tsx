import { TextField, TextFieldProps } from "@mui/material";
import { ReactElement } from "react";

function LoginTextField(props: TextFieldProps): ReactElement {
  return (
    <TextField
      sx={{
        width: "100%",
        background: "#c2c2c2",
      }}
      InputProps={{
        sx: {
          color: "#FFF",
          height: "43px",
          "& fieldset": {
            border: "none",
          },
          "&.Mui-error": { border: "1px solid #E40613" },
        },
      }}
      InputLabelProps={{
        sx: {
          color: "#FFF",
          fontWeight: "bold",
          '&[data-shrink="true"]': { display: "none" },
        },
      }}
      {...props}
    />
  );
}

export default LoginTextField;
