import React from 'react'

import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'

chai.use(chaiEnzyme())
import {Map} from 'immutable'
import { mount, render, shallow } from 'enzyme'
import {Board} from '../../src/components/Board.jsx'


describe('<Board/>', () => {
  it('renders without any props', () => {
    const wrapper = shallow(<Board/>)
    expect(wrapper).to.be.ok
  })
  it('has a classname of board', () => {
    const wrapper = shallow(<Board/>)
    expect(wrapper).to.have.className('board')
  })
})
