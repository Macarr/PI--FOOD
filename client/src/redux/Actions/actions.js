import axios from "axios";
import { GET_RECIPES, GET_ONERECIPE, GET_DIETS } from "./action-types";

export const getRecipes = () => {
  return async (dispatch) => {
    const response = await axios.get(`http://localhost:3001/pifood/recipes`);
    const recipes = response.data;
    return dispatch({
      type: GET_RECIPES,
      payload: recipes,
    });
  };
};

export const getOneRecipe = (id) => {
  return async (dispatch) => {
    const response = await axios.get(
      `http://localhost:3001/pifood/recipes/${id}`
    );
    const recipe = response.data;
    return dispatch({
      type: GET_ONERECIPE,
      payload: recipe,
    });
  };
};

export const getDiets = () => {
  return async (dispatch) => {
    const response = await axios.get(`http://localhost:3001/pifood/diets`);
    const diets = response.data.map((e) => e.name);
    return dispatch({
      type: GET_DIETS,
      payload: diets,
    });
  };
};
