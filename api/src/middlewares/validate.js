const validate = (req, res, next) => {
  const { name, image, summary, healthScore, steps, Diets } = req.body;
  if (!name) return res.status(400).json({ error: "missing name" });
  if (!image) return res.status(400).json({ error: "missing image" });
  if (!summary) return res.status(400).json({ error: "missing summary" });
  if (!healthScore)
    return res.status(400).json({ error: "missing healthsocre" });
  if (!steps) return res.status(400).json({ error: "missing steps" });
  if (Diets.length < 1) return res.status(400).json({ error: "missing diets" });
  next();
  //pasarla a una carpeta que se llame middelwares
};

module.exports = validate;
