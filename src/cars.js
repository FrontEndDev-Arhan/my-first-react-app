import React, { Component } from "react";

import PropTypes from "prop-types";

class Cars extends Component {
  static get propTypes() {
    return {
      info: PropTypes.array,
    };
  }
  static get defaultProps() {
    return {
      info: [{ id: 1, name: "John", age: 26 }],
    };
  }

  render() {
    const info = this.props.info;
    return (
      <ol style={{ listStyleType: "none" }}>
        {info.map((item) => (
          <React.Fragment key={item.id}>
            <React.Fragment>
              <li>Student number {item.id} details...</li>
              <br />
              <li>{`My age is ${item.id * 10}`}</li>
              <li>{`${item.name} is my name`}</li>
              <li>{`${item.age} is my age`}</li>
              <br />
            </React.Fragment>
            <React.Fragment>
              <li>{item.id}</li>
              <li>{item.id}</li>
              <li>{item.id}</li>
            </React.Fragment>
          </React.Fragment>
        ))}
      </ol>
    );
  }
}

export { Cars };
