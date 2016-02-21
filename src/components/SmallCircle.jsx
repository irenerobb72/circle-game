import React, { Component } from 'react'
import reactMixin from 'react-mixin'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { connect } from 'react-redux'

export class SmallCircle extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="smallcircles">
      </div>
    )
  }
}

reactMixin(SmallCircle.prototype, PureRenderMixin)
