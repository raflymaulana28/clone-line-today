import Axios from "axios";

export const getAPI = async () => {
  const res = await Axios.get(`https://today.line.me/id/portaljson`);
  return res?.data;
};

export const getDetailArticle = async (id: string) => {
  const res = await Axios.get(
    `https://today.line.me/api/v6/pages/id/articles/setting?hash=${id}`
  );
  return res?.data;
};
