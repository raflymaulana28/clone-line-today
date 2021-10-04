import Axios from "axios";

const { REACT_APP_ARTICLE_LIST, REACT_APP_DETAIL_ARTICLE} = process.env

export const getAPI = async () => {
  const res = await Axios.get(REACT_APP_ARTICLE_LIST);
  return res?.data;
};

export const getDetailArticle = async (id: string) => {
  const res = await Axios.get(
    ${REACT_APP_DETAIL_ARTICLE}?hash=${id}`
  );
  return res?.data;
};
