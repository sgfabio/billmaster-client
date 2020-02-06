import React, { Component } from "react";
import { Link } from "react-router-dom";
import DashNavbar from "../DashNavbar/DashNavbar";
import "./DashAcertos.css"

class DashAcertos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      group: this.props.oneGroup,
      members: this.props.oneGroup.members,
      settles: this.props.oneGroup.settles,
      renderModalDelete: this.props.renderModalDelete,
      errorMessage: "",
      newSettle: {
        _id: "ID",
        group: "this.state.group.ID",
        value: 0,
        paidBy: "",
        paidTo: ""
      }
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    let newErrorMessage = "";
    const { name, value } = event.target;
    const newSettleCopy = { ...this.state.newSettle };
    newSettleCopy[name] = value;
    newSettleCopy.group = this.state.group.ID;
    newSettleCopy.value = +(newSettleCopy.value);

    this.setState({ newSettle: newSettleCopy, errorMessage: newErrorMessage });
  }
  handleSubmit(event) {
    let newErrorMessage = "";
    if ( (this.state.newSettle.paidBy === "") || (this.state.newSettle.paidTo === "") ) {
      event.preventDefault();
      newErrorMessage = "Por favor, preencha todos os dados";
    } else if (this.state.newSettle.paidBy === this.state.newSettle.paidTo) {
      event.preventDefault();
      newErrorMessage = "Não é possível pagar a si mesmo";
    } else {
      //TODO this.props.addSettle(this.state.newSettle);
      const copyNewSettle = { ...this.state.newSettle };
      // const { newSettle } = this.state;
      copyNewSettle.value = 0;
      copyNewSettle.paidBy = "";
      copyNewSettle.paidTo = "";
      this.setState({ newSettle: copyNewSettle });
    }
    this.setState({ errorMessage: newErrorMessage });
  }
  render() {
    return (
      <>
        <DashNavbar />
        
        <div className="dashMainContent">
          {/* <!-- Add Settle --> */}
          <h2>Adicionar novo acerto:</h2>
          <form className="dashAddBills d-flex justify-content-between align-items-end flex-wrap px-4">
            <div className="form-group text-left col-lg-3 mt-1 mb-0 p-0">
              Pagou:
              <select
                onChange={this.handleChange}
                name="paidBy"
                className="form-control"
                required
              >
                <option value="">Selecione um nome</option>
                {[...this.state.members]
                  .sort((a, b) => a.localeCompare(b))
                  .map(member => {
                    return <option value={member}>{member}</option>;
                  })}
              </select>
            </div>
            <div className="form-group text-left col-lg-3 mb-0 mt-1 p-0">
              Recebeu:
              <select
                onChange={this.handleChange}
                name="paidTo"
                className="form-control"
                required
              >
                <option value="">Selecione um nome</option>
                {[...this.state.members]
                  .sort((a, b) => a.localeCompare(b))
                  .map(member => {
                    return <option value={member}>{member}</option>;
                  })}
              </select>
            </div>
            <div className="form-group text-left col-lg-2 mb-0 mt-1 p-0">
              Valor:
              <input
                onChange={this.handleChange}
                type="number"
                name="value"
                className="form-control"
                min="0.00"
                max="10000.00"
                step="0.01"
                id="acertoValor"
                placeholder="R$ 10,00"
                required
              />
            </div>
            <button
              onClick={this.handleSubmit}
              type="submit"
              className="btn btn-warning mt-2 col-lg-2"
            >
              Submit
            </button>
          </form>
            <div className="zindex-modal alert alert-warning bg-transparent m-2 py-auto px-auto noBorder" role="alert">
              {this.state.errorMessage}
            </div>
          <hr />

          <div className="dashSettleList row">
            {[...this.state.settles].map(e => {
              return (      
                <div className="col-lg p-0 ml-0 dashComponents">
                  <div className="col-9 p-0">
                    <button className="btn btn-outline-secondary boxComponent">
                      {e.paidBy} pagou para {e.paidTo} o valor de R${e.value}
                    </button>
                  </div>
                  <div className="col-2 p-0">
                    <button
                      className="btn btn-warning buttonOptions"
                      type="button"
                      data-toggle="modal"
                      data-target={`#deleteButton${e.id}`}
                      >
                        Editar  
                    </button>
                    <button
                      className="btn btn-danger buttonOptions"
                      type="button"
                      data-toggle="modal"
                      data-target={`#deleteButton${e.id}`}
                      >
                      Excluir
                    </button>
                    {this.props.renderModalDelete(
                      `O pagamento de ${e.paidBy} para ${e.paidTo}`,
                      e
                    )}
                  </div>
                </div>
              )})}
          </div>
        </div>
      </>
    );
  }
}

export default DashAcertos;