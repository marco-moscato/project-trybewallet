import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addExpense, saveEditedExpense } from '../redux/actions';

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

  handleFormSubmit = (e) => {
    e.preventDefault();
    const { id } = this.state;
    const { dispatch } = this.props;
    dispatch(addExpense(this.state));
    this.setState({
      id: id + 1,
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    });
  };

  handleEditForm = (e) => {
    e.preventDefault();
    const { dispatch, idToEdit, expenses } = this.props;
    const expensesToEdit = [...expenses];
    const newObject = {
      ...this.state,
      id: idToEdit,
      exchangeRates: { ...expensesToEdit[idToEdit].exchangeRates },
    };
    expensesToEdit.splice(idToEdit, 1, newObject);
    dispatch(saveEditedExpense(expensesToEdit));
  };

  render() {
    const { currencies, editor } = this.props;
    const { value, description } = this.state;

    return (
      <div>

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
              <option value="Dinheiro">Dinheiro</option>
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
              <option value="Alimentação">Alimentação</option>
              <option value="Lazer">Lazer</option>
              <option value="Trabalho">Trabalho</option>
              <option value="Transporte">Transporte</option>
              <option value="Saúde">Saúde</option>
            </select>
          </label>

          <button
            type="button"
            name="adicionar despesa"
            onClick={ editor
              ? this.handleEditForm : this.handleFormSubmit }
          >
            { editor ? 'Editar despesa' : 'Adicionar despesa' }
          </button>

        </form>
      </div>

    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  editor: state.wallet.editor,
  expenses: state.wallet.expenses,
  idToEdit: state.wallet.idToEdit,
});

WalletForm.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  dispatch: PropTypes.func.isRequired,
  editor: PropTypes.bool.isRequired,
  idToEdit: PropTypes.number.isRequired,
  expenses: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      value: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
      method: PropTypes.string.isRequired,
      tag: PropTypes.string.isRequired,
      exchangeRates: PropTypes.objectOf(PropTypes.objectOf(PropTypes.string)).isRequired,
    }),
  ).isRequired,
};

export default connect(mapStateToProps)(WalletForm);
