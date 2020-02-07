import React, { Component } from 'react';
import { auth } from '../../util/api';
import { Redirect } from 'react-router-dom';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirectToReferrer: false,
      username: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  async handleFormSubmit(event) {
    event.preventDefault();
    const { username, password } = this.state;
    try {
      const { data, status } = await auth.login(username, password);
      if (status !== 200) {
        this.setState({
          error: data.message,
          username: '',
          password: '',
        });
        return;
      }
      this.props.getUser(data);
      this.setState({
        redirectToReferrer: true,
        error: false,
      });
    } catch (error) {
      console.log(error);
    }
  }
  render() {
    // no sucesso, redireciona de onde ele veio ou leva ele de volta para login
    // TODO: conferir redirect
    const { from } = this.props.location.state || {
      from: { pathname: '/groups' },
    };
    const { redirectToReferrer } = this.state;

    if (redirectToReferrer) {
      return <Redirect to={from} />;
    }

    return (
      <div>
        <div
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              {/* Esse header talvez precise loadar contextualmente */}
              <div className="modal-header">
                <h5 className="modal-title">Login</h5>
                {/* botão de fechar deixa de fazer sentido */}
                {/* <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button> */}
              </div>
              <div className="modal-body">
                <br />
                {this.state.error && this.state.error}
                <form onSubmit={this.handleFormSubmit}>
                  <div className="form-group">
                    <label htmlFor="recipient-user" className="col-form-label">
                      Usuário:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="recipient-user"
                      name="username"
                      value={this.state.username}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label
                      htmlFor="recipient-password"
                      className="col-form-label"
                    >
                      Senha:
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="recipient-password"
                      name="password"
                      value={this.state.password}
                      onChange={this.handleChange}
                    />
                  </div>

                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Cancelar
                  </button>
                  <input
                    type="submit"
                    value="Entrar"
                    className="btn btn-primary"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
