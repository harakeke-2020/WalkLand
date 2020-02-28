import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { activePage } from '../client/components/reducers/activePage'
import { render, fireEvent } from '@testing-library/react'

import '@testing-library/jest-dom/extend-expect'
import 'regenerator-runtime/runtime'
import '@babel/polyfill'
import LandingPage, { Landing } from '../client/components/LandingPage'
// the component to test
import LandingPage from '../client/components/LandingPage'

function renderWithRedux (
  ui,
  { initialState, store = createStore(activePage, initialState) } = {}
) {
  return {
    ...render(<Provider store={store}>{ui}</Provider>),
    // adding `store` to the returned utilities to allow us
    // to reference it in our tests (just try to avoid using
    // this to test implementation details).
    store
  }
}

test('loads and displays WalkLand ', async () => {
  const { getByText, getByTestId } = renderWithRedux(<LandingPage />)
  const title = getByTestId('title')
  expect(title).toHaveTextContent('Walkland')
})

test('The main button has the correct text and is present ', async () => {
  const { getByText, getByTestId } = renderWithRedux(<LandingPage />)
  const button = getByTestId('startButton')
  expect(button).toHaveTextContent('Click me')
  expect(button).toBeInTheDocument()
})

test('should call props.onClick when clicked', async () => {
  const mockOnClick = jest.fn()
  const { getByTestId } = renderWithRedux(<Landing activePage= {mockOnClick} />)
  fireEvent.click(getByTestId('startButton'))
  expect(mockOnClick).toHaveBeenCalledTimes(1)
})

test('props change to map', () => {
  const store = createStore(() => ({ activePage: 'test' }))
  const{ getByTestId } = renderWithRedux(<LandingPage />, { store })
  

})
