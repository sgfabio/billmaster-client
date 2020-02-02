import React, { Component } from "react";
import { Link } from "react-router-dom";
import DashNavbar from "../DashNavbar/DashNavbar";

import ReactDOM from "react-dom";
import ReactMultiSelectCheckboxes from "react-multiselect-checkboxes";

//
let members = [
  { Name: "NAME 01" },
  { Name: "NAME 02" },
  { Name: "NAME 03" },
  { Name: "NAME 04" },
  { Name: "NAME 05" },
  { Name: "NAME 06" },
  { Name: "NAME 07" },
  { Name: "NAME 08" },
  { Name: "NAME 09" },
  { Name: "NAME 10" }
];

const listOptions = [
  { label: "TODOS", value: ["???"] },
  { label: "TESTES", value: ["NAME 01", "NAME 02"] },
];

members.map(e => {
  let obj = {};
  obj.label = e.Name;
  obj.value = [e.Name];
  listOptions.push(obj);
});

class DashDespesas extends Component {
    constructor (props) {
      super(props)
    }
    doSomething = () => {
      console.log('something is happening')
    }
    render () {
      return (
        <>
          <DashNavbar />
    
          <div className="dashMainContent">
            {/* <!-- Add bills --> */}
            <h2>Adicionar nova despesa:</h2>
            <div className="dashAddBills d-flex justify-content-between align-items-end flex-wrap px-4">
              <div className="form-group text-left col-lg-3 mt-1 mb-0 p-0">
                Pagou:
                <select className="form-control" placeholder="Quem pagou?">
                  <option>Default select</option>
                  <option>Default select</option>
                  <option>Default select</option>
                  <option>Default select</option>
                  <option selected>Owner</option>
                </select>
              </div>
              <div class="form-group text-left col-lg-2 mb-0 mt-1 p-0">
                Valor:
                <input
                  type="number"
                  class="form-control"
                  min="0.00"
                  max="10000.00"
                  step="0.01"
                  id="acertoValor"
                  placeholder="R$ 10,00"
                />
              </div>
    
              {/* //! DOCUMENTAÇÃO https://react-select.com/props */}
    
              <div class="form-group text-left col-lg-3 mb-0 mt-1 p-0">
                Dividir por:
                <div className="d-flex align-items-center">
                  <ReactMultiSelectCheckboxes
                    placeholderButtonLabel="Menbros"
                    options={listOptions}
                    onMenuClose={this.doSomething}
                  />
                </div>
              </div>
    
              {/* <div class="form-group text-left col-lg-3 mb-0 mt-1 p-0">
                Recebeu:
                <button class="dropbtn">Pessoas</button>
                <div class="dropdown-content">
                  <div className="d-flex align-items-center">
                    <input
                      className="mx-2 my-auto"
                      type="checkbox"
                      id="TODOS"
                      name="TODOS"
                    />
                    <label
                      className="dropdown-item py-2 my-auto ml-n3 bg-transparent"
                      for="TODOS"
                    >
                      TODOS
                    </label>
                  </div>
    
                  <hr className="py-0 my-1" />
    
                  <div className="d-flex align-items-center">
                    <input
                      className="mx-2 my-auto"
                      type="checkbox"
                      id="TESTE"
                      name="TESTE"
                    />
                    <label
                      className="dropdown-item py-2 my-auto ml-n3 bg-transparent"
                      for="TESTE"
                    >
                      TESTE
                    </label>
                  </div>
                </div>
              </div> */}
    
              <button type="submit" class="btn btn-warning mt-2 col-lg-2">
                Submit
              </button>
            </div>
            <hr />
            {/* <!-- Bills list --> */}
            <div class="dashBillsList">
              <div class="row">
                <div class="col-lg-6 p-0 my-1">
                  <button class="btn btn-outline-dark col-10">
                    FULANO pagou DESPESA-TITLE dividindo o VALOR com TODOS ou LISTA
                  </button>{" "}
                  <button class="btn btn-danger col-1" type="button" data-toggle="modal" data-target="#deleteButton">X</button>
                </div>
                <div class="col-lg-6 p-0 my-1">
                  <button class="btn btn-outline-dark col-10">
                    FULANO pagou DESPESA-TITLE dividindo o VALOR com TODOS ou LISTA
                  </button>{" "}
                  <button class="btn btn-danger col-1" type="button" data-toggle="modal" data-target="#deleteButton">X</button>
                </div>
                <div class="col-lg-6 p-0 my-1">
                  <button class="btn btn-outline-dark col-10">
                    FULANO pagou DESPESA-TITLE dividindo o VALOR com TODOS ou LISTA
                  </button>{" "}
                  <button class="btn btn-danger col-1" type="button" data-toggle="modal" data-target="#deleteButton">X</button>
                </div>
                <div class="col-lg-6 p-0 my-1">
                  <button class="btn btn-outline-dark col-10">
                    FULANO pagou DESPESA-TITLE dividindo o VALOR com TODOS ou LISTA
                  </button>{" "}
                  <button class="btn btn-danger col-1" type="button" data-toggle="modal" data-target="#deleteButton">X</button>
                </div>
                <div class="col-lg-6 p-0 my-1">
                  <button class="btn btn-outline-dark col-10">
                    FULANO pagou DESPESA-TITLE dividindo o VALOR com TODOS ou LISTA
                  </button>{" "}
                  <button class="btn btn-danger col-1" type="button" data-toggle="modal" data-target="#deleteButton">X</button>
                </div>
                <div class="col-lg-6 p-0 my-1">
                  <button class="btn btn-outline-dark col-10">
                    FULANO pagou DESPESA-TITLE dividindo o VALOR com TODOS ou LISTA
                  </button>{" "}
                  <button class="btn btn-danger col-1" type="button" data-toggle="modal" data-target="#deleteButton">X</button>
                </div>
                <div class="col-lg-6 p-0 my-1">
                  <button class="btn btn-outline-dark col-10">
                    FULANO pagou DESPESA-TITLE dividindo o VALOR com TODOS ou LISTA
                  </button>{" "}
                  <button class="btn btn-danger col-1" type="button" data-toggle="modal" data-target="#deleteButton">X</button>
                </div>
              </div>
            </div>
          </div>


          {/* // CONFIRM EXCLUSION MODAL */}

      <div className="modal fade" id="deleteButton" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true" >
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
                  <label for="recipient" className="col-form-label"> expense details </label>
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
