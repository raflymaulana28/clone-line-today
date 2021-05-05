import React from "react";
import { HomeGridProps } from "../../types/articles";
import CardNews from "../card-news";
import "./home-grid.scss";

function HomeGrid(props: HomeGridProps) {
  const { data } = props;
  return (
    <React.Fragment>
      <div className="parents_grid">
        <div className="div_heads">
          <p>Artikel Menarik Untukmu</p>
        </div>
        {/* <div className="grid-one">
          <img
            src={"https://obs.line-scdn.net/" + data[0]?.thumbnail?.hash}
            alt="img-news-big"
          />
          <div className="content_heads">
            <div>
              <h1>{data[0]?.title}</h1>
              <p>{data[0]?.badgeText}</p>
            </div>
            <div className="div_lasted">
              <span>brillio.net</span>
              <img src="./assets/bookmark-icon.svg" alt="bookmark" />
            </div>
          </div>
        </div>
        <CardNews /> */}
        <div
          id="list_grid"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {data?.slice(0, 4).map((item) => (
            <CardNews data={item} />
          ))}
        </div>
      </div>
    </React.Fragment>
  );
}

export default HomeGrid;
