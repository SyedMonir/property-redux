import axios from 'axios';
import { POST_FAILURE, POST_ITEM, POST_SUCCESS } from './propertyConstant';

export const postAllItems = () => async (dispatch) => {
  dispatch({ type: POST_ITEM });
  try {
    const res = await axios.post(`https://jsonplaceholder.typicode.com/posts`);
    console.log(res.data);
    dispatch({ type: POST_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: POST_FAILURE, payload: error.data });
  }
};
