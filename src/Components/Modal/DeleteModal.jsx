import React, { Component } from "react";

class DeleteModal extends Component {
  constructor(props){
    super(props);
    this.state = {
      midleText: this.props.midleText,
      element: this.props.element,
      member: this.props.element,
      removeGroup:this.props.removeGroup,
      removeMember:this.props.removeMember,
      removeExpense:this.props.removeExpense,
      iAmInThisPage:this.props.iAmInThisPage,
    }
  }
  whatIsMyPage = (iAmInThisPage) => {
    switch (iAmInThisPage) {
      case "dashboard":
        this.state.removeGroup(this.state.element)
        break;
      case "member":
        this.state.removeMember(this.state.element)
        break;
      case "expense":
        this.state.removeExpense(this.state.element.ID)
        break;
      case "settle":
        console.log("Error");
        break;
      default:
          console.log("Delete mode is not defined");
        break;
    }

  }
  render(){
    return (
      <>
      {/* // CONFIRM EXCLUSION MODAL */}
      <div className="modal fade" id={`deleteButton${this.state.element}`} tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Deseja realmente remover?</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>

            <div className="modal-body">
              <form>
                <div className="form-group">
                  <label htmlFor="recipient" className="col-form-label">
                    {this.state.midleText}
                  </label>
                </div>
              </form>
            </div>

            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">
                {" "}Cancelar{" "}
              </button>
              <button onClick={() => this.whatIsMyPage(this.state.iAmInThisPage)} data-dismiss="modal" type="button" className="btn btn-danger">
                {""}Excluir{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )};
};

export default DeleteModal;
