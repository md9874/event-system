import { LanguageType, SetLanguageType } from "types";

const languageReducer = (state: LanguageType, action: SetLanguageType) => {
  switch (action.type) {
    case "pl":
      return "pl";
    case "en":
      return "en";
    default:
      return state;
  }
};

export default languageReducer;
