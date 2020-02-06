import React, { Component } from "react";
import { Switch, Route, Link, Redirect } from "react-router-dom";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { auth } from "../../util/api";
import { groups } from "../../util/api";
// Components
import Index from "../Index/Index";

import Login from "../Login/Login";

import Dashboard from "../Dashboard/Dashboard";
import Pessoas from "../DashPessoas/DashPessoas";
import Despesas from "../DashDespesas/DashDespesas";
import Acertos from "../DashAcertos/DashAcertos";
import DeleteModal from "../Modal/DeleteModal";
import EditModal from "../Modal/EditModal";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Reports from "../Reports/Reports";


// fake data
const fakeExpense01 = {
  ID: 21,
  group: "000",
  description: "ABC EXPENSE",
  value: 1000,
  split: {
    paidBy: "FULANO",
    divideBy: ["CICLANO-01", "CICLANO-02"]
  }
};
const fakeExpense02 = {
  ID: 25,
  group: "000",
  description: "ABC EXPENSE 0002",
  value: 1000,
  split: {
    paidBy: "FULANO 02",
    divideBy: ["CICLANO-01", "CICLANO-02"]
  }
};
const fakeSettle01 = {
  ID: 31,
  group: "GROUP ID",
  value: 200,
  paidBy: "PAGOU",
  paidTo: "QUEM RECEBEU 02"
};
const fakeSettle02 = {
  ID: 32,
  group: "GROUP ID",
  value: 300,
  paidBy: "PAGOU",
  paidTo: "QUEM RECEBEU 03"
};
const fakeMembers = ["Fulano", "Ciclano", "Barbosa"];
const fakeGroups = [
  {
    _id: "11",
    groupName: "GRUPO 001",
    description: "bla bla bla grupo",
    owner: 200,
    members: fakeMembers,
    expense: [fakeExpense01, fakeExpense02],
    settles: [fakeSettle01, fakeSettle02]
  },
  {
    _id: "12",
    groupName: "GRUPO 002",
    description: "lalala",
    owner: 200,
    members: fakeMembers, //STRING
    expense: [fakeExpense02, fakeExpense01],
    settles: [fakeSettle02, fakeSettle01]
  }
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      isAuth: false,
      groups: fakeGroups,
      selectedGroup: fakeGroups[0]
    };
    // this.addMember = this.addMember.bind(this); ===> PRECISA???
    // this.addExpense = this.addExpense.bind(this);
    // this.addSettle = this.addSettle.bind(this);
    this.renderModalDelete = this.renderModalDelete.bind(this); //TODOS OS DELETES ESTAO AQUI
    this.getUser = this.getUser.bind(this);
    this.fetchGroups = this.fetchGroups.bind(this);
  }

  async fetchUser() {
    if (this.state.isAuth) {
      try {
        const loggedInUser = await auth.isAuth();
        this.setState({
          user: loggedInUser,
          isAuth: true
        });
      } catch (error) {
        console.log(error);
        this.setState({
          isAuth: false
        });
      }
    }
  }
  // não testado
  async fetchGroups() {
    try {
      const response = await groups.getAll();
      const { status, data } = response;
      console.log("data para os grupos:", data);
      if (status !== 200) {
        console.log("Erro api", data);
      } else {
        this.setState({
          groups: data
        });
      }
    } catch (error) {
      console.log(error);
    }
  }

  getUser(userObj) {
    this.setState({
      user: userObj,
      isAuth: true
    });
  }

  createGroup(newGroup) {
    this.state.groups.push(newGroup);
  }

  deleteOneElement = elementID => {
    //TODO deletar por ID ou ... name se for o caso do members
    // const index = this.state.selectedGroup.members.indexOf(memberID);
    // if (index > -1) {
    //   this.state.selectedGroup.members.splice(index, 1);
    // } return message = "Can not find ID Member";
  };
  renderModalEdit = (element, thisPage) => (
    <EditModal
      element={element}
      iAmInThisPage={thisPage}
      editGroup={
        (this.editGroup = (idOfGroupToRemove, newInfo) => {
          console.log("ESSE É O ID DO GRUPO PARA EDITAR", idOfGroupToRemove);
          console.log("ESSA SAO AS INFORMAÇÕES DO GRUPO PARA EDITAR", newInfo);
        })
      }
    />
  );
  renderModalDelete = (midleText, element, thisPage) => (
    <DeleteModal
      midleText={midleText}
      element={element}
      iAmInThisPage={thisPage}
      removeGroup={
        (this.removeGroup = idOfGroupToRemove => {
          console.log("ESSE É O ID DO GRUPO PARA REMOVER", idOfGroupToRemove);
        })
      }
      removeMember={
        (this.removeMember = memberToRemove => {
          console.log("ESSE É O MEMBRO PARA REMOVER", memberToRemove);

          const groupCopy = { ...this.state.selectedGroup };
          let idx = groupCopy.members.indexOf(memberToRemove);
          groupCopy.members.splice(idx, 1);
          this.setState({
            selectedGroup: groupCopy
          });
        })
      }
      removeExpense={
        (this.removeExpense = idToRemove => {
          console.log("ESSE É O ID DA DESPESA PARA REMOVER", idToRemove);
          const groupCopy = { ...this.state.selectedGroup };
          let idx;
          let test = 0;
          groupCopy.expense.map(e => {
            e.ID === idToRemove ? (idx = test) : (test += 1);
          }); //TODO Verificar a forma que o ID é passada
          groupCopy.expense.splice(idx, 1);
          this.setState({
            selectedGroup: groupCopy
          });
        })
      }
      // removeSettle={this.removeSettle(idToRemove)} //TODO
      // console.log("ESSE É O ID DO ACERTO PARA REMOVER",idToRemove);
    />
  );

  addGroup = newGroup => {
    const groupCopy = { ...this.state.selectedGroup };
    groupCopy.Groups.push(newGroup);

    this.setState({
      selectedGroup: groupCopy
    });
  };

  addMember = newMember => {
    const groupCopy = { ...this.state.selectedGroup };
    groupCopy.members.push(newMember);

    this.setState({
      selectedGroup: groupCopy
    });
  };

  addExpense = newExpense => {
    const groupCopy = { ...this.state.selectedGroup };
    groupCopy.expense.push(newExpense);

    this.setState({
      selectedGroup: groupCopy
    });
  };

  addSettle = newSettle => {
    const groupCopy = { ...this.state.selectedGroup };
    groupCopy.settles.push(newSettle);
    console.log(newSettle);

    this.setState({
      selectedGroup: groupCopy
    });
  };

  // <Route path="*" render={() => <Redirect to="/login" />} />

  render() {
    // TODO: essa primeira private route é um exemplo. Dashboard recebe element!
    return (
      <div className="App">
        <Switch>
          {/* teste */}
          <PrivateRoute
            exact
            path="/oi"
            authed={this.state.isAuth}
            fetchGroups={this.fetchGroups}
            component={Dashboard}
          />
          <Route
            exact
            path="/login"
            render={props => {
              return <Login getUser={this.getUser} {...props} />;
            }}
          />
          <Route
            exact
            path="/"
            render={() => <Index getUser={this.getUser} />}
          />
          <Route
            exact
            path="/dashboard"
            render={props => {
              return (
                <Dashboard
                  data={this.state}
                  {...props}
                  renderModalDelete={this.renderModalDelete}
                  renderModalEdit={this.renderModalEdit}
                />
              );
            }}
          />
          <Route
            exact
            path="/dashboard/pessoas"
            render={props => {
              return (
                <Pessoas
                  {...props}
                  oneGroup={this.state.selectedGroup}
                  renderModalDelete={this.renderModalDelete}
                  addMember={this.addMember}
                  removeMember={this.removeMember}
                />
              );
            }}
          />
          <Route
            exact
            path="/dashboard/despesas"
            render={props => {
              return (
                <Despesas
                  {...props}
                  oneGroup={this.state.selectedGroup}
                  renderModalDelete={this.renderModalDelete}
                  addExpense={this.addExpense}
                  removeExpense={this.removeExpense}
                />
              );
            }}
          />
          <Route
            exact
            path="/dashboard/acertos"
            render={props => {
              return (
                <Acertos
                  {...props}
                  oneGroup={this.state.selectedGroup}
                  renderModalDelete={this.renderModalDelete}
                  addSettle={this.addSettle}
                  removeSettle={this.removeSettle}
                />
              );
            }}
          />

{/* ROTAS P/ RELATÓRIOS */}
          <Route
            exact
            path="/reports"
            render={props => {
              return <Reports data={this.state} {...props} />;
            }}
          />  
            
        </Switch>
      </div>
    );
  }
}

export default App;
