import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';

import { auth } from '../../util/api';

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      isAuth: false,
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props.userInSession !== prevProps.userInSession) {
      this.setState({ user: this.props.userInSession, isAuth: true });
    }
  }

  async logout() {
    try {
      await auth.logout();
      // Eu não poderia só atualizar o state do app?
      this.setState({
        user: null,
        isAuth: false,
      });
      this.props.getUser(null);
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    console.log('isAuth?', this.state.isAuth);
    return (
      <div>
        {this.state.isAuth ? (
          <>
            <nav className="navbar navbar-light bg-yellow justify-content-between">
              <div>
                <Link className="navbar-brand" to="/dashboard">
                  <strong>BANANA</strong>
                  <em>SPLIT</em>
                </Link>
              </div>

              <div className="dropdown ml-auto mr-3 btn btn-outline-dark dropdown-toggle">
                <button className="dropbtn">Grupos</button>
                <div className="dropdown-content">
                  <button
                    className="btn btn-success dropdown-item bg-success text-white"
                    type="button"
                    data-toggle="modal"
                    data-target="#creategroupbutton"
                  >
                    Criar Grupo
                  </button>
                  <hr className="py-0 my-1" />
                  <button className="dropdown-item px-0" type="button">
                    GRUPO-01
                  </button>
                  <button className="dropdown-item px-0" type="button">
                    GRUPO-02
                  </button>
                </div>
              </div>

              <div>
                <button
                  type="button"
                  className="btn btn-outline-dark"
                  data-toggle="modal"
                  data-target="#logoutButton"
                >
                  Sair
                </button>
              </div>
            </nav>

            {/* // CREATE A GROUP MODAL */}

            <div
              className="modal fade"
              id="creategroupbutton"
              tabIndex="-1"
              role="dialog"
              aria-labelledby="exampleModalCenterTitle"
              aria-hidden="true"
            >
              <div
                className="modal-dialog modal-dialog-centered"
                role="document"
              >
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title">NOVO GRUPO</h5>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>

                  <div className="modal-body">
                    <form>
                      <div className="form-group text-left ">
                        <label htmlFor="recipient" className="col-form-label">
                          Nome do grupo:
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="recipient"
                        />
                        <label htmlFor="recipient" className="col-form-label">
                          Descrição:
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="recipient"
                        />
                        <label htmlFor="recipient" className="col-form-label">
                          Data do evento:
                        </label>
                        <input
                          type="date"
                          className="form-control"
                          id="recipient"
                        />
                      </div>
                    </form>
                  </div>

                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-dismiss="modal"
                    >
                      Cancelar
                    </button>
                    <button type="button" className="btn btn-primary">
                      CRIAR
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* // CONFIRM LOGOUT MODAL */}

            <div
              className="modal fade"
              id="logoutButton"
              tabIndex="-1"
              role="dialog"
              aria-labelledby="exampleModalCenterTitle"
              aria-hidden="true"
            >
              <div
                className="modal-dialog modal-dialog-centered"
                role="document"
              >
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title">Deseja realmente sair?</h5>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>

                  <div className="modal-body">
                    <form>
                      <div className="form-group">
                        <label htmlFor="recipient" className="col-form-label">
                          {' '}
                          SAD IMAGE{' '}
                        </label>
                      </div>
                    </form>
                  </div>

                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-dismiss="modal"
                    >
                      {' '}
                      Cancelar{' '}
                    </button>
                    <button type="button" className="btn btn-danger">
                      {' '}
                      Sair{' '}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <nav className="navbar navbar-light bg-yellow justify-content-between">
            <div>
              <Link className="navbar-brand" to="/">
                <strong>BANANA</strong>
                <em>SPLIT</em>
              </Link>
            </div>
            <div>
              {/* <!-- Modal Triggers --> */}
              <button
                type="button"
                className="btn btn-outline-dark mr-3"
                data-toggle="modal"
                data-target="#loginbutton"
              >
                Entre
              </button>
              <button
                type="button"
                className="btn btn-outline-dark"
                data-toggle="modal"
                data-target="#signupbutton"
              >
                Cadastre-se
              </button>
            </div>
          </nav>
        )}
      </div>
    );
  }
}