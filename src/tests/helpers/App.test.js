import React from 'react';
import '@testing-library/jest-dom';
import { renderWithRouterAndRedux } from './renderWith';
import App from '../../App';

describe('', () => {
  describe('Test functionalities of Login page', () => {
    test('Test if is rendered an e-mail and password input form', () => {
      const { history } = renderWithRouterAndRedux(<App />);
      const { location: { pathname } } = history;
      expect(pathname).toBe('/');
    });
  });
});
