const cleanArrDataBase = (elem) => {
  if (elem.length === 0) return elem;
  else {
    return elem.map((r) => {
      return {
        id: r.dataValues.id,
        name: r.dataValues.name,
        image: r.dataValues.image,
        summary: r.dataValues.summary,
        healthScore: r.dataValues.healthScore,
        steps: r.dataValues.steps,

        Diets: r.dataValues.Diets.map((e) => e.dataValues.name),
        created: true,
      };
    });
  }
};

module.exports = cleanArrDataBase;
