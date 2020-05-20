import Button from '../../components/Button';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { render, fireEvent } from 'react-native-testing-library';

Enzyme.configure({ adapter: new Adapter() });

const createTestProps = (props?: object) => ({
  ...props,
});

describe('Button', () => {
  const props: any = createTestProps({
    onPress: jest.fn(),
    title: 'Test title',
  });

  describe('Basic button', () => {
    const { getByText, toJSON } = render(<Button {...props} />);

    it('should render the title', () => {
      expect(getByText('Test title')).toBeDefined();
    });

    it('should match snapshot', () => {
      expect(toJSON()).toMatchSnapshot();
    });
  });

  describe('Button with custom style', () => {
    const { toJSON } = render(<Button {...props} style={{ backgroundColor: 'yellow' }} />);

    it('should match snapshot', () => {
      expect(toJSON()).toMatchSnapshot();
    });
  });

  describe('Button with custom icon', () => {
    const { getByTestId, toJSON } = render(
      <Button
        {...props}
        icon={{ source: 'https://d2ph5fj80uercy.cloudfront.net/06/cat1996.jpg' }}
      />,
    );

    it('should render the title', () => {
      expect(getByTestId('button-icon')).toBeDefined();
    });

    it('should match snapshot', () => {
      expect(toJSON()).toMatchSnapshot();
    });
  });

  describe('Disabled', () => {
    const { getByText, toJSON } = render(<Button {...props} disabled />);

    fireEvent.press(getByText('Test title'));

    it('should match snapshot', () => {
      expect(toJSON()).toMatchSnapshot();
    });
  });
});
