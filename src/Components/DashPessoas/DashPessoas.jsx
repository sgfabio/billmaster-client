import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import DashNavbar from "../DashNavbar/DashNavbar";

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

class DashPessoas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedGroup: this.props.oneGroup,
      renderModalDelete: this.props.renderModalDelete,
      newMember: {
        id: (getRandomInt(1000000000).toString()),
        name: "",
        contact: "",
      },
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    const { name , value} = event.target;
    
    const newMemberCopy = {...this.state.newMember};
    newMemberCopy[name] = value;
    
    this.setState({newMember: newMemberCopy});
  }
  handleSubmit(event) {
    // alert('Um novo membro foi adicionado com sucesso: ' + this.state.newMember.name);
    event.preventDefault();
    this.props.addMember(this.state.newMember);
    const copyNewMember = {...this.state.newMember};
    // const { newMember } = this.state;
    copyNewMember.id=(getRandomInt(1000000000).toString());
    copyNewMember.name="";
    copyNewMember.contact="";
    this.setState({
      newMember: copyNewMember,
    })
  }
  
  
  render() {
    let { oneGroup } = this.props;
    return (
      <>
        <DashNavbar />
        <div className="dashMainContent mx-4">
          <h2>Adicionar pessoa:</h2>
          <form onSubmit={this.handleSubmit} className="dashAddBills d-flex justify-content-between align-items-end flex-wrap">
            <div className="form-group text-left col-lg-4 mt-1 mb-0 p-0">
              Nome:
              <input
                type="text"
                className="form-control"
                id="newMemberName"
                name="name"
                value={this.state.newMember.name}
                onChange={this.handleChange}
                required

              />
            </div>
            <div className="form-group text-left col-lg-5 mb-0 mt-1 p-0">
              Contato:
              <input
                type="text"
                className="form-control"
                id="newMemberContact"
                name="contact"
                value={this.state.newMember.contact}
                placeholder={"E-mail ou Telefone para contato"}
                onChange={this.handleChange}
              />
            </div>
            <button type="submit" value="submit" className="btn btn-warning mt-2 col-lg-2" >
              Submit
            </button>
          </form>
          <hr />

          <div className="dashBillsList">
            <div className="row">
              {oneGroup.members.map(e => {
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
