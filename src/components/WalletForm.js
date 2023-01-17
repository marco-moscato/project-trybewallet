import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class WalletForm extends Component {
  // state = {
  //   expenseIdNumber: 0,
  // };

  render() {
    const { currencies } = this.props;
    // const { expenseIdNumber } = this.state;
    return (
      <div>
        WalletForm

        <form>
          <label htmlFor="expense-amount">
            Valor da despesa
            <input data-testid="value-input" type="number" name="expense-amount" />
          </label>

          <label htmlFor="expense-description">
            Descrição da despesa
            <input
              data-testid="description-input"
              type="text"
              name="expense-description"
            />
          </label>

          <label htmlFor="currency">
            <select name="currency" data-testid="currency-input">
              {currencies.map((currency) => (
                <option value={ currency } key={ currency }>{ currency }</option>
              ))}
            </select>
          </label>

          <label htmlFor="payment-method">
            <select name="payment-method" data-testid="method-input">
              <option value="dinheiro">Dinheiro</option>
              <option value="cartão de crédito">Cartão de crédito</option>
              <option value="cartão de débito">Cartão de débito</option>
            </select>
          </label>

          <label htmlFor="expense-category">
            <select name="expense-category" data-testid="tag-input">
              <option value="alimentação">Alimentação</option>
              <option value="lazer">Lazer</option>
              <option value="trabalho">Trabalho</option>
              <option value="transporte">Transporte</option>
              <option value="saude">Saúde</option>
            </select>
          </label>

          <button
            type="submit"
            name="adicionar despesa"
            onClick={ () => console.log('Adicionar despesa') }
          >
            Adicionar despesa
          </button>

        </form>
      </div>

    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

WalletForm.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default connect(mapStateToProps)(WalletForm);
