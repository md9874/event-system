import ChatIcon from '@mui/icons-material/Chat';
import Delete from "@mui/icons-material/Delete";
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import SearchIcon from '@mui/icons-material/Search';
import { Box, Button } from "@mui/material";
import { CustomDataTable } from "components";
import { ReactElement } from "react";
import { useNavigate } from "react-router-dom";

interface CustomPageInterface {
  tableHeaders: string[];
  tableObjectKeys: string[];
  tableDataArray: any[];
  tableMaxWidthColumnNubers?: number[];
  chatIconShow: (element: any) => boolean;
  chatIconOnclick: (element: any) => void;
  searchIconShow: (element: any) => boolean;
  searchIconOnclick: (element: any) => void;
  startIconShow: (element: any) => boolean;
  startIconOnclick: (element: any) => void;
  deleteIconShow: (element: any) => boolean;
  deleteIconOnclick: (element: any) => void;
}

function ListPage(props: CustomPageInterface): ReactElement {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        width: "90%",
        height: "100%",
        maxHeight: "calc(100vh - 100px)",
        margin: "0px auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        background: "#F8F8F8",
      }}
    >
      <CustomDataTable
        headers={props.tableHeaders}
        objectKeys={props.tableObjectKeys}
        dataArray={props.tableDataArray}
        maxWidthColumnNubers={props.tableMaxWidthColumnNubers}
        actions={[
          {
            label: "Czat",
            icon: <ChatIcon width="22px" height="22px" />,
            isShown: props.chatIconShow,
            onClick: props.chatIconOnclick,
          },
          {
            label: "Zobacz",
            icon: <SearchIcon width="22px" height="22px" />,
            isShown: props.searchIconShow,
            onClick: props.searchIconOnclick,
          },
          {
            label: "Rozpocznij",
            icon: <PlayCircleIcon width="22px" height="22px" />,
            isShown: props.startIconShow,
            onClick: props.startIconOnclick,
          },
          {
            label: "Usuń",
            icon: <Delete width="22px" height="22px" />,
            isShown: props.deleteIconShow,
            onClick: props.deleteIconOnclick,
          },
        ]}
        sx={{ flex: 1, "& td": { fontSize: "0.9em", padding: "10px 19px" }, "& th": { fontSize: "0.9em" } }}
      />
      <Button
        variant="contained"
        onClick={() => {
          navigate("/");
        }}
        sx={{ marginBottom: "2vh" }}
      >
        Zamknij
      </Button>
    </Box>
  );
}

export default ListPage;
