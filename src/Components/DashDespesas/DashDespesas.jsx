import React, { Component } from "react";
import { Link } from "react-router-dom";
import DashNavbar from "../DashNavbar/DashNavbar";
import CheckBox from "./Checkbox"


class DashDespesas extends Component {
    constructor (props) {
      super(props)
      this.state = {
        members: [
          {id: 1, name: "banana", isChecked: true},
          {id: 2, name: "apple", isChecked: true},
          {id: 3, name: "mango", isChecked: true},
          {id: 4, name: "grap", isChecked: true}
        ]
      }
    }
    handleAllChecked = (event) => {
      let members = this.state.members
      members.forEach(member => member.isChecked = event.target.checked) 
      this.setState({members: members})
    }
    handleCheckChieldElement = (event) => {
      let members = this.state.members
      members.forEach(member => {
         if (member.name === event.target.name)
            member.isChecked =  event.target.checked
      })
      this.setState({members: members})
    }
    doSomething = () => {
      console.log('something is happening')
    }
    render () {
      return (
        <>
          <DashNavbar />
    
          <div className="dashMainContent mx-2">
            {/* <!-- Add bills --> */}
            <h2>Adicionar nova despesa:</h2>
            <div className="dashAddBills d-flex justify-content-between align-items-end flex-wrap px-4">
              <div className="form-group text-left col-lg-3 mt-1 mb-0 p-0">
                Pagou:
                <select className="form-control">
                  <option>Default select</option>
                  <option>Default select</option>
                  <option>Default select</option>
                  <option>Default select</option>
                  <option selected>Owner</option>
                </select>
              </div>
              <div className="form-group text-left col-lg-2 mb-0 mt-1 p-0">
                Valor:
                <input
                  type="number"
                  className="form-control"
                  min="0.00"
                  max="10000.00"
                  step="0.01"
                  id="acertoValor"
                  placeholder="R$ 10,00"
                />
              </div>

              <div className="form-group text-left col-lg-3 mb-0 mt-1 p-0">
                Dividir Por:
              <div className="btn btn-outline-dark dropdown dropdown-toggle form-control">
                TODOS
                <div className="dropdown-content form-group">

                <div className="dropdown-item d-flex form-group">
                <input
                      className="dropdown-item mx-0 my-auto bg-transparent"
                      type="checkbox"
                      onClick={this.handleAllChecked}
                      id="checkedall"
                      name="checkedall"
                    />
                    <label
                      className="dropdown-item py-2 my-auto ml-n4 bg-transparent"
                      htmlFor="checkedall"
                    >
                      Todos
                    </label>

          </div>
        <ul>
        {
          this.state.members.map((member) => {
            return (<CheckBox handleCheckChieldElement={this.handleCheckChieldElement} {...member} />)
          })
        }
        </ul>
      </div>
        </div>
        </div>
    
    
              <button type="submit" className="btn btn-warning mt-2 col-lg-2">
                Submit
              </button>
            </div>
            <hr />
            {/* <!-- Bills list --> */}
            <div className="dashBillsList">
              <div className="row">
                <div className="col-lg-6 p-0 my-1">
                  <button className="btn btn-outline-dark col-10">
                    FULANO pagou DESPESA-TITLE dividindo o VALOR com TODOS ou LISTA
                  </button>{" "}
                  <button className="btn btn-danger col-1" type="button" data-toggle="modal" data-target="#deleteButton">X</button>
                </div>
              </div>
            </div>
          </div>


          {/* // CONFIRM EXCLUSION MODAL */}

      <div className="modal fade" id="deleteButton" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true" >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Deseja realmente remover?</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close" >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>

            <div className="modal-body">
              <form>
                <div className="form-group">
                  <label htmlFor="recipient" className="col-form-label"> expense details </label>
                </div>
              </form>
            </div>

            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal" > Cancelar </button>
              <button type="button" className="btn btn-danger"> Excluir </button>
            </div>
          </div>
        </div>
      </div>

        </>
      );
    }
};

export default DashDespesas;
