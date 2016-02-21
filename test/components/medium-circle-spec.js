import React from 'react'

import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'

chai.use(chaiEnzyme())
import {Map} from 'immutable'
import { mount, render, shallow } from 'enzyme'
import {MediumCircle} from '../../src/components/MediumCircle.jsx'


describe('<MediumCircle/>', () => {
  it('renders without any props', () => {
    const wrapper = shallow(<MediumCircle/>)
    expect(wrapper).to.be.ok
  })
  it('has a classname of mediumcircles', () => {
    const wrapper = shallow(<MediumCircle/>)
    expect(wrapper).to.have.className('mediumcircles')
  })
})
