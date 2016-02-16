import _ from "lodash";
import React from "react";
import {fibonacci} from './../lib/fibonacci'

const Fibonacci = React.createClass({
  propTypes: {
    length: React.PropTypes.number.isRequired
  },

  render: function () {
    return (
      <div>
        { 
          fibonacci(this.props.length).map((current, index) => {
            return (
              <div key={index}>{current}</div>
            )
          })
        }
      </div>
    );
  }
});

export default Fibonacci;
