import React, { useEffect, useState } from "react";
import "./home.scss";
import CategoryBar from "../../components/category-bar";
import Navbar from "../../components/navbar";
import BannerCarousels from "../../components/banner-carousels";
import HomeGrid from "../../components/home-grid";
import Footer from "../../components/footer";
import { getAPI } from "../../services/get-api";
import Loading from "../loading";
import { NewsItem } from "../../types/articles";
import SectionList from "../../components/section-list";

function Home() {
  const [data, setData] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [categories, setCategories] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    async function fetchAPI() {
      const gets = await getAPI();
      setCategories(gets?.result?.categoryList);
      setData(gets?.result?.categories);
      setIsLoading(false);
    }
    fetchAPI();
  }, []);

  const handleChangeCategory = (id: number) => {
    const finsCat = categories?.findIndex((item: NewsItem) => item?.id === id);
    setActiveIndex(finsCat);
  };

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div>
          <Navbar />
          <div className="home_container">
            <BannerCarousels
              data={data[0]?.templates[1]?.sections[0]?.articles}
            />
            <CategoryBar
              data={categories}
              activeIndex={activeIndex}
              handleCategory={handleChangeCategory}
            />
            <HomeGrid
              data={data[activeIndex]?.templates[1]?.sections[0]?.articles}
            />
            {data[activeIndex]?.templates
              ?.slice(2, data[activeIndex]?.templates?.length)
              .map(
                (item: any) =>
                  item?.sections[0]?.articles?.length > 0 &&
                  item?.sections[0]?.articles?.filter((att: any) => att.title)
                    .length > 0 && <SectionList item={item} />
              )}
          </div>
          <Footer />
        </div>
      )}
    </>
  );
}
export default Home;
