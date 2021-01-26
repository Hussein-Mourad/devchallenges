function generateChoices(obj, correctChoice) {
  if (obj) {
    const keys = Object.keys(obj);
    var elem1, elem2, elem3;
    do {
      elem1 = obj[keys[(keys.length * Math.random()) << 0]];
      elem2 = obj[keys[(keys.length * Math.random()) << 0]];
      elem3 = obj[keys[(keys.length * Math.random()) << 0]];
      console.log(elem1, elem2, elem3);
    } while (elem1 === elem2 || elem1 === elem3 || elem2 === elem3);

    return [
      { text: correctChoice, correct: true },
      { text: elem1.name, correct: false },
      { text: elem2.name, correct: false },
      { text: elem3.name, correct: false },
    ];
  }
  return "";
}

export default generateChoices;
