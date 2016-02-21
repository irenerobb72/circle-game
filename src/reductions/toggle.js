function toggle(state) {
  return state.set('playing', !state.get('playing'))
}

export default toggle
