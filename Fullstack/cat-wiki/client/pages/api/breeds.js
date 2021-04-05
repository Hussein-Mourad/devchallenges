// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import axios from "axios";

export default async function helloAPI(req, res) {
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
}
