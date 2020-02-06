import React, { Component } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";

import { auth } from "../../util/api";

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      isAuth: false,
      groups: this.props.groups,
      addGroup: this.props.addGroup,
      newInfoGroup: {
        groupName: "",
        description: "",
        date: ""
      }
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmitNewGroup = this.handleSubmitNewGroup.bind(this);
    this.logout = this.logout.bind(this);
  }
  handleChange = event => {
    const newInfoGroup = { ...this.state.newInfoGroup };
    const { name, value } = event.target;
    newInfoGroup[name] = value;

    this.setState({ newInfoGroup: newInfoGroup });
  };
  handleSubmitNewGroup = (event) => {
    event.preventDefault();
    const {newInfoGroup} = this.state;
    newInfoGroup = this.state.newInfoGroup;


    this.props.addGroup(newInfoGroup);
  }

  componentDidUpdate(prevProps) {
    if (this.props.userInSession !== prevProps.userInSession) {
      this.setState({
        user: this.props.userInSession,
        isAuth: this.props.authed,
      });
    }
  }

  async logout() {
    try {
      await auth.logout();
      // Eu não poderia só atualizar o state do app?
      this.setState({
        user: null,
        isAuth: false
      });
      this.props.getUser(null);
    } catch (error) {
      console.log(error);
    }
  }

  render() {
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
                  {this.state.groups.map(e=> {
                    return(
                    <Link to={`/groups/${e._id}`} className="dropdown-item px-1" type="button">
                    {e.groupName}
                  </Link>
                    )
                  })}
                </div>
              </div>

              <div>
                <Link
                  className="btn btn-outline-dark"
                  to="/"
                  onClick={this.logout}
                >
                  Sair
                </Link>
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
                <form className="modal-content">
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
                    <div>
                      <div className="form-group text-left ">
                        <label htmlFor="groupName" className="col-form-label">
                          Nome do grupo:
                        </label>
                        <input
                          onChange={this.handleChange}
                          type="text"
                          value={this.state.newInfoGroup.groupName}
                          className="form-control"
                          id="groupName"
                          name="groupName"
                        />
                        <label htmlFor="description" className="col-form-label">
                          Descrição:
                        </label>
                        <input
                          onChange={this.handleChange}
                          type="text"
                          value={this.state.newInfoGroup.description}
                          className="form-control"
                          id="description"
                          name="description"
                        />
                        <label htmlFor="date" className="col-form-label">
                          Data do evento:
                        </label>
                        <input
                          onChange={this.handleChange}
                          type="date"
                          value={this.state.newInfoGroup.date}
                          className="form-control"
                          id="date"
                          name="date"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-dismiss="modal"
                    >
                      Cancelar
                    </button>
                    <button onClick={this.handleSubmitNewGroup} type="submit" className="btn btn-primary">
                      CRIAR
                    </button>
                  </div>
                </form>
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
              <Link className="btn btn-outline-dark mr-3" to="/login">
                Entre
              </Link>
              <Link className="btn btn-outline-dark" to="/signup">
                Cadastre-se
              </Link>
            </div>
          </nav>
        )}
      </div>
    );
  }
}
