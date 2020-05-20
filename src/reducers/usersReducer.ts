'use strict';
import { USER } from '../actions/actionTypes';

const initialState = {
  user: null,
  username: null,
};

export default function usersReducer(state = initialState, action: any = {}) {
  switch (action.type) {
    case USER.FETCH_SUCCESS:
      return { ...state, user: action.payload };
    case USER.SET_USERNAME:
      return { ...state, username: action.payload };
    case USER.RESET:
      return { ...state, username: null };
    default:
      return state;
  }
}
