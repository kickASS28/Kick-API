import React from "react";
import classes from "./Comment.module.css";
const Comment = ({ username, date, comment }) => {
  return (
    <div className={classes.commentContainer}>
      <p className={classes.comment}>{comment}</p>
      <div className={classes.commentDetails}>
        <span className={classes.date}>{date}</span>
        <span className={classes.username}>- {username}</span>
      </div>
    </div>
  );
};

export default Comment;
