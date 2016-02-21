import React, { Component } from 'react'
import reactMixin from 'react-mixin'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { connect } from 'react-redux'

export class BigCircle extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="bigcircles">
        <svg height="22000" width="222000">
          <circle r="200"></circle>
          <circle r="200"></circle>
          <circle r="200"></circle>
        </svg>
      </div>
    )
  }
}

reactMixin(BigCircle.prototype, PureRenderMixin)
