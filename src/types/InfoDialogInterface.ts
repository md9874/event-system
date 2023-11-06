export interface InfoDialogInterface {
  open: boolean;
  content: string;
}

export type SetInfoDialogType = { type: "SET_INFO_DIALOG"; content: string } | { type: "CLOSE_INFO_DIALOG" };

export default InfoDialogInterface;
