import React from 'react'
import { Provider } from 'react-redux'
import { screen, render, fireEvent, cleanup } from '@testing-library/react'

import AddHabit from './AddHabit'
import { saveHabit } from '../actions'
import { fakeStore } from '../testHelpers'
import { test } from '../../server/db/knexfile'

jest.mock('../actions', () => ({
  saveHabit: jest.fn()
}))

describe('<AddHabit />', () => {
  let input 
  beforeEach(() => {
    render(<Provider store={fakeStore}><AddHabit /></Provider>)
    input = screen.getAllByRole('textbox')
    fireEvent.change(input, { target: { value: 'new habit' } })
    fireEvent.submit(input)
  })
  test('submitting an input dispatches saveHabit action', () => {
    expect(fakeStore.dispatch).toHaveBeenCalledWith(fakeAction)
    expect(saveHabit).toHaveBeenCalledWith('new task')
  })
  test('submitting input clears input value', () => {
    expect(input.value).toBe('')
  })
})