// import style from "./Form.module.css";
import { useState } from "react";
import validation from "./Validations";
import axios from "axios";

const Form = () => {
  const [recipeData, setRecipeData] = useState({
    name: "",
    image: "",
    summary: "",
    healthScore: "",
    steps: [],
    diets: [],
  });

  const [errors, setErrors] = useState({
    name: "",
    image: "",
    summary: "",
    healthScore: "",
    steps: "",
    diets: "",
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

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(`http://localhost:3001/pifood/recipes`, recipeData)
      .then((res) => alert(res.data))
      .catch((err) => alert(err));
  };

  return (
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
          type="file"
          name="image"
          accept="image/*"
          value={recipeData.image}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="summary">Summary: </label>
        <input
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
          value={recipeData.healthScore}
          name="healthScore"
          onChange={handleInputChange}
        />
      </div>

      <div>
        <label htmlFor="steps">Steps: </label>
        <input
          type="text"
          value={recipeData.steps}
          name="steps"
          onChange={handleInputChange}
        />
      </div>

      <fieldset>
        <legend>Type of Diets:</legend>
        <div>
          <input type="checkbox" name="gluten free" value={recipeData.diets} />
          <label htmlFor="gluten free">Gluten free</label>
        </div>
        <div>
          <input type="checkbox" name="dairy free" value="dairy free" />
          <label htmlFor="dairy free">Dairy free</label>
        </div>
        <div>
          <input
            type="checkbox"
            name="lacto ovo vegetarian"
            value="lacto ovo vegetarian"
          />
          <label htmlFor="lacto ovo vegetarian">Lacto ovo vegetarian</label>
        </div>
        <div>
          <input type="checkbox" name="vegan" value="vegan" />
          <label htmlFor="vegan">Vegan</label>
        </div>
        <div>
          <input type="checkbox" name="paleolithic" value="paleolithic" />
          <label htmlFor="paleolithic">Paleolithic</label>
        </div>
        <div>
          <input type="checkbox" name="primal" value="primal" />
          <label htmlFor="primal">Primal</label>
        </div>
        <div>
          <input type="checkbox" name="whole 30" value="whole 30" />
          <label htmlFor="whole 30">whole 30</label>
        </div>
        <div>
          <input type="checkbox" name="pescatarian" value="pescatarian" />
          <label htmlFor="pescatarian">Pescatarian</label>
        </div>
        <div>
          <input type="checkbox" name="ketogenic" value="ketogenic" />
          <label htmlFor="ketogenic">Ketogenic</label>
        </div>
        <div>
          <input
            type="checkbox"
            name="fodmap friendly"
            value="fodmap friendly"
          />
          <label htmlFor="fodmap friendly">Fodmap friendly</label>
        </div>
      </fieldset>
      <button type="submit">CREATE</button>
    </form>
  );
};

export default Form;
