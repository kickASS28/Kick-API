import React, { useEffect, useState } from "react";
import classes from "./Users.module.css";
import axios from "axios";
import { url } from "../../assets/url";

const Colors = () => {
  const [colors, setColors] = useState("[]");
  const [singleColor, setSingleColor] = useState();

  useEffect(() => {
    const fetchColors = async () => {
      const response = await axios.get("/api/colors");
      const data = await JSON.stringify(response.data, null, 2);
      setColors(data);
    };
    fetchColors();
  });

  useEffect(() => {
    const fetchSingleColor = async () => {
      const response = await axios.get("/api/colors/blue");
      const data = await JSON.stringify(response.data, null, 2);
      setSingleColor(data);
    };
    fetchSingleColor();
  });

  return (
    <div className={classes.container}>
      <p>How to use?</p>
      <div className={classes.code}>
        <div className={classes.input}>
          <p>A) Get all available colors data {"-->"}</p>
          <p>
            Request URL {"-->"}
            <a
              href="https://kick-api.herokuapp.com/api/colors"
              target="_blank"
              rel="noreferrer"
            >{` ${url}api/colors`}</a>
          </p>
          <p>Request Method {"-->"} GET</p>
          <p>Header Data {"-->"} None</p>
        </div>
        <div className={classes.output}>
          <p>Response Data {"-->"}</p>
          <pre>{colors}</pre>
        </div>
      </div>
      <div className={classes.code}>
        <div className={classes.input}>
          <p>B) Get data for single color with name {"-->"}</p>
          <p>
            Request URL {"-->"}
            <a
              href="https://kick-api.herokuapp.com/api/colors/blue"
              target="_blank"
              rel="noreferrer"
            >{` ${url}api/colors/blue`}</a>
          </p>
          <p>Request Method {"-->"} GET</p>
          <p>Header Data {"-->"} None</p>
        </div>
        <div className={classes.output}>
          <p>Response Data {"-->"}</p>
          <pre>{singleColor}</pre>
        </div>
      </div>
    </div>
  );
};

export default Colors;
