const saveDiets = require("../controllers/dietsController");

const getDiets = async (req, res) => {
  try {
    const diets = await saveDiets();
    res.status(200).json(diets);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = getDiets;
