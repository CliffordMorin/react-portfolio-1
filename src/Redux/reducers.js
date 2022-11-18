const javascriptlocale =
  window.navigator.userLanguage || window.navigator.language;

const language = javascriptlocale.split(/[-_]/)[0]; // language without region code

console.log("language:", language);

const checkLanguage = (language) => {
  if (language.toLowerCase() === "ja") {
    return "Japanese";
  } else {
    return "English";
  }
};

export default function reducerFunc(
  state = {
    language: checkLanguage(language),
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
