import Home from '../../containers/Home';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
//import { render } from 'react-native-testing-library';
import { render, cleanup, store } from '../test-utils';

Enzyme.configure({ adapter: new Adapter() });

const createTestProps = (props?: object) => ({
  ...props,
});

jest.mock('../../../node_modules/react-native/Libraries/LayoutAnimation/LayoutAnimation.js');
jest.mock('../../actions/usersActions', () => {
  return {
    fetchUser: jest.fn().mockReturnValue('mock user action'),
  };
});

afterEach(() => {
  cleanup();
  store.clearActions();
});

describe('Home', () => {
  const navigate = jest.fn();
  const props: any = createTestProps({
    navigation: {
      navigate,
    },
  });

  describe('Basic Home', () => {
    const { getByText, toJSON } = render(<Home {...props} />);
    it('should render a welcome', () => {
      expect(getByText(/welcome/i)).toBeDefined();
    });

    it('should match snapshot', () => {
      expect(toJSON()).toMatchSnapshot();
    });
  });
});
