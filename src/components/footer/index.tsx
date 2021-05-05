import React from "react";
import "./footer.scss";

function Footer() {
  return (
    <React.Fragment>
      <div className="parent_footer">
        <p
          onClick={() => {
            window.open("https://today.line.me/id/v2/service/terms", "_blank");
          }}
        >
          Term of Use
        </p>
        <p
          onClick={() => {
            window.open(
              "https://today.line.me/id/v2/service/privacy",
              "_blank"
            );
          }}
        >
          Privacy Policy
        </p>
        <p
          onClick={() => {
            window.open(
              "https://today.line.me/id/v2/service/disclaimer",
              "_blank"
            );
          }}
        >
          Disclaimer
        </p>
      </div>
    </React.Fragment>
  );
}
export default Footer;
