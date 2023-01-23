import { screen } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import Wallet from '../../pages/Wallet';
import { renderWithRouterAndRedux } from './renderWith';

describe('', () => {
  describe('Test functionalities of table', () => {
    test('Test if a table is being rendered', () => {
      renderWithRouterAndRedux(<Wallet />);

      const valueInput = screen.getByTestId('value-input');
      const descriptionInput = screen.getByTestId('description-input');
      const button = screen.getByRole('button', { name: /despesa/i });

      expect(valueInput).toBeInTheDocument();
      expect(descriptionInput).toBeInTheDocument();
      expect(button).toBeInTheDocument();

      userEvent.type(valueInput, '100');
      userEvent.type(descriptionInput, 'restaurante');
      userEvent.click(button);

      const deleteButton = screen.findByTestId('delete-btn');
      const editButton = screen.findByTestId('edit-btn');

      expect(deleteButton).toBeDefined();
      expect(editButton).toBeDefined();
    });
  });
});
