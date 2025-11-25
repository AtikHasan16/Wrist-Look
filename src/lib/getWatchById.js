import axios from "axios";

export const getWatchById = async (id) => {
  const res = await axios.get(`https://wristlook-sr.vercel.app/watches/${id}`);
  return res.data;
};
