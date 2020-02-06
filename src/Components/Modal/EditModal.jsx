import React, { Component } from "react";

class EditModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      iAmInThisPage: this.props.iAmInThisPage,
      element: this.props.element,
      editGroup: this.props.editGroup, //(idOfGroupToRemove, info)
      newInfoGroup: {
        groupName: "",
        description: "",
        data: ""
      }
    };
    this.handleChange=this.handleChange.bind(this);
  }
  handleChange = (event) => {
    const newInfoGroup = {...this.state.newInfoGroup};
    const { name, value } = event.target;
    newInfoGroup[name] = value;
    
    this.setState({newInfoGroup: newInfoGroup});
  };
  whatIsMyPage = iAmInThisPage => {
    switch (iAmInThisPage) {
      case "dashboard":
        this.state.editGroup(this.state.element._id, this.state.newInfoGroup)

        break;
      case "member":
        this.state.removeMember(this.state.element);
        break;
      case "expense":
        this.state.removeExpense(this.state.element.ID);
        break;
      case "settle":
        console.log("Error");
        break;
      default:
        console.log("Delete mode is not defined");
        break;
    }
  };
  renderThis(x) {
    switch (x) {
      case "dashboard":
        return (
          <div className="modal-body">
            <form>
              <div className="form-group text-left ">
                <label htmlFor="groupName" className="col-form-label">
                  Nome do grupo:
                </label>
                <input onChange={this.handleChange} type="text" className="form-control" id="groupName" name="groupName" />
                <label htmlFor="description" className="col-form-label">
                  Descrição:
                </label>
                <input onChange={this.handleChange} type="text" className="form-control" id="description" name="description" />
                <label htmlFor="data" className="col-form-label">
                  Data do evento:
                </label>
                <input onChange={this.handleChange} type="date" className="form-control" id="data" name="data"/>
              </div>
            </form>
          </div>
        );

        break;

      default:
        break;
    }
  }
  render() {
    return (
      <>
        <div
          className="modal fade"
          id={`editButton${this.state.element._id}`}
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalCenterTitle"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Deseja realmente remover?</h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>

              {this.renderThis(this.state.iAmInThisPage)}

              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  {" "}
                  Cancelar{" "}
                </button>
                <button
                  onClick={() => this.whatIsMyPage(this.state.iAmInThisPage)}
                  data-dismiss="modal"
                  type="button"
                  className="btn btn-primary"
                >
                  {""}Editar{" "}
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default EditModal;
