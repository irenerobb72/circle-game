function end(state) {
  let newState = state.update('gameover', (bool) => true)
  newState = newState.update('playing', (bool) => false)
  return new state
}

export default end
