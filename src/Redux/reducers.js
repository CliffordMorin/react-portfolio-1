export default function reducerFunc(
  state = {
    language: "English",
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
