const validate = (req, res, next) => {
  const { name, image, summary, healthScore, steps } = req.body;
  if (!name) return res.status(400).json({ error: "missing name" });
  if (!image) return res.status(400).json({ error: "missing image" });
  if (!summary) return res.status(400).json({ error: "missing summary" });
  if (!healthScore)
    return res.status(400).json({ error: "missing healthsocre" });
  if (!steps) return res.status(400).json({ error: "missing steps" });
  next();
  //pasarla a una carpeta que se llame middelwares
};

module.exports = validate;
