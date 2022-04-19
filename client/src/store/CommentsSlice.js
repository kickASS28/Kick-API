import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialCommentsState = { comments: [], isLoading: false, error: null };

const commentsSlice = createSlice({
  name: "comments",
  initialState: initialCommentsState,
  reducers: {
    load: (state) => {
      state.isLoading = true;
    },
    setComments: (state, action) => {
      state.isLoading = false;
      state.comments = action.payload;
    },
    add: (state, action) => {
      state.comments.push(action.payload);
    },
    edit: (state, action) => {
      const commentIndex = state.comments.findIndex(
        (comment) => comment.id === action.payload.id
      );
      const updatedComment = {
        ...state.comments[commentIndex],
        ...action.payload.data,
      };
      state.comments[commentIndex] = updatedComment;
    },
    setError: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { load, add, edit, setComments, setError } = commentsSlice.actions;
export default commentsSlice;

// Asynchronous thunk action for fetching comments
export function fetchComments() {
  return async (dispatch) => {
    dispatch(load());
    try {
      const response = await axios.get("/comments");
      const data = await response.data;
      dispatch(setComments(data));
    } catch (error) {
      dispatch(setError(error.message));
    }
  };
}

// Asynchronous thunk action fr posting a comment
export function postComments(Postdata) {
  return async (dispatch) => {
    dispatch(load());
    try {
      await axios.post("/comments", Postdata);
      dispatch(add(Postdata));
    } catch (error) {
      dispatch(setError(error.message));
    }
  };
}
