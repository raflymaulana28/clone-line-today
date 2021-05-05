import React from "react";
import { useHistory } from "react-router";
import { useBookmark } from "../../context/bookmark-context";
import { CardNewsProps, NewsItem } from "../../types/articles";
import "./card-news.scss";

function CardNews(props: CardNewsProps) {
  const { data, margined } = props;
  const history = useHistory();
  const { bookmark } = useBookmark();
  const filterBookmark = bookmark?.filter(
    (item: NewsItem) => Number(item?.id) === Number(data?.id)
  );
  return (
    <React.Fragment>
      <div
        onClick={() => {
          history.push(`/news/${data?.url?.hash}`);
        }}
        className="card-news"
        style={{ marginRight: margined }}
      >
        <img
          src={
            data?.thumbnail?.hash
              ? "https://obs.line-scdn.net/" + data?.thumbnail?.hash
              : "https://fh.unisba.ac.id/wp-content/uploads/woocommerce-placeholder.png"
          }
          alt="img-news-big"
        />
        <div className="content_card">
          <div>
            <h1>
              {data?.title?.length > 45
                ? data?.title.slice(0, 45) + "..."
                : data?.title}
            </h1>
          </div>
          <div className="div_spanned">
            <span>{data?.publisher}</span>
            <img
              src={
                filterBookmark?.length < 1
                  ? "/assets/bookmark-icon.svg"
                  : "/assets/bookmark-active.svg"
              }
              alt="bookmark"
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default CardNews;
