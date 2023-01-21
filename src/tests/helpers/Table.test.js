import { screen } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom';
import Wallet from '../../pages/Wallet';
import { renderWithRouterAndRedux } from './renderWith';

describe('', () => {
  describe('Test functionalities of Wallet page', () => {
    test('Test if a table is being rendered', () => {
      renderWithRouterAndRedux(<Wallet />);

      const table = screen.getByRole('table');
      expect(table).toBeDefined();
    });

    // test('Test if a table is being rendered', () => {
    //   renderWithRouterAndRedux(<Wallet />);

    //   const value = screen.getByTestId('value-input');
    //   expect(value).toBeDefined();

    //   const description = screen.getByTestId('description-input');
    //   expect(description).toBeDefined();

    // });
  });
});
