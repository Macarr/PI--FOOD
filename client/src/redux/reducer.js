import {
  GET_RECIPES,
  GET_DIETS,
  GET_DETAILRECIPE,
  GET_RECIPESBYNAME,
  CLEAN_DETAIL,
} from "./Actions/action-types";

const initialState = {
  recipes: [],
  dietTypes: [],
  recipesDetail: [],
};

//funcion q recibe al estado global y la action (donde yo le indico lo que tine que hacer)

//hago destructuring de la action
const rootReducer = (state = initialState, { type, payload }) => {
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

    case GET_DETAILRECIPE:
      return {
        ...state,
        recipesDetail: payload,
      };

    case GET_RECIPESBYNAME:
      return {
        ...state,
        recipes: payload,
      };

    case CLEAN_DETAIL:
      return {
        ...state,
        recipesDetail: [],
      };
    default:
      return { ...state };
  }
};

export default rootReducer;
