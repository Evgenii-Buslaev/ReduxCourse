import { ERROR_DISPLAY_OFF, ERROR_DISPLAY_ON } from "./types";

const initialState = {
  error: null,
};

export const appReducer = (state = initialState, action) => {
  console.log("input textReducer > ", action);

  switch (action.type) {
    case ERROR_DISPLAY_ON:
      return {
        ...state,
        error: action.text,
      };
    case ERROR_DISPLAY_OFF:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};
