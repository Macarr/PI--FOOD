const { Router } = require("express");
const getRecipesById = require("../handlers/getRecipesById");
const getRecipesByName = require("../handlers/getRecipesByName");
const postRecipes = require("../handlers/postRecipes");
const validate = require("../middlewares/validate");

const recipesRouter = Router();
// modularizo las rutas, y requiero las funciones handlers de cada una

recipesRouter.get("/:id", getRecipesById);

recipesRouter.get("/", getRecipesByName);

recipesRouter.post("/", validate, postRecipes);

module.exports = recipesRouter;
