const initialNominations = [];

export const initializer = (initialValue = initialNominations) => {
  if (typeof window === "undefined") {
    return initialNominations;
  }
  return (
    JSON.parse(localStorage.getItem("SHOPPIES_nominations")) ||
    initialNominations
  );
};
export const nominationsReducer = (state, action) => {
  switch (action.type) {
    case "ADD_NOMINATION":
      return [...state, action.payload];
    case "DELETE_NOMINATION":
      return state.filter(
        (nomination) => nomination.key !== action.payload.key
      );
  }
};
