import {
  GET_RECIPES,
  GET_DIETS,
  GET_DETAILRECIPE,
  GET_RECIPESBYNAME,
  CLEAN_DETAIL,
  SORT_BYNAME,
  SORT_BYHEALTHSCORE,
  FILTER_DIET,
  CLEAN_RECIPES,
  FILTER_CREATE,
} from "./Actions/action-types";

const initialState = {
  recipes: [],
  recipesModified: [],
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
        recipesModified: payload,
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
        recipesModified: payload,
      };

    case CLEAN_DETAIL:
      return {
        ...state,
        recipesDetail: [],
      };

    case CLEAN_RECIPES:
      return {
        ...state,
        recipes: [],
      };

    case SORT_BYNAME:
      const sorted = [...state.recipes];

      if (payload === "A to Z")
        sorted.sort((a, b) => {
          if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
          if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
          return 0;
        });
      else
        sorted.sort((a, b) => {
          if (a.name.toLowerCase() < b.name.toLowerCase()) return 1;
          if (a.name.toLowerCase() > b.name.toLowerCase()) return -1;
          return 0;
        });
      return {
        ...state,
        recipesModified: sorted,
      };

    case SORT_BYHEALTHSCORE:
      const sortHealth = [...state.recipes];
      if (payload === "1 to 100")
        sortHealth.sort((a, b) => {
          if (a.healthScore > b.healthScore) return 1;
          if (a.healthScore < b.healthScore) return -1;
          return 0;
        });
      else
        sortHealth.sort((a, b) => {
          if (a.healthScore < b.healthScore) return 1;
          if (a.healthScore > b.healthScore) return -1;
          return 0;
        });
      return {
        ...state,
        recipesModified: sortHealth,
      };

    case FILTER_DIET:
      const recipes = state.recipes;
      const filteredRecipes =
        payload === "All"
          ? recipes
          : recipes.filter((r) => r.Diets.includes(payload));

      return {
        ...state,
        recipesModified: filteredRecipes,
      };

    case FILTER_CREATE:
      const all = [...state.recipes];
      const created =
        payload === "created"
          ? all.filter((r) => r.created === true)
          : all.filter((r) => r.created === false);

      return {
        ...state,
        recipesModied: created,
      };

    default:
      return { ...state };
  }
};

export default rootReducer;
