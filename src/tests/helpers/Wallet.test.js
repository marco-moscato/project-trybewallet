import { screen } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom';
import Wallet from '../../pages/Wallet';
import { renderWithRouterAndRedux } from './renderWith';

describe('', () => {
  describe('Test functionalities of Wallet page', () => {
    test('Test if is rendered an e-mail and password input', () => {
      renderWithRouterAndRedux(<Wallet />);

      const value = screen.getByTestId('value-input');
      expect(value).toBeDefined();

      const description = screen.getByTestId('description-input');
      expect(description).toBeDefined();

      const currency = screen.getByTestId('currency-input');
      expect(currency).toBeDefined();

      const method = screen.getByTestId('method-input');
      expect(method).toBeDefined();

      const tag = screen.getByTestId('tag-input');
      expect(tag).toBeDefined();
    });
  });
});
