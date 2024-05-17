import React, { Component } from 'react'

export default class About extends Component {
  render() {
      return (
        <div>
          <div>
          <p></p>
                            <strong>CHOOSE YOUR FAVORITE MOVIES</strong>
                            <p>&nbsp;</p>
              About
          </div>
          <div>
              <img src={require("../images/dev2.jpg")}
                   height="541"
                   width="721"
                   alt="devochka2"
                   style={{ marginBottom: '20px' }}
               />
          </div>
        </div>
      )
   }
}
