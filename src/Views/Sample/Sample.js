// Libraries
import React, { Component } from "react";

// Images
import images from "../../Images";

// Local components
import SampleForm from "./Components";

import "./Styles/Sample.less";

class Sample extends Component {
  /**
   * Callback: fired when form is submitting
   */
  handleSubmitForm = formData => {
    // Display received form data
    console.log({ formData });
  };

  render() {
    return (
      <div className="Sample">
        <header className="Sample-header">
          <img src={images.logo} className="Sample-logo" alt="logo" />
          <p>
            Edit <code>src/Views/Sample/Sample.js</code> and save to reload.
          </p>
          <a
            className="Sample-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>

          {/* Sample form */}
          <p>
            This is a react-form sample
          </p>
          <SampleForm onSubmit={this.handleSubmitForm} />
        </header>
      </div>
    );
  }
}

export default Sample;
