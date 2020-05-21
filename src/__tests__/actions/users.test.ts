import * as types from '../../actions/actionTypes';
import { resetUser, saveUser, clearUsers, setUsername } from '../../actions/usersActions';

test('should resetUser', () => {
  expect(resetUser()).toMatchObject({
    type: types.USER.RESET,
  });
});

test('should saveUser', () => {
  const payload = {
    name: 'Test',
    lastName: 'User',
    birthdate: new Date('1988-09-30T12:00:00-06:30'),
    profilePicture: undefined,
    country: {
      cca2: 'ES',
      region: 'Europe',
      subregion: 'Southern Europe',
      name: 'Spain',
      currency: ['EUR'],
      callingCode: ['34'],
      flag: 'flag-es',
    },
  };
  expect(saveUser(payload)).toMatchObject({
    type: types.USER.SAVE,
    payload,
  });
});

test('should clearUsers', () => {
  expect(clearUsers()).toMatchObject({
    type: types.USER.CLEAR_USERS,
  });
});

test('should setUsername', () => {
  const payload = 'testuser';
  expect(setUsername(payload)).toMatchObject({
    type: types.USER.SET_USERNAME,
    payload,
  });
});
