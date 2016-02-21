import React from 'react'

import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'

chai.use(chaiEnzyme())
import {Map} from 'immutable'
import { mount, render, shallow } from 'enzyme'
import {BigCircle} from '../../src/components/BigCircle.jsx'


describe('<BigCircle/>', () => {
  it('renders without any props', () => {
    const wrapper = shallow(<BigCircle/>)
    expect(wrapper).to.be.ok
  })
  it('has a classname of bigcircles', () => {
    const wrapper = shallow(<BigCircle/>)
    expect(wrapper).to.have.className('bigcircles')
  })
})
