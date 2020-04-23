import React from 'react'
import {shallow} from 'enzyme'

import Header from '../Header'

describe('Header', () => {
  const wrapper = shallow(<Header />)

  it('should render the component', () => {
    expect(wrapper.find('.header').exists()).toBe(true)
  })

  it('should render the logo', () => {
    expect(wrapper.find('.logo__icon').exists()).toBe(true)
  })

  it('should render the heading', () => {
    expect(wrapper.find('.header__legend').text())
      .toBe('We have over 2,000 songs, ready for you. Search, play and enjoy.  Start typing and search through our catalog')
  })
})
