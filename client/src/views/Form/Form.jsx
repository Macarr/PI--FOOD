// import style from "./Form.module.css";
import { useState } from "react";
import validation from "./Validations";
import style from "./Form.module.css";

import { createRecipe } from "../../redux/Actions/actions";
import { useDispatch, useSelector } from "react-redux";

const Form = () => {
  const dispatch = useDispatch();
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
    dispatch(createRecipe(recipeData));
    setRecipeData({
      name: "",
      image: "",
      summary: "",
      healthScore: "",
      steps: "",
      Diets: [],
    });
  };

  return (
    <div className={style.container}>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name"> Name: </label>
          <input
            type="text"
            value={recipeData.name}
            name="name"
            onChange={handleInputChange}
          />
          {errors.name && <span style={{ color: "red" }}>{errors.name}</span>}
        </div>
        <div>
          <label htmlFor="image"> Image: </label>
          <input
            type="text"
            name="image"
            value={recipeData.image}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="summary">Summary: </label>
          <textarea
            type="text"
            value={recipeData.summary}
            name="summary"
            onChange={handleInputChange}
          />
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
        </div>

        <div>
          <label htmlFor="steps">Steps: </label>
          <textarea
            type="text"
            value={recipeData.steps}
            name="steps"
            onChange={handleInputChange}
          />
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
        </fieldset>
        <button type="submit">CREATE</button>
      </form>
    </div>
  );
};

export default Form;
