import { screen } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom';
import Wallet from '../../pages/Wallet';
import { renderWithRouterAndRedux } from './renderWith';

describe('', () => {
  describe('Test functionalities of Header', () => {
    test('Test if is rendered an e-mail and password input', () => {
      renderWithRouterAndRedux(<Wallet />);

      const email = screen.getByTestId('email-field');
      const totalValue = screen.getByTestId('total-field');
      const currency = screen.getByTestId('header-currency-field');

      expect(email).toBeDefined();
      expect(totalValue).toBeDefined();
      expect(currency).toBeDefined();
    });
  });
});
