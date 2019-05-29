import { SELECT_PROPERTY, CLEAR_PROPERTIES } from '../actionTypes';

const INITIAL_STATE = {
  answers: {},
  answeredTabs: [],
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case SELECT_PROPERTY: {
      const { key, value, tabValue } = action.payload;
      return {
        ...state,
        answers: {
          ...state.answers,
          [key]: value,
        },
        answeredTabs: [
          ...state.answeredTabs,
          tabValue,
        ],
      };
    }
    case CLEAR_PROPERTIES: {
      return INITIAL_STATE;
    }
    default:
      return state;
  }
}
