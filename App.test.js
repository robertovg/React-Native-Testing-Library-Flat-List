import React from 'react';
import { render, fireEvent } from 'react-native-testing-library';
import App from './App';

describe('<App', () => {
  it('Simple snapshot of the App, now loading FlatList, and not render', () => {
    const { toJSON } = render(<App />);
    expect(toJSON()).toMatchSnapshot();
  });
});
