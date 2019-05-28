import { SELECT_PROPERTY } from './actionTypes';

export const selectProperty = content => ({
  type: SELECT_PROPERTY,
  payload: content,
});
