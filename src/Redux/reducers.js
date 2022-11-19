const browserLanguageSettings =
  window.navigator.userLanguage || window.navigator.language;

const language = browserLanguageSettings.split(/[-_]/)[0].toLowerCase(); // language without region code

console.log("language:", language);

const checkLanguage = (language) => {
  switch (language) {
    case "en":
      return "English";
    case "ja":
      return "Japanese";
    default:
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
