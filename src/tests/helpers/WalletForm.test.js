import { screen } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom';
import { unmountComponentAtNode } from 'react-dom';
import userEvent from '@testing-library/user-event';
import Wallet from '../../pages/Wallet';
import { renderWithRouterAndRedux } from './renderWith';
import mockData from './mockData';

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

describe('Test functionalities of Wallet Form', () => {
  test('Test if form is being rendered on the screen', () => {
    renderWithRouterAndRedux(<Wallet />);

    const value = screen.getByTestId('value-input');
    const description = screen.getByTestId('description-input');
    const currency = screen.getByTestId('currency-input');
    const method = screen.getByTestId('method-input');
    const tag = screen.getByTestId('tag-input');
    const addButton = screen.getByRole('button', { name: /despesa/i });

    expect(value).toBeDefined();
    expect(description).toBeDefined();
    expect(currency).toBeDefined();
    expect(method).toBeDefined();
    expect(tag).toBeDefined();
    expect(addButton).toBeDefined();
  });

  // test('Test if onInputChange has been called as form is filled in', () => {
  //   const onInputChange = jest.fn();
  //   renderWithRouterAndRedux(<Wallet onInputChange={ onInputChange } />);

  //   // const value = screen.getByTestId('value-input');
  //   expect(value).toBeDefined();

  //   userEvent.type(value, '1');
  //   expect(onInputChange).toHaveBeenCalledTimes(1);
  // });

  test('Test if handleChange has been called when add button is clicked', async () => {
    // const handleFormSubmit = jest.fn();
    const exchangeRate = mockData.USD.ask;
    const currencyName = mockData.USD.name;
    const valueBRL = 100 * exchangeRate;

    renderWithRouterAndRedux(<Wallet />);

    const value = screen.getByTestId('value-input');
    const description = screen.getByTestId('description-input');
    const addButton = screen.getByRole('button', { name: /despesa/i });

    expect(value).toBeDefined();
    expect(description).toBeDefined();
    expect(addButton).toBeDefined();

    userEvent.type(value, '100');
    userEvent.type(description, 'restaurante');
    userEvent.click(addButton);

    const tableValue = screen.findByText('100');
    const tableDescription = screen.findByText('restaurante');
    const currencyDescription = screen.findByText(currencyName);
    const rate = screen.queryByText('4.75');
    const BRL = screen.findByText('BRL');
    const deleteButton = screen.findByTestId('delete-btn');
    const editButton = screen.findByTestId('edit-btn');
    const convertedAmount = screen.findByText(valueBRL);

    expect(value.innerText).not.toBeDefined();
    expect(description.innerText).not.toBeDefined();
    expect(tableValue).toBeDefined();
    expect(tableDescription).toBeDefined();
    expect(currencyDescription).toBeDefined();
    expect(rate).toBeDefined();
    expect(BRL).toBeDefined();
    expect(deleteButton).toBeDefined();
    expect(editButton).toBeDefined();
    expect(convertedAmount).toBeDefined();

    userEvent.click(await editButton);
    // expect(tableValue).not.toBeDefined();
  });
});
