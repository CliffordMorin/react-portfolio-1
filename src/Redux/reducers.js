import moment from "moment";

console.log(moment().locale());

export default function reducerFunc(
  state = {
    language: moment().locale() === "ja" ? "Japanese" : "English",
  },
  action
) {
  switch (action.type) {
    case "CHANGE_LANGUAGE_TO_ENGLISH":
      return {
        ...state,
        language: "English",
      };

    case "CHANGE_LANGUAGE_TO_JAPANESE":
      return {
        ...state,
        language: "Japanese",
      };

    default:
      return state;
  }
}
