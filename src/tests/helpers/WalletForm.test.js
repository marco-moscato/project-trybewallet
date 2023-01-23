import { screen } from '@testing-library/react';
import React from 'react';
// import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import Wallet from '../../pages/Wallet';
import { renderWithRouterAndRedux } from './renderWith';

describe('', () => {
  describe('Test functionalities of Wallet Form', () => {
    test('Test if form is being rendered on the screen', () => {
      renderWithRouterAndRedux(<Wallet />);

      const value = screen.getByTestId('value-input');
      const description = screen.getByTestId('description-input');
      const currency = screen.getByTestId('currency-input');
      const method = screen.getByTestId('method-input');
      const tag = screen.getByTestId('tag-input');
      // const button = screen.getByRole('button', { name: /despesa/i });

      expect(value).toBeDefined();
      expect(value.type).toBe('number');
      expect(description).toBeDefined();
      expect(description.type).toBe('text');
      expect(currency).toBeDefined();
      expect(method).toBeDefined();
      expect(tag).toBeDefined();
    });

    // test('Test if is rendered an e-mail and password input', () => {
    //   renderWithRouterAndRedux(<Wallet />);

    //   const value = screen.getByTestId('value-input');
    //   const description = screen.getByTestId('description-input');
    //   const currency = screen.getByTestId('currency-input');
    //   const method = screen.getByTestId('method-input');
    //   const tag = screen.getByTestId('tag-input');
    //   const button = screen.getByRole('button', { name: /despesa/i });

    //   expect(value).toBeDefined();
    //   expect(value.type).toBe('number');
    //   expect(description).toBeDefined();
    //   expect(description.type).toBe('text');
    //   expect(currency).toBeDefined();
    //   expect(method).toBeDefined();
    //   expect(tag).toBeDefined();

    //   // userEvent.type(value, '11');
    //   // userEvent.type(description, 'restaurante');
    //   // userEvent.click(button);

    //   // const table = screen.getByRole('table');
    //   // expect(table).toBeDefined();

    //   // const editButton = screen.getByTestId('edit-btn');
    //   // // const info = screen.getAllByRole('row', { })
    //   // expect(editButton).toBeDefined();
    //   // userEvent.click(editButton);

    //   // const addToEdit = screen.findByRole('button', { name: /editar despesa/i });
    //   // expect(addToEdit).tobeDefined();
    // });
  });
});
