import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addNewExpense } from '../redux/actions';

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

  handleFormSubmit = (event) => {
    event.preventDefault();
    const { id } = this.state;
    const { dispatch } = this.props;
    dispatch(addNewExpense(this.state));
    this.setState({
      id: id + 1,
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    });
  };

  render() {
    const { currencies } = this.props;
    const { value, description } = this.state;

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
              id="value"
              value={ value }
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
              value={ description }
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
            type="button"
            name="adicionar despesa"
            onClick={ this.handleFormSubmit }
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
  dispatch: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(WalletForm);
