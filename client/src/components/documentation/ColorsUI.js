import React from "react";
import classes from "./Users.module.css";
import ColorPageSmall from "../../assets/ColorPageSmall.png";
import { url } from "../../assets/url";

const ColorsUI = () => {
  return (
    <div className={classes.container}>
      <p>How to use?</p>
      <div className={classes.code}>
        <div className={classes.input}>
          <p>
            To get Color Data on web browser <br />
            itself instead of JSON Data from request{"-->"}
          </p>
          <p>
            Request URL {"-->"}
            <a
              href="https://kick-api.herokuapp.com/api/colorpage/sky%20blue"
              target="_blank"
              rel="noreferrer"
            >{` ${url}api/colorpage/sky blue`}</a>
          </p>
          <p>Request Method {"-->"} GET</p>
          <p>Header Data {"-->"} None</p>
        </div>
        <div className={classes.output}>
          <p>Response HTML {"-->"}</p>
          <img src={ColorPageSmall} alt="Color Page" />
        </div>
      </div>
    </div>
  );
};

export default ColorsUI;
