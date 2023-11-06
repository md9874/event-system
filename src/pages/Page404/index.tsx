import { AppContext } from "context";
import { ReactElement, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Login404 from "./login";

function Page404(): ReactElement {
  const appCtx = useContext(AppContext);
  const navigate = useNavigate();

  if (!appCtx.state.userData) {
    return <Login404 />;
  } else {
    return (
      <div
        onLoad={() => {
          navigate("/");
        }}
      ></div>
    );
  }
}

export default Page404;
