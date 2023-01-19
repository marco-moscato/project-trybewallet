import { screen } from '@testing-library/react';
import React from 'react';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';
import '@testing-library/jest-dom';
import Login from '../../pages/Login';
import { renderWithRouterAndRedux } from './renderWith';

describe('', () => {
  describe('Test functionalities of Login page', () => {
    test('Test if is rendered an e-mail and password input', () => {
      renderWithRouterAndRedux(<Login />);

      // e-mail
      const emailInput = screen.getByTestId('email-input');
      expect(emailInput).toBeDefined();

      // password
      const passwordInput = screen.getByTestId('password-input');
      expect(passwordInput).toBeDefined();
    });

    test('Test if Enter button is rendered', () => {
      renderWithRouterAndRedux(<Login />);

      const button = screen.getByRole('button', { name: /entrar/i });
      expect(button).toBeDefined();
      expect(button).toBeDisabled();
    });

    test('Test Login button functionality', () => {
      renderWithRouterAndRedux(<Login />);

      const emailInput = screen.getByTestId('email-input');
      const passwordInput = screen.getByTestId('password-input');

      expect(emailInput).toBeDefined();
      expect(passwordInput).toBeDefined();

      userEvent.type(emailInput, 'someemail@internet.com');
      userEvent.type(passwordInput, '333333');

      const button = screen.getByRole('button', { name: /entrar/i });
      expect(button).toBeEnabled();
    });
  });
});
