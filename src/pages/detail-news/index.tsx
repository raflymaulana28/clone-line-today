import React, { useEffect, useState } from "react";
import "./detail-news.scss";
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import { getDetailArticle } from "../../services/get-api";
import Loading from "../loading";
import moment from "moment";
import "moment/locale/id";
import { useBookmark } from "../../context/bookmark-context";
import { NewsItem } from "../../types/articles";

function DetailNews(props: any) {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState<any>({});
  const [isLoading, setIsLoading] = useState(true);
  const { bookmark, AddBookmark, RemoveBookmark } = useBookmark();
  const filterBookmark = bookmark?.filter(
    (item: NewsItem) => item?.id === data?.id
  );
  const id = props.match.params.id;
  useEffect(() => {
    async function fetchAPI() {
      const res = await getDetailArticle(id);
      setData(res?.data);
      setIsLoading(false);
    }
    fetchAPI();
  }, [id]);

  return (
    <React.Fragment>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Navbar />
          <div className="detail_container">
            <p className="title_detail">{data?.title}</p>
            <div className="parent_header">
              <div className="header_detail">
                <img
                  src={
                    data?.publisherIcon?.hash
                      ? "https://obs.line-scdn.net/" + data?.publisherIcon?.hash
                      : "https://ronaldo.com/wp-content/uploads/2019/12/GettyImages-1189400675.jpg"
                  }
                  alt="avatars"
                />
                <div>
                  <p>{data?.publisher}</p>
                  <div className="div_whois">
                    <p>
                      {moment(data?.publishTime, "hh.mm, DD/MM/YYYY")
                        .lang("id")
                        .fromNow()}
                    </p>{" "}
                    · <p style={{ marginLeft: 8 }}>{data?.author}</p>
                  </div>
                </div>
              </div>
              <div className="cta_detail">
                <img
                  onClick={() => {
                    if (filterBookmark?.length < 1) {
                      AddBookmark(data);
                    } else {
                      RemoveBookmark(data);
                    }
                  }}
                  src={
                    filterBookmark?.length < 1
                      ? "/assets/bookmark-icon.svg"
                      : "/assets/bookmark-active.svg"
                  }
                  alt="bookmark"
                />
                <img
                  onClick={() => {
                    setIsOpen(!isOpen);
                  }}
                  src="/assets/share_icon.svg"
                  alt="share"
                />
              </div>
            </div>
            {isOpen && (
              <div className="parent_popup">
                <div className="box_share">
                  <p
                    onClick={() => {
                      navigator.clipboard.writeText(window.location.toString());
                      alert("Berhasil Mencopy Link");
                      setIsOpen(false);
                    }}
                  >
                    Salin Link
                  </p>
                  <p
                    onClick={() => {
                      window.open(
                        `https://www.facebook.com/sharer/sharer.php?u=${window.location}`,
                        "_blank"
                      );
                    }}
                  >
                    Bagikan di Facebook
                  </p>
                  <p
                    onClick={() => {
                      window.open(
                        `http://www.twitter.com/share?url=${window.location}`,
                        "_blank"
                      );
                    }}
                  >
                    Bagikan di Twitter
                  </p>
                </div>
              </div>
            )}
            <div className="content_section">
              <div
                dangerouslySetInnerHTML={{
                  __html: data?.content || "-",
                }}
              />
            </div>
          </div>
          <Footer />
        </>
      )}
    </React.Fragment>
  );
}

export default DetailNews;
