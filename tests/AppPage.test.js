import React from 'react'
import { createStore } from 'redux'
import combineReducers from '../client/components/reducers/index'
import { Provider } from 'react-redux'

import { render } from '@testing-library/react'

import '@testing-library/jest-dom/extend-expect'
import '@babel/polyfill'

import App from '../client/components/App'
import DisplayMap from '../client/components/DisplayMap'

function renderWithRedux (
  ui,
  { initialState, store = createStore(combineReducers, initialState) } = {}
) {
  return {
    ...render(<Provider store={store}>{ui}</Provider>),

    store
  }
}

test('loads and displays sidebarcontainer', async () => {
  const { getByTestId } = renderWithRedux(<App />)
  const sideBarContainer = getByTestId('landing')
  expect(sideBarContainer).toHaveClass('landing-page')
})

test('loads and displays app', async () => {
  const { getByTestId } = renderWithRedux(<App />)
  const appContainer = getByTestId('appContainer')
  expect(appContainer).toHaveClass('appContainer')
})

/* both of these do not work, they cant find the test by id
*/

// test('loads and displays app', () => {
//   const { getByText } = renderWithRedux(<App />)
//   const appContainer = getByText('kev')
//   expect(appContainer).toBeInTheDocument()
// })

// test('loads and displays app', () => {
//   const { getByTestId } = renderWithRedux(<DisplayMap />)
//   const appContainer = getByTestId('kev')
//   expect(appContainer).toBeInTheDocument()
// })
