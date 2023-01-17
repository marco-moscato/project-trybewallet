import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class WalletForm extends Component {
  state = {
    id: 0,
    value: '',
    description: '',
    currency: 'USD',
    method: 'Dinheiro',
    tag: 'Alimentação',
  };

  onInputChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  render() {
    const { currencies } = this.props;
    // const { expenseIdNumber } = this.state;
    return (
      <div>
        WalletForm

        <form>
          <label htmlFor="value">
            Valor da despesa
            <input
              data-testid="value-input"
              type="number"
              name="value"
              onChange={ this.onInputChange }
            />
          </label>

          <label htmlFor="description">
            Descrição da despesa
            <input
              data-testid="description-input"
              type="text"
              name="description"
              onChange={ this.onInputChange }
            />
          </label>

          <label htmlFor="currency">
            <select
              name="currency"
              data-testid="currency-input"
              onChange={ this.onInputChange }
            >
              {currencies.map((currency) => (
                <option value={ currency } key={ currency }>{ currency }</option>
              ))}
            </select>
          </label>

          <label htmlFor="method">
            <select
              name="method"
              data-testid="method-input"
              onChange={ this.onInputChange }
            >
              <option value="Dinheiro" selected>Dinheiro</option>
              <option value="Cartão de crédito">Cartão de crédito</option>
              <option value="Cartão de débito">Cartão de débito</option>
            </select>
          </label>

          <label htmlFor="tag">
            <select
              name="tag"
              data-testid="tag-input"
              onChange={ this.onInputChange }
            >
              <option value="Alimentação" selected>Alimentação</option>
              <option value="Lazer">Lazer</option>
              <option value="Trabalho">Trabalho</option>
              <option value="Transporte">Transporte</option>
              <option value="Saúde">Saúde</option>
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
