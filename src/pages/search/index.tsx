import React, { useEffect, useState } from "react";
import "./search.scss";
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import CardNews from "../../components/card-news";
import queryString from "query-string";
import { getAPI } from "../../services/get-api";
import { NewsItem } from "../../types/articles";
import Loading from "../loading";

function SearchPage() {
  const { keyword } = queryString.parse(window.location.search);
  const [data, setData] = useState<any>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function fetchAPI() {
      const res = await getAPI();
      let datas = [];
      for (let items of res?.result?.categories) {
        for (let itemed of items?.templates) {
          for (let itm of itemed?.sections[0]?.articles) {
            datas.push(itm);
          }
        }
      }
      setData(datas);
      setLoading(false);
    }
    fetchAPI();
  }, []);

  const filteredData = data
    .slice(0, data?.length)
    .filter((item: NewsItem) =>
      item?.title?.toLowerCase().match(keyword!.toString().toLowerCase())
    );

  return (
    <React.Fragment>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Navbar />
          <div className="search_container">
            <p className="title_search">Hasil Pencarian dari "{keyword}"</p>
            <div
              className="wrapper_list"
              style={{
                justifyContent:
                  Number(filteredData.length) % 4 === 0
                    ? "space-between"
                    : "flex-start",
              }}
            >
              {filteredData.map((item: NewsItem, index: number) => (
                <CardNews
                  data={item}
                  margined={
                    Number(filteredData.length) % 4 === 0
                      ? 0
                      : (index + 1) % 4 === 0
                      ? 0
                      : "1.75%"
                  }
                />
              ))}
            </div>
          </div>
          <Footer />
        </>
      )}
    </React.Fragment>
  );
}

export default SearchPage;
