import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';

test('renders learn react link', () =>{
  const tree =render(<App />);
  expect(tree.baseElement).toMatchSnapshot();
});