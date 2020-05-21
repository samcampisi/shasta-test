'use strict';
import { USER } from '../actions/actionTypes';

const initialState = {
  user: null,
  username: null,
  users: [],
};

export default function usersReducer(state = initialState, action: any = {}) {
  switch (action.type) {
    case USER.FETCH_SUCCESS:
      return { ...state, user: action.payload };
    case USER.SET_USERNAME:
      return { ...state, username: action.payload };
    case USER.RESET:
      return { ...state, username: null };
    case USER.CLEAR_USERS:
      return { ...state, users: [] };
    case USER.SAVE: {
      const users = new Array(state.users);
      users.push(action.payload);
      return { ...state, users };
    }
    default:
      return state;
  }
}
