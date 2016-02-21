import React, { Component } from 'react'
import reactMixin from 'react-mixin'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { connect } from 'react-redux'
import * as actionCreators from '../action_creators'

export class Game extends Component {
  constructor(props) {
    super(props)
  }
  toggleGame(e){
    e.preventDefault()
    this.props.toggleGame()
  }
  render() {

    return (
  }
}

reactMixin(Game.prototype, PureRenderMixin)(Game)
