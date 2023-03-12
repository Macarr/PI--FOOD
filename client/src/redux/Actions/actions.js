import axios from "axios";
import {
  GET_RECIPES,
  GET_DETAILRECIPE,
  GET_DIETS,
  GET_RECIPESBYNAME,
  CLEAN_DETAIL,
  SORT_BYHEALTHSCORE,
  SORT_BYNAME,
  FILTER_DIET,
} from "../Actions/action-types";

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

export const getDetailRecipe = (id) => {
  return async (dispatch) => {
    const response = await axios.get(
      `http://localhost:3001/pifood/recipes/${id}`
    );
    const recipe = response.data;
    return dispatch({
      type: GET_DETAILRECIPE,
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

export const getRecipesByName = (name) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `http://localhost:3001/pifood/recipes/?name=${name}`
      );
      const recipes = response.data;
      return dispatch({
        type: GET_RECIPESBYNAME,
        payload: recipes,
      });
    } catch (error) {
      console.log(error);
      alert("No recipes found, please try another");
    }
  };
};

export const cleanDetail = () => {
  return {
    type: CLEAN_DETAIL,
  };
};

export const sortByName = (order) => {
  return {
    type: SORT_BYNAME,
    payload: order,
  };
};

export const sortByHealthScore = (order) => {
  return {
    type: SORT_BYHEALTHSCORE,
    payload: order,
  };
};

export const filterByDiet = (diet) => {
  return {
    type: FILTER_DIET,
    payload: diet,
  };
};
