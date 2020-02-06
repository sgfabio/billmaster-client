import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import './Dashboard.css';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userGroups: this.props.data.groups,
      renderModalDelete: this.props.renderModalDelete,
      renderModalEdit: this.props.renderModalEdit,
    };
  }
  render() {
    return (
      <>
        <h1>Seus Grupos</h1>
        {this.state.userGroups.map((e) => {
          return (
            <>
              <hr />
              <div className="row m-1 d-flex justify-content-center">
                <div class="col-md-7 d-flex flex-column mt-1">
                  <Link
                    to={`/groups/${e._id}`}
                    class="btn btn-outline-secondary "
                  >
                    {e.groupName} - {e.description}
                  </Link>
                </div>
                <div class="col-md-4 p-0 ml-1 d-flex flex-row justify-content-center mt-1">
                  <button class="btn btn-secondary mr-1">Relatório</button>
                  <button
                    data-toggle="modal"
                    data-target={`#editButton${e._id}`}
                    class="btn btn-warning mr-1"
                  >
                    Editar
                  </button>
                  <button
                    data-toggle="modal"
                    data-target={`#deleteButton${e._id}`}
                    class="btn btn-danger"
                  >
                    Excluir
                  </button>
                </div>
              </div>
              {this.props.renderModalDelete(e.groupName, e._id, 'dashboard')}
              {this.props.renderModalEdit(e, 'dashboard')}
            </>
          );
        })}
      </>
    );
  }
}

export default Dashboard;
