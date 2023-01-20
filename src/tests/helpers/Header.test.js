import { screen } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import Wallet from '../../pages/Wallet';
import { renderWithRouterAndRedux } from './renderWith';

describe('', () => {
  describe('Test functionalities of Wallet page', () => {
    test('Test if is rendered an e-mail and password input', () => {
      renderWithRouterAndRedux(<Wallet />);

      const email = screen.getByTestId('email-field');
      const totalValue = screen.getByTestId('total-field');
      const currency = screen.getByTestId('header-currency-field');
      const value = screen.getByTestId('value-input');

      expect(value).toBeDefined();
      expect(email).toBeDefined();
      expect(totalValue).toBeDefined();
      expect(currency).toBeDefined();

      userEvent.type(value, '10');
      expect(totalValue).not.toEqual('10');
    });
  });
});
