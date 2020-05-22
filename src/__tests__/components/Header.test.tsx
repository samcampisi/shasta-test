import Header from '../../components/Header';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { render } from 'react-native-testing-library';

Enzyme.configure({ adapter: new Adapter() });

const createTestProps = (props?: object) => ({
  ...props,
});

describe('Header', () => {
  const props: any = createTestProps({
    title: 'Test title',
  });

  describe('Basic button', () => {
    const { getByText, toJSON } = render(<Header {...props} />);

    it('should render the title', () => {
      expect(getByText('Test title')).toBeDefined();
    });

    it('should match snapshot', () => {
      expect(toJSON()).toMatchSnapshot();
    });
  });
});
