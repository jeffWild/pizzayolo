import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errorMessage: undefined
    };
  }
  
  static getDerivedStateFromError(error) {
    console.log("getDerivedStateFromError", error)
    return { errorMessage: error.message }; // mise à jour du state
  }

  componentDidCatch(error, info) {
    console.log(error, info); // logging, notification, etc.
  }

  render() {
    if (this.state.errorMessage) {
      return <h1>Oops! {this.state.errorMessage}</h1>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;