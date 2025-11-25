import axios from "axios";

export const getAllWatches = async () => {
  const res = await axios.get("http://localhost:2000/watches");
  return res.data;
};
