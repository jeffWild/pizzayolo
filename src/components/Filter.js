import React, { Component } from "react";

class Filter extends Component {
  render() {
    return (
      <>
        <label className="label">Filtrer: </label>
        <div className="control">
          <input
            className="input is-primary"
            type="text"
            placeholder="nom de la pizza"
          />
        </div>
      </>
    );
  }
}

export default Filter;
