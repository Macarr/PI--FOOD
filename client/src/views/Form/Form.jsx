import { useState } from "react";
import validation from "./Validations";
import style from "./Form.module.css";
import { useHistory } from "react-router-dom";
import { createRecipe, getRecipes } from "../../redux/Actions/actions";
import { useDispatch, useSelector } from "react-redux";

const Form = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { dietTypes } = useSelector((state) => state);

  const [recipeData, setRecipeData] = useState({
    name: "",
    image: "",
    summary: "",
    healthScore: "",
    steps: "",
    Diets: [],
  });

  const [errors, setErrors] = useState({
    name: "",
    image: "",
    summary: "",
    healthScore: "",
    steps: "",
    Diets: "",
  });

  const handleInputChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;
    setRecipeData({
      ...recipeData,
      [property]: value,
    });

    setErrors(
      validation({
        ...recipeData,
        [property]: value,
      })
    );
  };

  const handleCheckbox = (event) => {
    const dietsChecked = recipeData.Diets;
    const find = dietsChecked.indexOf(event.target.name);

    if (find > 0) {
      dietsChecked.splice(find, 1);
    } else {
      dietsChecked.push(event.target.name);
    }
    setRecipeData({
      ...recipeData,
      Diets: dietsChecked,
    });
    setErrors(
      validation({
        ...recipeData,
        Diets: dietsChecked,
      })
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      errors.name ||
      errors.image ||
      errors.summary ||
      errors.healthScore ||
      errors.steps ||
      errors.Diets
    ) {
      alert("Please check the entered values ");
    } else {
      dispatch(createRecipe(recipeData));
      dispatch(getRecipes());
      setRecipeData({
        name: "",
        image: "",
        summary: "",
        healthScore: "",
        steps: "",
        Diets: [],
      });
      history.push("/home");
    }
  };

  return (
    <div className={style.conteiner}>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name"> Name: </label>
          <input
            type="text"
            value={recipeData.name}
            name="name"
            onChange={handleInputChange}
          />
          {errors.name && <span style={{ color: "red" }}> {errors.name}</span>}
        </div>
        <div>
          <label htmlFor="image"> Image: </label>
          <input
            type="text"
            name="image"
            value={recipeData.image}
            onChange={handleInputChange}
          />
          {errors.image && (
            <span style={{ color: "red" }}> {errors.image}</span>
          )}
        </div>
        <div>
          <label htmlFor="summary">Summary: </label>
          <textarea
            type="text"
            value={recipeData.summary}
            name="summary"
            onChange={handleInputChange}
          />
          {errors.summary && (
            <span style={{ color: "red" }}> {errors.summary}</span>
          )}
        </div>
        <div>
          <label htmlFor="healthScore"> Health score: </label>
          <input
            type="number"
            placeholder="0 to 100"
            value={recipeData.healthScore}
            name="healthScore"
            onChange={handleInputChange}
          />
          {errors.healthScore && (
            <span style={{ color: "red" }}> {errors.healthScore}</span>
          )}
        </div>

        <div>
          <label htmlFor="steps">Steps: </label>
          <textarea
            type="text"
            value={recipeData.steps}
            name="steps"
            onChange={handleInputChange}
          />
          {errors.steps && (
            <span style={{ color: "red" }}> {errors.steps}</span>
          )}
        </div>

        <fieldset>
          <legend>Type of Diets:</legend>

          {dietTypes.map((e) => {
            return (
              <label htmlFor={e} key={e}>
                <input type="checkbox" name={e} onChange={handleCheckbox} />
                {e}
              </label>
            );
          })}

          {errors.Diets && (
            <span style={{ color: "red" }}> {errors.Diets}</span>
          )}
        </fieldset>
        <button type="submit">CREATE</button>
      </form>
    </div>
  );
};

export default Form;
