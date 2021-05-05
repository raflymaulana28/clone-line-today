import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { BannerProps } from "../../types/articles";
import "./banner-carousels.scss";
function BannerCarousels(props: BannerProps) {
  const { data } = props;
  const [indexed, setIndexed] = useState<any>(0);
  const history = useHistory();
  useEffect(() => {
    if (indexed + 1 < data.length) {
      setTimeout(() => {
        setIndexed(indexed + 1);
      }, 3000);
    } else if (indexed + 1 === data.length) {
      setTimeout(() => {
        setIndexed(0);
      }, 3000);
    }
  }, [indexed, data?.length]);
  return (
    <React.Fragment>
      <div>
        <div
          onClick={() => history.push(`/news/${data[indexed].url?.hash}`)}
          id="bg-banners"
          style={{
            background: `url(${
              data[indexed]?.thumbnail?.hash
                ? "https://obs.line-scdn.net/" + data[indexed]?.thumbnail?.hash
                : "https://fh.unisba.ac.id/wp-content/uploads/woocommerce-placeholder.png"
            }) center no-repeat`,
            height: 300,
            width: "100%",
            borderRadius: 24,
            cursor: "pointer",
            transition: "all 0.5s ease-in-out",
          }}
        >
          <div className="parent_contents">
            <div>
              <p>{data[indexed].title}</p>
              <span>{data[indexed].publisher}</span>
              <div className="parent_indicators">
                {data?.map((_item, index) => (
                  <div
                    className={`dots_indicator ${
                      index === indexed && "active"
                    }`}
                    onClick={() => setIndexed(index)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="parents_arrow">
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
              if (indexed + 1 < data.length) {
                setIndexed(indexed + 1);
              } else if (indexed + 1 === data.length) {
                setIndexed(0);
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
    </React.Fragment>
  );
}
export default BannerCarousels;
