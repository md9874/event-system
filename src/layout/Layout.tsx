import { Box } from "@mui/material";
import { ReactElement } from "react";
import { Outlet } from "react-router-dom";
import TopBar from "./TopBar";

function Layout(): ReactElement {
  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "row", minHeight: "100vh" }}>
        <Box sx={{ display: "flex", flexDirection: "column", width: "100%", height: "100vh" }}>
          <TopBar />
          <Box
            sx={{
              width: "100%",
              flex: 1,
              maxHeight: "84vh",
              margin: "3vh 0px",
              overflow: "auto",
              scrollbarWidth: "thin",
              scrollbarColor: "#76767A #ECECEC",
              "&::-webkit-scrollbar": {
                width: "12px",
              },

              "&::-webkit-scrollbar-track": {
                background: "#ECECEC",
              },

              "&::-webkit-scrollbar-thumb": {
                backgroundColor: "#ECECEC",
                borderRadius: "12px",
                border: "3px solid #ECECEC",
              },
            }}
          >
            <Outlet />
          </Box>
        </Box>
      </Box>
    </>
  );
}
export default Layout;
