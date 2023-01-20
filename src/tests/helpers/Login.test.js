import { screen } from '@testing-library/react';
import React from 'react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import Login from '../../pages/Login';
import { renderWithRouterAndRedux, renderWithRouter, renderWithRedux } from './renderWith';

describe('', () => {
  describe('Test functionalities of Login page', () => {
    test('Test if is rendered an e-mail and password input form', () => {
      renderWithRedux(<Login />);

      const emailInput = screen.getByTestId('email-input');
      const passwordInput = screen.getByTestId('password-input');
      const button = screen.getByRole('button', { name: /entrar/i });

      expect(emailInput).toBeDefined();
      expect(passwordInput).toBeDefined();
      expect(button).toBeDefined();
      expect(button).toBeDisabled();
    });

    test('Test Enter button functionality', () => {
      renderWithRedux(<Login />);

      const emailInput = screen.getByTestId('email-input');
      const passwordInput = screen.getByTestId('password-input');
      const button = screen.getByRole('button', { name: /entrar/i });

      expect(emailInput).toBeDefined();
      expect(passwordInput).toBeDefined();

      userEvent.type(emailInput, 'someemail@internet.com');
      userEvent.type(passwordInput, '333333');

      expect(button).toBeEnabled();
      userEvent.click(button);
    });
  });
});
