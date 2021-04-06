const axios = require("axios");

module.exports.getBreeds = async (req, res, next) => {
  try {
    const result = await axios.get("https://api.thecatapi.com/v1/breeds", {
      headers: {
        "x-api-key": process.env.API_KEY,
      },
    });

    const data = await result.data.filter((obj) => {
      return obj && obj.image && Object.keys(obj.image).length !== 0;
    });
    res.json(data);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error });
  }
};
module.exports.getBreedsNames = async (req, res, next) => {
  try {
    const result = await axios.get("https://api.thecatapi.com/v1/breeds", {
      headers: {
        "x-api-key": process.env.API_KEY,
      },
    });

    var breeds = [];
    await result.data.forEach((obj) => {
      breeds.push(obj.name);
    });
    res.json(breeds);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error });
  }
};
module.exports.getBreedById = async (req, res, next) => {
  try {
    const result = await axios.get(
      "https://api.thecatapi.com/v1/images/search",
      {
        headers: {
          "x-api-key": process.env.API_KEY,
        },
        params: {
          breed_id: req.params.id,
          limit: 11,
        },
      }
    );

    res.json(result.data);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error });
  }
};
