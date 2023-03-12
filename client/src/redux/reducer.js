import {
  GET_RECIPES,
  GET_DIETS,
  GET_DETAILRECIPE,
  GET_RECIPESBYNAME,
  CLEAN_DETAIL,
  SORT_BYNAME,
  SORT_BYHEALTHSCORE,
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

    case SORT_BYNAME:
      const sorted =
        payload === "A to Z"
          ? state.recipes.sort((a, b) => {
              if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
              if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
              return 0;
            })
          : state.recipes.sort((a, b) => {
              if (a.name.toLowerCase() < b.name.toLowerCase()) return 1;
              if (a.name.toLowerCase() > b.name.toLowerCase()) return -1;
              return 0;
            });
      return {
        ...state,
        recipes: sorted,
      };

    case SORT_BYHEALTHSCORE:
      const sortHealth =
        payload === "1 to 100"
          ? state.recipes.sort((a, b) => {
              if (a.healthScore > b.healthScore) return 1;
              if (a.healthScore < b.healthScore) return -1;
              return 0;
            })
          : state.recipes.sort((a, b) => {
              if (a.healthScore < b.healthScore) return 1;
              if (a.healthScore > b.healthScore) return -1;
              return 0;
            });
      return {
        ...state,
        recipes: sortHealth,
      };

    default:
      return { ...state };
  }
};

export default rootReducer;
