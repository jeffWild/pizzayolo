import React, { Component } from "react";

class Pizza extends Component {
  render() {
    return (
      <>
        <div class="card-content">
          <div class="media">
            <div class="media-content">
              <div class="columns">
                <div class="column is-9">
                  <p class="title is-4">{this.props.nom}</p>
                </div>
                <div class="column is-3">
                  <p class="title is-4 has-text-primary">{this.props.price}</p>
                </div>
              </div>
            </div>
          </div>
          <div class="content">{this.props.ingredients}</div>
          <button type="button" class="button is-primary is-small is-rounded">
            Ajouter au panier
          </button>
        </div>
      </>
    );
  }
}

export default Pizza;
