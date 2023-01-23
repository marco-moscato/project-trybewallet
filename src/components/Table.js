import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteExpense, editExpense } from '../redux/actions';

class Table extends Component {
  handleDeleteButton = (id) => {
    const { expenses, dispatch } = this.props;
    const filterExpenses = expenses.filter((expense) => expense.id !== id);
    dispatch(deleteExpense(filterExpenses));
  };

  handleEditButton = (expense) => {
    const { dispatch } = this.props;
    dispatch(editExpense(expense));
  };

  render() {
    const { expenses } = this.props;
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Descrição</th>
              <th>Tag</th>
              <th>Método de pagamento</th>
              <th>Valor</th>
              <th>Moeda</th>
              <th>Câmbio utilizado</th>
              <th>Valor convertido</th>
              <th>Moeda de conversão</th>
              <th>Editar/Excluir</th>
              {/* <th>Editar</th> */}
            </tr>
          </thead>
          {expenses.map((expense) => (
            <tbody key={ expense.id }>
              <tr>
                <td>{ expense.description }</td>
                <td>{ expense.tag }</td>
                <td>{ expense.method }</td>
                <td>{ Number(expense.value).toFixed(2) }</td>
                <td>{ expense.exchangeRates[expense.currency].name }</td>
                <td>
                  { Number(expense.exchangeRates[expense.currency].ask).toFixed(2) }
                </td>
                <td>
                  { (expense.value
                  * expense.exchangeRates[expense.currency].ask).toFixed(2) }
                </td>
                <td>Real</td>

                <td>
                  <button
                    data-testid="delete-btn"
                    type="button"
                    onClick={ () => this.handleDeleteButton(expense.id) }
                  >
                    Excluir
                  </button>

                  <button
                    data-testid="edit-btn"
                    type="button"
                    onClick={ () => this.handleEditButton(expense) }
                  >
                    Editar
                  </button>
                </td>
              </tr>
            </tbody>
          ))}
        </table>

      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
  editor: state.wallet.editor,
  WalletForm: state.wallet.wallet,
});

Table.propTypes = {
  expenses: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      value: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
      method: PropTypes.string.isRequired,
      tag: PropTypes.string.isRequired,
    }),
  ).isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(Table);
