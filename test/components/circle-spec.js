import React from 'react'

import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'

chai.use(chaiEnzyme())
import {Map} from 'immutable'
import { mount, render, shallow } from 'enzyme'
import {Circle} from '../../src/components/Circle.jsx'


describe('<Circle/>', () => {
  it('renders without any props', () => {
    const wrapper = shallow(<Circle/>)
    expect(wrapper).to.be.ok
  })
})
