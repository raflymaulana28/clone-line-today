import React, { useEffect, useState } from "react";
import { CategoryProps } from "../../types/categories";
import "./category-bar.scss";

function CategoryBar(props: CategoryProps) {
  const { data, activeIndex, handleCategory } = props;
  const [widthParent, setWidthParent] = useState<number>(0);
  const [indexed, setIndexed] = useState<number>(0);

  useEffect(() => {
    const widthParents = document.getElementById("category_container")
      ?.offsetWidth;
    setWidthParent(Number(widthParents));
  }, []);

  return (
    <div id="category_container" className="parent_category_bar">
      <div className="div_arr_cat">
        <p>Pilih Kategori Favoritmu</p>
        <div className="parent_arrow">
          <button
            onClick={() => {
              if (indexed <= 0) {
                setIndexed(0);
              } else {
                setIndexed(indexed - 1);
              }
            }}
            className="btn_prev"
          >
            <img
              src="https://assets.tokopedia.net/assets-tokopedia-lite/v2/zeus/kratos/f1c105ab.svg"
              alt="prev-con"
            />
          </button>
          <button
            onClick={() => {
              if (indexed < Math.round(data.length / 10)) {
                setIndexed(indexed + 1);
              }
            }}
            className="btn_next"
          >
            <img
              src="https://assets.tokopedia.net/assets-tokopedia-lite/v2/zeus/kratos/5d231550.svg"
              alt="next-con"
            />
          </button>
        </div>
      </div>
      <div id="category_bar" className="wrapper_category_bar">
        <div
          style={{
            marginLeft:
              indexed !== 0 ? indexed * -widthParent - indexed * 8 : 0,
            transition: "all 0.5s ease-in-out",
          }}
        />
        {data?.map((item, index) => (
          <div
            key={index}
            onClick={() => {
              handleCategory(item?.id);
            }}
            className={`list_category ${index === activeIndex && "active"}`}
          >
            <p>{item?.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
export default CategoryBar;
