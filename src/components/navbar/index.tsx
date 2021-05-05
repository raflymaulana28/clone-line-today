import React, { useState } from "react";
import { useHistory, withRouter } from "react-router";
import "./navbar.scss";
import queryString from "query-string";

function Navbar() {
  const history = useHistory();
  const { keyword } = queryString.parse(window.location.search);

  const [keywords, setKeywords] = useState(keyword ? keyword.toString() : "");
  return (
    <div className="parent_navbar">
      <div className="sub_navbar">
        <div className="div_logo">
          <img
            onClick={() => {
              history.push("/");
            }}
            src="/assets/brand-logo-rectangle-today-solid.svg"
            alt="logos"
          />
        </div>
        <div className="div_searchbar">
          <div>
            <input
              value={keywords}
              onChange={(e) => {
                setKeywords(e.target.value);
              }}
              onKeyDown={(e) => {
                if (e.keyCode === 13 && keywords) {
                  history.push(`/search?keyword=${keywords}`);
                }
              }}
              type="text"
              placeholder="Cari Berita Yang Sedang Hangat..."
            />
            <img
              onClick={() => {
                if (keywords) {
                  history.push(`/search?keyword=${keywords}`);
                }
              }}
              src="/assets/search-icon.svg"
              alt="search-icon"
            />
          </div>
        </div>
        <div className="div_authbar">
          <div>
            <button
              onClick={() => {
                history.push("/bookmark");
              }}
              className="btn_register"
            >
              Bookmark
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withRouter(Navbar);
