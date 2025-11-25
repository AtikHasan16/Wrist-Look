import axios from "axios";

export const getWatchById = async (id) => {
  const res = await axios.get(`http://localhost:2000/watches/${id}`);
  return res.data;
};
