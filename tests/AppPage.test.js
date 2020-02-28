import React from 'react'
import { createStore } from 'redux'
import combineReducers from '../client/components/reducers/index'
import { Provider } from 'react-redux'

import { render } from '@testing-library/react'

import '@testing-library/jest-dom/extend-expect'
import '@babel/polyfill'

import App from '../client/components/App'

function renderWithRedux (
  ui,
  { initialState, store = createStore(combineReducers, initialState) } = {}
) {
  return {
    ...render(<Provider store={store}>{ui}</Provider>),

    store
  }
}

// test('loads and displays sidebarcontainer', async () => {
//   const { getByTestId } = renderWithRedux(<App />)
//   const kev = getByTestId('whatever')
//   expect(kev).toHaveClass('sideBarContainer')
// })
test('loads and displays app', async () => {
  const { getByTestId } = renderWithRedux(<App />)
  const appContainer = getByTestId('appContainer')
  expect(appContainer).toHaveClass('appContainer')
})

