import React from 'react'

import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'

chai.use(chaiEnzyme())
import {Map} from 'immutable'
import { mount, render, shallow } from 'enzyme'
import {TinyCircle} from '../../src/components/TinyCircle.jsx'


describe('<TinyCircle/>', () => {
  it('renders without any props', () => {
    const wrapper = shallow(<TinyCircle/>)
    expect(wrapper).to.be.ok
  })
  it('has a classname of tinycircles', () => {
    const wrapper = shallow(<TinyCircle/>)
    expect(wrapper).to.have.className('tinycircles')
  })
})
