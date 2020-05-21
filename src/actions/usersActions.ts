import { User } from '../types';
import { action } from 'typesafe-actions';
import * as types from './actionTypes';

export const resetUser = () => action(types.USER.RESET);

export const setUsername = (payload: string) => action(types.USER.SET_USERNAME, payload);

export const saveUser = (payload: User) => action(types.USER.SAVE, payload);

export const clearUsers = () => action(types.USER.CLEAR_USERS);
