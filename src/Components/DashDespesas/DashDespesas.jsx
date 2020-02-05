import React, { Component } from "react";
import { Link } from "react-router-dom";
import DashNavbar from "../DashNavbar/DashNavbar";
import CheckBox from "./Checkbox";
import "./DashDespesas.css"

class DashDespesas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      group: this.props.oneGroup,
      members: this.props.oneGroup.members,
      expense: this.props.oneGroup.expense,
      renderModalDelete: this.props.renderModalDelete,
      selectedMembers: [],
      newExpense:{
        ID: "Aleatorio",
        group: this.props.oneGroup._id,
        description: '',
        value: 0,
        split: {
          paidBy: '',
          divideBy: [],
          isDivideByAll: false,
        }
      }
    };
  }
  handleAllChecked = event => {
    let selectedMembers = [];
    let isDivideByAll = false;

    let members = [...this.state.members];
    if(event.target.checked){
      isDivideByAll = true;
    }
    members.map(e => (event.target.checked) ? selectedMembers.push(e.name) : selectedMembers)
    members.forEach(member => (member.isChecked = event.target.checked));
    this.setState({ members: members , selectedMembers: selectedMembers }, () => console.log("SELECTED",this.state.selectedMembers));

  };
  doSomething = (e) => {
    console.log("something is happening",e);
  };
  handleCheckChieldElement = event => {
    let members = [...this.state.members];
    let selectedMembers = [...this.state.selectedMembers];
    members.map(member => {
      if (member.name === event.target.value) {
        member.isChecked = event.target.checked;
        if (!event.target.checked) {
          let idx = selectedMembers.indexOf(member.name);
          selectedMembers.splice(idx,1);
          if (document.getElementById("isDivideByAll").checked){
            this.state.newExpense.split.isDivideByAll = false;
          }
        } else if (event.target.checked) {
          selectedMembers.push(member.name)
        }
      }
      return selectedMembers;
    });
    
    console.log(this.state.selectedMembers);

    this.setState({ members: members , selectedMembers: selectedMembers }, () => console.log("SELECTED00000",this.state.selectedMembers));
  };
  handleChange = (event) => {
    const { name , value} = event.target;

    const newExpenseCopy = {...this.state.newExpense};
    if (name === "paidBy" || name === "divideBy" || name === "isDivideByAll"){
      newExpenseCopy.split[name] = value;
      

    } else {
      newExpenseCopy[name] = value;
    }

    // this.setState({newExpense: newExpenseCopy});
  };
  handleSubmit = (event) => {
    // event.preventDefault();
    // this.props.addMember(this.state.newExpense);
    // const copyNewExpense = {...this.state.newExpense};
    // const { newExpense } = this.state;
    // copyNewExpense.id=(getRandomInt(1000000000).toString());
    // copyNewExpense.name="";
    // copyNewExpense.contact="";
    // this.setState({
    //   newExpense: copyNewExpense,
    // })
  }

  render() {
    return (
      <>
        <DashNavbar />

        <div className="dashMainContent mx-2 p-0">
          {/* <!-- Add bills --> */}
          <h2>Adicionar nova despesa:</h2>
          <form onSubmit="" className="dashAddBills d-flex justify-content-between align-items-end flex-wrap">
            <div className="form-group text-left col-xl-3 m-1 mb-0 p-0">
              Descrição:
              <input
                type="text"
                className="form-control"
                maxLength="25"
              />
            </div>
            <div className="form-group text-left col-xl-2 m-1 mb-0 p-0">
              Pagou:
              <select className="form-control">
                {[...this.state.members].sort((a,b)=>a.name.localeCompare(b.name)).map(member => {
                  return (
                  <option>{member.name}</option>
                  )
                })}
              </select>
            </div>
            <div className="form-group text-left col-xl-2 mb-0 m-1 p-0">
              Valor:
              <input
                type="number"
                className="form-control"
                name="value"
                min="0.00"
                max="10000.00"
                step="0.01"
                id="value"
                placeholder="R$ 10,00"
              />
            </div>

            <div className="form-group text-left col-xl-2 mb-0 m-1 p-0">
              Dividir Por:
              <div className="btn btn-outline-dark dropdown dropdown-toggle form-control">
                Selecione os membros
                <div className="dropdown-content form-group">
                  <div className="dropdown-item d-flex form-group">
                    <input
                      className="dropdown-item mx-0 my-auto bg-transparent"
                      type="checkbox"
                      onClick={this.handleAllChecked}
                      id="isDivideByAll"
                      name="isDivideByAll"
                    />
                    <label
                      className="dropdown-item py-2 my-0 bg-transparent"
                      htmlFor="isDivideByAll"
                    >
                      Todos
                    </label>
                  </div>
                  <ul>
                    {[...this.state.members].map(member => {
                      return (
                        <CheckBox
                          handleCheckChieldElement={this.handleCheckChieldElement}
                          handleChange={this.handleChange}
                          doSomething={this.doSomething}
                          {...member}
                        />
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>

            <button type="submit" className="btn btn-warning mb-1 col-xl-1">
              Submit
            </button>
          </form>
          <hr />
          
          
          {/* <!-- Bills list --> */}
          <div className="dashBillsList m-1">
            <div className="row m-0">
              {
              [...this.state.expense].map(e => {
                return(
              <div className="col-lg p-0 ml-0 dashComponents">
                <div className="col-9 p-0">
                  <button className="btn btn-outline-dark boxComponent">
                    {e.split.paidBy} pagou {e.description} dividindo o {e.value} com {(e.split.isDivideByAll)?"todos os membros":`${e.split.divideBy.legth} dos membros`} 
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
                </div>
                {this.props.renderModalDelete(e.description, e)}
              </div>
                )
              })
            }
            </div>     




            </div>
          </div>

      </>
    );
  }
}

export default DashDespesas;
