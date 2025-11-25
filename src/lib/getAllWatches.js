import axios from "axios";

export const getAllWatches = async () => {
  const res = await axios.get("https://wristlook-sr.vercel.app/watches");
  return res.data;
};
