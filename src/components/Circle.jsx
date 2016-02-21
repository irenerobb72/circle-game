import React, { Component } from 'react'
import reactMixin from 'react-mixin'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { connect } from 'react-redux'
import {GameContainer} from './Game.jsx'

export class Circle extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="circleBoard">

      </div>
    )
  }
}

reactMixin(Circle.prototype, PureRenderMixin)
