import React, { useEffect, useState } from "react";
import classes from "./Users.module.css";
import axios from "axios";
import { url } from "../../assets/url";

const Meals = () => {
  const [meals, setMeals] = useState("[]");
  const [singleMeal, setSingleMeals] = useState();

  useEffect(() => {
    const fetchMeals = async () => {
      const response = await axios.get("/api/meals");
      const meal = await JSON.stringify(response.data[0], null, 2);
      const data = await JSON.stringify(response.data, null, 2);
      setMeals(data);
      setSingleMeals(meal);
    };
    fetchMeals();
  });

  return (
    <div className={classes.container}>
      <p>How to use?</p>
      <div className={classes.code}>
        <div className={classes.input}>
          <p>A) Get all available meals data {"-->"}</p>
          <p>
            Request URL {"-->"}
            <a
              href="https://kick-api.herokuapp.com/api/meals"
              target="_blank"
              rel="noreferrer"
            >{` ${url}api/meals`}</a>
          </p>
          <p>Request Method {"-->"} GET</p>
          <p>Header Data {"-->"} None</p>
        </div>
        <div className={classes.output}>
          <p>Response Data {"-->"}</p>
          <pre>{meals}</pre>
        </div>
      </div>
      <div className={classes.code}>
        <div className={classes.input}>
          <p>B) Get data for single meal with id {"-->"}</p>
          <p>
            Request URL {"-->"}
            <a
              href="https://kick-api.herokuapp.com/api/meals/1"
              target="_blank"
              rel="noreferrer"
            >{` ${url}api/meals/1`}</a>
          </p>
          <p>Request Method {"-->"} GET</p>
          <p>Header Data {"-->"} None</p>
        </div>
        <div className={classes.output}>
          <p>Response Data {"-->"}</p>
          <pre>{singleMeal}</pre>
        </div>
      </div>
    </div>
  );
};

export default Meals;
