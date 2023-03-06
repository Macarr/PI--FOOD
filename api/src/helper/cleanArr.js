const cleanArr = (arr) => {
  return arr.data.results.map((elem) => {
    return {
      id: elem.id,
      name: elem.title,
      image: elem.image,
      summary: elem.summary,
      healthScore: elem.healthScore,
      steps: elem.analyzedInstructions[0]?.steps.map((e) => {
        return {
          number: e.number,
          step: e.step,
        };
      }),
      diets: elem.diets,
      created: false,
    };
  });
};
module.exports = cleanArr;
