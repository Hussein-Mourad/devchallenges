function getRandomObject(obj) {
  if (obj) {
    const keys = Object.keys(obj);
    return obj[keys[(keys.length * Math.random()) << 0]];
  }
  return "";
}

export default getRandomObject;
