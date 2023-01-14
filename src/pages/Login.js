import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { userLogin } from '../redux/actions';

class Login extends React.Component {
  state = {
    email: '',
    password: '',
  };

  onInputChange = ({ target }) => {
    const { name, value } = target;
    this.setState(
      { [name]: value },
    );
  };

  passwordValidation = () => {
    const { password } = this.state;
    const length = 5;
    return password.length > length;
  };

  emailValidation = () => {
    const { email } = this.state;
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/igm;
    return emailRegex.test(email);
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { email } = this.state;
    const { dispatch, history } = this.props;
    dispatch(userLogin(email));
    history.push('/carteira');
  };

  render() {
    const { email, password } = this.state;

    return (
      <div>
        <form onSubmit={ this.handleSubmit }>
          <label htmlFor="email">
            Email
            <input
              type="email"
              name="email"
              data-testid="email-input"
              onChange={ this.onInputChange }
              placeholder="Digite seu email"
            />
          </label>

          <label htmlFor="password">
            Senha
            <input
              type="password"
              name="password"
              data-testid="password-input"
              onChange={ this.onInputChange }
              placeholder="Digite sua senha"
            />
          </label>

          <button
            name="entrar"
            type="submit"
            disabled={ !this.passwordValidation(password)
              || !this.emailValidation(email) }
            onClick={ () => this.handleSubmit }
          >
            Entrar
          </button>
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default connect()(Login);
