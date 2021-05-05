import React, { useState } from "react";
import { SectionListProps } from "../../types/articles";
import CardNews from "../card-news";

function SectionList(props: SectionListProps) {
  const { item } = props;
  const [showed, setShowed] = useState(8);
  return (
    <>
      <div className="main_section">
        <div className="wrapper_headers">
          <p>{item?.title ? item.title : "Menarik"}</p>
          {item?.sections[0]?.articles?.length > 8 && (
            <span
              onClick={() => {
                if (showed < item?.sections[0]?.articles?.length) {
                  setShowed(item?.sections[0]?.articles?.length);
                } else if (showed === item?.sections[0]?.articles?.length) {
                  setShowed(8);
                }
              }}
            >
              {showed < item?.sections[0]?.articles?.length
                ? "Lihat Semua"
                : "Lihat Sedikit"}
            </span>
          )}
        </div>
        <div
          className="wrapper_list"
          style={{
            justifyContent:
              Number(item?.sections[0]?.articles?.length) % 4 === 0
                ? "space-between"
                : "flex-start",
          }}
        >
          {item?.sections[0]?.articles
            ?.slice(0, showed)
            .map((items: any, index: number) => (
              <CardNews
                data={items}
                margined={
                  Number(item?.sections[0]?.articles?.length) % 4 === 0
                    ? 0
                    : (index + 1) % 4 === 0
                    ? 0
                    : "1.75%"
                }
              />
            ))}
        </div>
      </div>
    </>
  );
}
export default SectionList;
