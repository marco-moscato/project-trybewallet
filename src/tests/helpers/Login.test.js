import { screen, act } from '@testing-library/react';
import React from 'react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { unmountComponentAtNode } from 'react-dom';
import { renderWithRedux } from './renderWith';
import App from '../../App';

let container = null;
beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

describe('', () => {
  describe('Test functionalities of Login page', () => {
    test('Test if is rendered an e-mail, password input form and button', () => {
      renderWithRedux(<App />);

      const emailInput = screen.getByTestId('email-input');
      const passwordInput = screen.getByTestId('password-input');
      const button = screen.getByRole('button', { name: /entrar/i });

      expect(emailInput).toBeDefined();
      expect(passwordInput).toBeDefined();
      expect(button).toBeDefined();
      expect(button).toBeDisabled();
    });

    test('Test if enter button is disabled when forms do not attend requirements: email must be someemail@internet.com and password must have minimum 6 characters', () => {
      renderWithRedux(<App />);

      const emailInput = screen.getByTestId('email-input');
      const passwordInput = screen.getByTestId('password-input');
      const button = screen.getByRole('button', { name: 'Entrar' });

      const userEmail = 'someemail@internet.com';
      const userPassword = 'somepassword';

      expect(button).toBeDisabled();
      expect(emailInput).toBeDefined();
      expect(passwordInput).toBeDefined();
      expect(button).toBeDefined();

      userEvent.type(emailInput, userEmail);
      expect(button).toBeDisabled();

      userEvent.type(passwordInput, userPassword);
      expect(button).toBeEnabled();

      userEvent.click(button);
    });
  });
});
