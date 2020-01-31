import React, { Component } from "react";
import { Link } from "react-router-dom";

const DashDespesas = props => {
  return (
                <div class="dashMainContent">
                    <!-- Add bills -->
                    <h2>Adicionar nova despesa:</h2>
                    <div class="dashAddBills d-flex justify-content-between align-items-end flex-wrap">
                        <div class="form-group text-left col-lg-4 mt-1 mb-0 p-0">
                            Nome:
                            <input type="text" class="form-control" id="exampleInputPassword1">
                        </div>
                        <div class="form-group text-left col-lg-5 mb-0 mt-1 p-0">
                            E-mail:
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                        </div>
                        <button type="submit" class="btn btn-warning mt-2 col-lg-2">Submit</button>
                    </div>
                    <hr/>
                    <!-- Bills list -->
                    <div class="dashBillsList">
                        <div class="row">
                            <div class="col-lg-6 p-0 my-1">
                                <button class="btn btn-outline-dark col-10">NAME 01</button> <button class="btn btn-danger col-1">X</button>
                            </div>
                            <div class="col-lg-6 p-0 my-1">
                                <button class="btn btn-outline-dark col-10">NAME 01</button> <button class="btn btn-danger col-1">X</button>
                            </div>
                            <div class="col-lg-6 p-0 my-1">
                                <button class="btn btn-outline-dark col-10">NAME 01</button> <button class="btn btn-danger col-1">X</button>
                            </div>
                            <div class="col-lg-6 p-0 my-1">
                                <button class="btn btn-outline-dark col-10">NAME 01</button> <button class="btn btn-danger col-1">X</button>
                            </div><div class="col-lg-6 p-0 my-1">
                                <button class="btn btn-outline-dark col-10">NAME 01</button> <button class="btn btn-danger col-1">X</button>
                            </div>
                            <div class="col-lg-6 p-0 my-1">
                                <button class="btn btn-outline-dark col-10">NAME 01</button> <button class="btn btn-danger col-1">X</button>
                            </div>
                            <div class="col-lg-6 p-0 my-1">
                                <button class="btn btn-outline-dark col-10">NAME 01</button> <button class="btn btn-danger col-1">X</button>
                            </div>
                            <div class="col-lg-6 p-0 my-1">
                                <button class="btn btn-outline-dark col-10">NAME 01</button> <button class="btn btn-danger col-1">X</button>
                            </div>
                        </div>
                    </div>
                </div> 
  );
};


export default DashDespesas;