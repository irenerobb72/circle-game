import React from 'react'

import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'

chai.use(chaiEnzyme())
import {Map} from 'immutable'
import { mount, render, shallow } from 'enzyme'
import {SmallCircle} from '../../src/components/SmallCircle.jsx'


describe('<SmallCircle/>', () => {
  it('renders without any props', () => {
    const wrapper = shallow(<SmallCircle/>)
    expect(wrapper).to.be.ok
  })
  it('has a classname of smallcircles', () => {
    const wrapper = shallow(<SmallCircle/>)
    expect(wrapper).to.have.className('smallcircles')
  })
})
