import React, { Component } from "react";

class Filter extends Component {
  render() {
    return (
      <>
        <label className="label">Filtrer: </label>
        <div className="control">
          <input
            name="filter"
            className="input is-primary"
            type="text"
            placeholder={this.props.placeholder}
            onChange={this.props.updateFilter}
          />
        </div>
      </>
    );
  }
}

export default Filter;
