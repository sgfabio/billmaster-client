import React, { Component } from "react";

class DeleteModal extends Component {
  constructor(props){
    super(props);
    this.state = {
      midleText: this.props.midleText,
      member: this.props.element,
    }
  }
  render(){
    console.log('oioioioioi')
    console.log(this.state.member)
    return (
      <>
      {/* // CONFIRM EXCLUSION MODAL */}
      <div className="modal fade" id={`deleteButton${this.props.element._id}`} tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
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
              <button onClick={() => console.log("BOTAO DELETE MODAL")} type="button" className="btn btn-danger">
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
