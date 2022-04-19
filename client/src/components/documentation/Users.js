import React, { useEffect, useState } from "react";
import classes from "./Users.module.css";
import axios from "axios";
import { url } from "../../assets/url";

const Users = () => {
  const [users, setUsers] = useState("[]");
  const [singleUser, setSingleUser] = useState();

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await axios.get("/api/users");
      const user = await JSON.stringify(response.data[0], null, 2);
      const data = await JSON.stringify(response.data, null, 2);
      setUsers(data);
      setSingleUser(user);
    };
    fetchUsers();
  });

  return (
    <div className={classes.container}>
      <p>How to use?</p>
      <div className={classes.code}>
        <div className={classes.input}>
          <p>A) Get all available users data {"-->"}</p>
          <p>
            Request URL {"-->"}
            <a
              href="https://kick-api.herokuapp.com/api/users"
              target="_blank"
              rel="noreferrer"
            >{` ${url}api/users`}</a>
          </p>
          <p>Request Method {"-->"} GET</p>
          <p>Header Data {"-->"} None</p>
        </div>
        <div className={classes.output}>
          <p>Response Data {"-->"}</p>
          <pre>{users}</pre>
        </div>
      </div>
      <div className={classes.code}>
        <div className={classes.input}>
          <p>B) Get data for single user with id {"-->"}</p>
          <p>
            Request URL {"-->"}
            <a
              href="https://kick-api.herokuapp.com/api/users/1"
              target="_blank"
              rel="noreferrer"
            >{` ${url}api/users/1`}</a>
          </p>
          <p>Request Method {"-->"} GET</p>
          <p>Header Data {"-->"} None</p>
        </div>
        <div className={classes.output}>
          <p>Response Data {"-->"}</p>
          <pre>{singleUser}</pre>
        </div>
      </div>
    </div>
  );
};

export default Users;
