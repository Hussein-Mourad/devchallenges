// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import axios from "axios";

export default async function helloAPI(req, res) {
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
}
