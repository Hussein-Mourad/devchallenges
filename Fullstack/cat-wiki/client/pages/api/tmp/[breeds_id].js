// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import axios from "axios";

export default async function helloAPI(req, res) {
  try {
    const result = await axios.get(
      "https://api.thecatapi.com/v1/images/search",
      {
        headers: {
          "x-api-key": process.env.API_KEY,
        },
        params: {
          breed_id: req.query.breed_id,
          limit: 11,
        },
      }
    );

    res.json(result.data);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error });
  }
}
