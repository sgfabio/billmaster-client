import React, { Component } from "react";
import { Link } from "react-router-dom";
import Dashboard from "../Dashboard/Dashboard";
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
          <Dashboard />
    
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
                    FULANO pagou para CICLANO o valor de VALOR
                  </button>{" "}
                  <button class="btn btn-danger col-1">X</button>
                </div>
                <div class="col-lg-6 p-0 my-1">
                  <button class="btn btn-outline-dark col-10">
                    FULANO pagou para CICLANO o valor de VALOR
                  </button>{" "}
                  <button class="btn btn-danger col-1">X</button>
                </div>
                <div class="col-lg-6 p-0 my-1">
                  <button class="btn btn-outline-dark col-10">
                    FULANO pagou para CICLANO o valor de VALOR
                  </button>{" "}
                  <button class="btn btn-danger col-1">X</button>
                </div>
                <div class="col-lg-6 p-0 my-1">
                  <button class="btn btn-outline-dark col-10">
                    FULANO pagou para CICLANO o valor de VALOR
                  </button>{" "}
                  <button class="btn btn-danger col-1">X</button>
                </div>
                <div class="col-lg-6 p-0 my-1">
                  <button class="btn btn-outline-dark col-10">
                    FULANO pagou para CICLANO o valor de VALOR
                  </button>{" "}
                  <button class="btn btn-danger col-1">X</button>
                </div>
                <div class="col-lg-6 p-0 my-1">
                  <button class="btn btn-outline-dark col-10">
                    FULANO pagou para CICLANO o valor de VALOR
                  </button>{" "}
                  <button class="btn btn-danger col-1">X</button>
                </div>
                <div class="col-lg-6 p-0 my-1">
                  <button class="btn btn-outline-dark col-10">
                    FULANO pagou para CICLANO o valor de VALOR
                  </button>{" "}
                  <button class="btn btn-danger col-1">X</button>
                </div>
              </div>
            </div>
          </div>
        </>
      );
    }
};

export default DashDespesas;
