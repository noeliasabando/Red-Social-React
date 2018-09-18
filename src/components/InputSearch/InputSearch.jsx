import React, { Component } from "react";
import "./InputSearch.css";

class InputSearch extends Component {
  render() {
    return (
      <div className="container buscador">
        <div className="row">
          <div className="col-12 text-center">
            <div id="custom-search-input">
              <div className="input-group col-md-12">
                <input type="text" className="  search-query form-control" placeholder="Buscar amigos" />
                <span className="input-group-btn">
                  <button className="botonBusc" type="button">
                    <i className="fas fa-search"></i>
                  </button>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default (InputSearch);