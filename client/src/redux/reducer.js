import { GET_RECIPES, GET_DIETS } from "./Actions/action-types";

const initianState = {
  recipes: [],
  dietTypes: [],
};

//funcion q recibe al estado global y la action (donde yo le indico lo que tine que hacer)

//hago destructuring de la action
const rootReducer = (state = initianState, { type, payload }) => {
  switch (type) {
    case GET_RECIPES:
      return {
        ...state,
        recipes: payload,
      };

    case GET_DIETS:
      return {
        ...state,
        dietTypes: payload,
      };

    default:
      return { ...state };
  }
};

export default rootReducer;
