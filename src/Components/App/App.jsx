import React, { Component } from 'react';
import { Switch, Route, Link, Redirect } from 'react-router-dom';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { auth } from '../../util/api';
import { groups } from '../../util/api';
// Components
import Index from '../Index/Index'; // isso precisa morrer
import Navbar from '../Navbar/Navbar';

import Login from '../Login/Login';
import Signup from '../Signup/Signup';

import Dashboard from '../Dashboard/Dashboard';
import Pessoas from '../DashPessoas/DashPessoas';
import Despesas from '../DashDespesas/DashDespesas';
import Acertos from '../DashAcertos/DashAcertos';
import DeleteModal from '../Modal/DeleteModal';
import PrivateRoute from '../PrivateRoute/PrivateRoute';

// fake data
const fakeExpense01 = {
  ID: 21,
  group: '000',
  description: 'ABC EXPENSE',
  value: 1000,
  split: {
    paidBy: 'FULANO',
    divideBy: ['CICLANO-01', 'CICLANO-02'],
  },
};
const fakeExpense02 = {
  ID: 21,
  group: '000',
  description: 'ABC EXPENSE 0002',
  value: 1000,
  split: {
    paidBy: 'FULANO 02',
    divideBy: ['CICLANO-01', 'CICLANO-02'],
  },
};
const fakeSettle01 = {
  ID: 31,
  group: 'GROUP ID',
  value: 200,
  paidBy: 'PAGOOUUU',
  paidTo: 'QUEEMMMM RECEBEU',
};
const fakeSettle02 = {
  ID: 32,
  group: 'GROUP ID',
  value: 300,
  paidBy: 'PAGOOUUU',
  paidTo: 'QUEEMMMM RECEBEU',
};
const fakeMembers = ['Fulano', 'Ciclano', 'Barbosa'];
const fakeGroups = [
  {
    ID: 11,
    groupName: 'GRUPO 001',
    description: 'bla bla bla grupo',
    owner: 200,
    members: fakeMembers,
    expense: [fakeExpense01, fakeExpense02],
    settles: [fakeSettle01, fakeSettle02],
  },
  {
    ID: 12,
    groupName: 'GRUPO 002',
    description: 'lalala',
    owner: 200,
    members: fakeMembers, //STRING
    expense: [fakeExpense02, fakeExpense01],
    settles: [fakeSettle02, fakeSettle01],
  },
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      isAuth: false,
      groups: fakeGroups,
      selectedGroup: fakeGroups[0],
    };
    this.addMember = this.addMember.bind(this);
    this.addExpense = this.addExpense.bind(this);
    this.addSettle = this.addSettle.bind(this);
    this.getUser = this.getUser.bind(this);
    this.fetchGroups = this.fetchGroups.bind(this);
  }

  async fetchUser() {
    if (this.state.isAuth === false) {
      try {
        const loggedInUser = await auth.isAuth();
        this.setState({
          user: loggedInUser,
          isAuth: true,
        });
      } catch (error) {
        console.log(error);
        // this.setState({
        //   user: null,
        //   isAuth: false,
        // });
      }
    }
  }

  getUser(userObj) {
    if (userObj === null) {
      this.setState({
        user: null,
        isAuth: false,
      });
    } else {
      this.setState({
        user: userObj,
        isAuth: true,
      });
    }
  }

  // não testado
  async fetchGroups() {
    try {
      const response = await groups.getAll();
      const { status, data } = response;
      console.log('data para os grupos:', data);
      if (status !== 200) {
        console.log('Erro api', data);
      } else {
        this.setState({
          groups: data,
        });
      }
    } catch (error) {
      console.log(error);
    }
  }

  createGroup(newGroup) {
    this.state.groups.push(newGroup);
  }

  deleteOneElement = (elementID) => {
    //TODO deletar por ID ou ... name se for o caso do members
    // const index = this.state.selectedGroup.members.indexOf(memberID);
    // if (index > -1) {
    //   this.state.selectedGroup.members.splice(index, 1);
    // } return message = "Can not find ID Member";
  };
  renderModalDelete = (midleText, element) => (
    <DeleteModal
      // deleteOneElement={this.deleteOneElement}
      midleText={midleText}
      element={element}
    />
  );

  addMember = (newMember) => {
    const groupCopy = { ...this.state.selectedGroup };
    groupCopy.members.push(newMember);

    this.setState({
      selectedGroup: groupCopy,
    });
  };

  addExpense = (newExpense) => {
    const groupCopy = { ...this.state.selectedGroup };
    groupCopy.expense.push(newExpense);

    this.setState({
      selectedGroup: groupCopy,
    });
  };

  addSettle = (newSettle) => {
    const groupCopy = { ...this.state.selectedGroup };
    groupCopy.settles.push(newSettle);

    this.setState({
      selectedGroup: groupCopy,
    });
  };
  // <Route path="*" render={() => <Redirect to="/login" />} />

  render() {
    this.fetchUser();
    return (
      <div className="App">
        <Navbar userInSession={this.state.user} getUser={this.getUser} />
        {this.state.isAuth ? (
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
              render={(props) => {
                return <Login getUser={this.getUser} {...props} />;
              }}
            />
            <Route
              exact
              path="/signup"
              render={(props) => {
                return <Signup getUser={this.getUser} {...props} />;
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
              render={(props) => {
                return <Dashboard data={this.state} {...props} />;
              }}
            />
            <Route
              exact
              path="/dashboard/pessoas"
              render={(props) => {
                return (
                  <Pessoas
                    {...props}
                    oneGroup={this.state.selectedGroup}
                    renderModalDelete={this.renderModalDelete}
                    addMember={this.addMember}
                  />
                );
              }}
            />
            <Route
              exact
              path="/dashboard/despesas"
              render={(props) => {
                return (
                  <Despesas
                    {...props}
                    oneGroup={this.state.selectedGroup}
                    renderModalDelete={this.renderModalDelete}
                    addExpense={this.addExpense}
                  />
                );
              }}
            />
            <Route
              exact
              path="/dashboard/acertos"
              render={(props) => {
                return (
                  <Acertos
                    {...props}
                    oneGroup={this.state.selectedGroup}
                    renderModalDelete={this.renderModalDelete}
                    addSettle={this.addSettle}
                  />
                );
              }}
            />
          </Switch>
        ) : (
          <Switch>
            <Route
              exact
              path="/signup"
              user={this.state.user}
              render={(props) => <Signup getUser={this.getUser} {...props} />}
            />
            <Route
              exact
              path="/"
              user={this.state.user}
              render={(props) => <Login getUser={this.getUser} {...props} />}
            />
          </Switch>
        )}
      </div>
    );
  }
}

export default App;
