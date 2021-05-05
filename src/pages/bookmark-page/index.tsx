import React from "react";
import "./bookmark.scss";
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import CardNews from "../../components/card-news";
import { useBookmark } from "../../context/bookmark-context";

function BookmarkPage() {
  const { bookmark } = useBookmark();
  return (
    <React.Fragment>
      <Navbar />
      <div className="search_container">
        <p className="title_bookmark">Berikut adalah bookmark anda:</p>
        <div
          className="wrapper_list"
          style={{
            justifyContent:
              Number(bookmark.length) % 4 === 0
                ? "space-between"
                : "flex-start",
          }}
        >
          {bookmark?.map((item, index) => (
            <CardNews
              data={item}
              margined={
                Number(bookmark.length) % 4 === 0
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
    </React.Fragment>
  );
}

export default BookmarkPage;
