export const initializer = {
  value: "",
  options: [],
  results: [],
};
export const searchReducer = (state, action) => {
  switch (action.type) {
    case "INITIALIZE":
      return {
        value: action.payload.keyword,
        options: action.payload.options,
        results: action.payload.options,
      };
    case "UPDATE_VALUE":
      return {
        ...state,
        value: action.payload.value,
      };
    case "UPDATE_OPTIONS":
      return {
        ...state,
        options: action.payload.options,
      };
    case "UPDATE_RESULTS":
      return {
        ...state,
        results: action.payload.results,
      };
  }
};
