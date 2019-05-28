import { SELECT_PROPERTY, CLEAR_PROPERTIES } from '../actionTypes';

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
    case CLEAR_PROPERTIES: {
      return {};
    }
    default:
      return state;
  }
}
