const { Router } = require("express");
const dietsRouter = Router();
const getDiets = require("../handlers/getDiets");

dietsRouter.get("/", getDiets);

module.exports = dietsRouter;
