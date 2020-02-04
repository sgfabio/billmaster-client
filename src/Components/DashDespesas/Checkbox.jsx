import React from "react";

export const CheckBox = props => {
  return (
    <li className="d-flex mx-auto dropdown-item ">
      <input className="mx=auto my-auto" key={props.id} id={props.id} onClick={props.handleCheckChieldElement} type="checkbox" checked={props.isChecked} name={props.name} />
      <label className="dropdown-item mx-0 my-auto bg-transparent" for={props.id} > {props.name} </label>
    </li>
  );
};

export default CheckBox;
