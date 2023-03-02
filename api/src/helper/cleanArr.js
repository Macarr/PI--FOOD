const cleanArr = (arr) => {
  return arr.data.results.map((elem) => {
    return {
      id: elem.id,
      name: elem.title,
      image: elem.image,
      sumary: elem.sumary,
      healthScore: elem.healthScore,
      steps: elem.analyzedInstructions[0]?.steps.map((e) => {
        return {
          number: e.number,
          step: e.step,
        };
      }),
    };
  });
};
module.exports = cleanArr;
