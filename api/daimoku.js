import { kv } from "@vercel/kv";

const DAIMOKU_KEY = "daimoku-salerno-2026";

const getDaimoku = async () => {
  try {
    return (await kv.get(DAIMOKU_KEY)) || 0;
  } catch (error) {
    console.error(error);
    return 0;
  }
};

const addDaimoku = async (daimoku) => {
  try {
    const daimokuParsed = parseInt(daimoku);

    if (isNaN(daimokuParsed)) {
      console.error("Daimoku NaN");
      return await getDaimoku();
    }

    return await kv.incrby(DAIMOKU_KEY, daimoku);
  } catch (error) {
    console.error(error);
    return await getDaimoku();
  }
};

export default async function handler(request, response) {
  try {
    if (request.method === "GET") {
      const daimoku = await getDaimoku();
      return response.status(200).json({ daimoku });
    }

    const bodyParsed = JSON.parse(request.body);
    const newDaimoku = await addDaimoku(bodyParsed.daimoku);

    return response.status(200).json({ daimoku: newDaimoku });
  } catch (error) {
    console.log(error);
    return response.status(500).json({ error: "Qualcosa e' andato storto" });
  }
}
