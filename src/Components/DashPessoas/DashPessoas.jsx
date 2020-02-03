import React, { Component } from "react";
import { Link } from "react-router-dom";
import DashNavbar from "../DashNavbar/DashNavbar";

class DashPessoas extends Component {
  constructor(props) {
    super(props);
    const allGroups = props.data.groups;
    this.state = {
      selectedGroup: allGroups[0], /* //TODO Filter seleted group */
      renderModalDelete: this.props.renderModalDelete,
      addMember: this.props.addMember,
    };
  }
  render() {
    const { members } = this.state.selectedGroup;
    return (
      <>
        <DashNavbar />
        <div className="dashMainContent mx-4">
          <h2>Adicionar pessoa:</h2>
          <form action="/dashboard" className="dashAddBills d-flex justify-content-between align-items-end flex-wrap">
            <div className="form-group text-left col-lg-4 mt-1 mb-0 p-0">
              Nome:
              <input
                type="text"
                className="form-control"
                id="newMemberName"
                value=""

              />
            </div>
            <div className="form-group text-left col-lg-5 mb-0 mt-1 p-0">
              Contato:
              <input
                type="text"
                className="form-control"
                id="newMemberEmail"
                value=""
                placeholder={"E-mail ou Telefone para contato"}
              />
            </div>
            <button type="submit" value="submit" className="btn btn-warning mt-2 col-lg-2">
              Submit
            </button>
          </form>
          <hr />

          <div className="dashBillsList">
            <div className="row">
              {members.map(e => {
                return (
                  <>
                    <div className="col-lg-6 p-0 my-1">
                      <button className="btn btn-outline-dark col-10">
                        {e.name}
                      </button>{" "}
                      <button
                        className="btn btn-danger col-1"
                        onClick={() => this.state.renderModalDelete(e.name, e)}
                        type="button"
                        data-toggle="modal"
                        data="teste"
                        data-target={`#deleteButton${e.id}`}
                      >
                        {" "}
                        X{" "}
                      </button>
                      {this.state.renderModalDelete(e.name, e)}
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default DashPessoas;
