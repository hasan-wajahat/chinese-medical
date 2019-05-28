import { SELECT_PROPERTY, CLEAR_PROPERTIES } from './actionTypes';

export const selectProperty = content => ({
  type: SELECT_PROPERTY,
  payload: content,
});

export const clearProperties = () => ({
  type: CLEAR_PROPERTIES,
});
