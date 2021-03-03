import React from 'react'
import { render, screen } from '@testing-library/react'

import { calculateLevel } from '../utils'

import Achievements from './Achievements'
import { Provider } from 'react-redux'
import { fakeStore } from './testHelpers'

jest.mock('../utils', () => {
  return {
    calculateLevel: jest.fn()
  }
})

fakeStore.getState.mockImplementation(() => ({
  user: {}
}))

describe('TEST: Achievements component', () => {
  it('Tests Level 1 Achievement Badge rendered', async () => {
    calculateLevel.mockImplementation(() => { return 1 })
    render(<Provider store={fakeStore}><Achievements /></Provider>)

    const aspire = await screen.findAllByTestId('aspire')
    const nextBadge = await screen.findAllByTestId('next-badge')

    expect.assertions(2)

    expect(aspire).toHaveLength(3)
    expect(nextBadge).toHaveLength(1)
  })

  it('Tests Level 6 Achievement Badge rendered', async () => {
    calculateLevel.mockImplementation(() => { return 6 })
    render(<Provider store={fakeStore}><Achievements /></Provider>)

    const achieved = await screen.findAllByTestId('achieved')
    const aspire = await screen.findAllByTestId('aspire')
    const nextBadge = await screen.findAllByTestId('next-badge')

    expect.assertions(3)

    expect(aspire).toHaveLength(2)
    expect(achieved).toHaveLength(1)
    expect(nextBadge).toHaveLength(1)
  })

  it('Tests Level 10 Achievement Badge rendered', async () => {
    calculateLevel.mockImplementation(() => { return 10 })
    render(<Provider store={fakeStore}><Achievements /></Provider>)

    const achieved = await screen.findAllByTestId('achieved')
    const aspire = await screen.findAllByTestId('aspire')
    const nextBadge = await screen.findAllByTestId('next-badge')

    expect.assertions(3)

    expect(aspire).toHaveLength(1)
    expect(achieved).toHaveLength(2)
    expect(nextBadge).toHaveLength(1)
  })

  it('Tests Level 15 Achievement Badge rendered', async () => {
    calculateLevel.mockImplementation(() => { return 15 })
    render(<Provider store={fakeStore}><Achievements /></Provider>)

    const achieved = await screen.findAllByTestId('achieved')
    const nextBadge = await screen.findAllByTestId('next-badge')

    expect.assertions(2)

    expect(achieved).toHaveLength(3)
    expect(nextBadge).toHaveLength(1)
  })

  it('Tests Level 20 Achievement Badge rendered', async () => {
    calculateLevel.mockImplementation(() => { return 20 })
    render(<Provider store={fakeStore}><Achievements /></Provider>)

    const achieved = await screen.findAllByTestId('achieved')

    expect.assertions(1)

    expect(achieved).toHaveLength(4)
  })
})
