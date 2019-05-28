import { SELECT_PROPERTY } from '../actionTypes';

const INITIAL_STATE = {};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case SELECT_PROPERTY: {
      const { key, value } = action.payload;
      return {
        ...state,
        [key]: value,
      };
    }
    default:
      return state;
  }
}
