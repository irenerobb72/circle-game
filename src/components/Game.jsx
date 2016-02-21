import React, { Component } from 'react'
import reactMixin from 'react-mixin'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { connect } from 'react-redux'
import {BigCircleContainer} from './BigCircle'

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
      <div className="game">
        <BigCircleContainer/>
      </div>
    )
  }
}


reactMixin(Game.prototype, PureRenderMixin)

function mapStateToProps(state) {
  return {
    isPlaying: state.get('playing'),
    gameover: state.get('gameover'),
  }
}

export const GameContainer = connect(mapStateToProps)(Game)
