import { Box, useTheme } from "@mui/material";
import { PageLoader } from "components";
import { ReactElement } from "react";

function Home(): ReactElement {
  const theme = useTheme();

  return (
    <PageLoader
      apis={[]}
    >
      <Box
        sx={{
          display: "flex",
          rowGap: "19px",
          justifyContent: "space-around",
          width: "98vw",
          margin: "0px 1vw",
          flexWrap: "wrap",
          [theme.breakpoints.down("md")]: {
            width: "97vw",
          },
        }}
      >
        Hello!!!</Box>
    </PageLoader>
  );
}

export default Home;
