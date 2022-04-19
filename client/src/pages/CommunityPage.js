import classes from "./CommunityPage.module.css";
import React, { Fragment, useEffect, useState } from "react";
import { fetchComments, postComments } from "../store/CommentsSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Background from "../components/Background";
import Comment from "../components/Comment";
import InputField from "../components/InputField";
import Header from "../components/Header";
import Footer from "../components/Footer";

const CommunityPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const comments = useSelector((state) => state.comments.comments);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const username = useSelector((state) => state.auth.username);
  const [post, setPost] = useState("");
  const [postError, setPostError] = useState(null);

  const postChangeHandler = ({ target }) => {
    const postData = target.value;
    if (postData.length < 3) {
      setPostError("Please enter valid comment!");
    } else {
      setPostError(null);
    }
    setPost(postData);
  };

  const postSubmitHandler = (event) => {
    event.preventDefault();
    if (postError || post === "") {
      setPostError("Please enter valid comment!");
      return;
    }
    const data = {
      id: comments.length + 1,
      username,
      comment: post,
      date: new Date().toLocaleDateString("en-US"),
    };
    dispatch(postComments(data));
    setPost("");
  };

  const formRedirectHandler = () => {
    navigate("/auth");
  };

  useEffect(() => {
    dispatch(fetchComments());
  }, [dispatch]);

  return (
    <Fragment>
      <Header />
      <Background title="Community">
        <p className={classes.details}>
          For any suggestions, questions you can post your comment in the
          dedicated community section below. Developers and reviewers will try
          to satisfy you as earliest as possible.
        </p>
        <h3>Post </h3>
        <div className={classes.commentForm}>
          {isAuthenticated && (
            <form onSubmit={postSubmitHandler}>
              <InputField
                id="post"
                label="Post Comment"
                value={post}
                changeHandler={postChangeHandler}
                error={postError}
              />
              <InputField type="submit" value="Post Comment" />
            </form>
          )}
          {!isAuthenticated && (
            <form onSubmit={formRedirectHandler}>
              <label>Please Login/Sign-Up to post comments</label>
              <InputField type="submit" value="Login/Sign-Up" />
            </form>
          )}
        </div>
        <h3>Comments</h3>
        <div className={classes.commentConainer}>
          {comments.map((comment) => {
            return (
              <Comment
                key={comment.id}
                comment={comment.comment}
                date={comment.date}
                username={comment.username}
              />
            );
          })}
        </div>
      </Background>
      <Footer />
    </Fragment>
  );
};

export default CommunityPage;
