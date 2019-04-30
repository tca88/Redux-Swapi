import {
  FETCH_SWAPI_START,
  FETCH_SWAPI_SUCCESS,
  FETCH_SWAPI_FAILURE
} from "../actions";
const initialState = {
  characters: [],
  error: "",
  isFetching: false
  // Array characters, Boolean fetching, null error.
};
export const charsReducer = (state = initialState, action) => {
  console.log("reducer", action);
  switch (action.type) {
    case FETCH_SWAPI_START:
      return {
        ...state,
        error: "",
        isFetching: true
        // the next step is to update the UI to reflect the loading state.
      };
    case FETCH_SWAPI_SUCCESS:
      return {
        ...state,
        error: "",
        isFetching: false,
        characters: action.payload
      };
    case FETCH_SWAPI_FAILURE:
      return {
        ...state,
        error: "Oh no! error!",
        isFetching: true
      };
    default:
      return state;
  }
};
