import { NEW_POST, FETCH_POSTS} from "./types";
import axios from 'axios';

export const fetchPosts = () => dispatch => {
  axios.get('https://jsonplaceholder.typicode.com/posts')
  .then(posts => {
    dispatch({
      type: FETCH_POSTS,
      payload: posts.data
    })
  });
};

export const createPosts = (postData) => dispatch => {
  axios.post('https://jsonplaceholder.typicode.com/posts', {
      title: postData.title,
      body: postData.body
    })
    .then(post =>  dispatch({
        type: NEW_POST,
        payload: post.data
      }));
}