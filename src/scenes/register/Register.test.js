import React from 'react'
import { shallow } from '../../setupTest'

import Register from './Register'

describe('Render', () => {
  const wrapper = shallow(<Register />)

  it('Should render a correct title', () => {
    expect(wrapper.find('.page-title')).toHaveLength(1)
    expect(wrapper.find('.page-title').text()).toEqual('Register')
  })

  it('Should render a correct fields', () => {
  })

  it('Should render a correct buttons', () => {
  })
})

describe('Initial State', () => {
  const wrapper = shallow(<Register />)

  it('Should start with empty person', () => {
  })

  it('Should start with false on Snackbar', () => {
  })
})

describe('Interactions', () => {
  const wrapper = shallow(<Register />)

  it('Should save a person when click Register Button', () => {

    // Mock Service response
    const firebaseService = require('../../services/FirebaseService')
    jest
      .spyOn(firebaseService, "savePerson")
      .mockImplementation(() => Promise.resolve("Done"))

    // Change field values
    fillField(wrapper, '#person-document', '123')
    fillField(wrapper, '#person-name', 'abc')
    fillField(wrapper, '#person-city', 'cde')
    fillField(wrapper, '#person-age', '20')

    // Click Save Button
    wrapper.find('#save-button').simulate('click')

    expect(firebaseService.savePerson).toHaveBeenCalledWith({ document: '123', name: 'abc', city: 'cde', age: '20' })

  })

  it('Should clear a form when click Cancel Button', () => {
  })
})

function fillField(wrapper, field, value) {
  wrapper.find(field).simulate('change', {
    target: { value: value }
  })
}