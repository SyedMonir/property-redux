import { POST_FAILURE, POST_ITEM, POST_SUCCESS } from './propertyConstant';

const initialState = {
  isLoading: false,
  items: [],
  error: null,
};

export const itemReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_ITEM:
      return {
        ...state,
        items: action.payload,
        isLoading: true,
      };
    case POST_SUCCESS:
      return {
        isLoading: false,
        items: action.payload,
        error: null,
      };
    case POST_FAILURE:
      return {
        isLoading: false,
        items: [],
        error: action.payload,
      };

    default:
      return state;
  }
};
