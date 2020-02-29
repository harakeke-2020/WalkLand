import React from 'react'
import renderWithRedux from '../tests/renderWithRedux'

import '@testing-library/jest-dom/extend-expect'
import '@babel/polyfill'

import App from '../client/components/App'

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

// test('loads and displays app', () => {
//   const { getByText } = renderWithRedux(<App />)
//   const appContainer = getByText('sidebar')
//   expect(appContainer).toBeInTheDocument()
// })

// test('loads and displays app', () => {
//   const { getByTestId } = renderWithRedux(<DisplayMap />)
//   const appContainer = getByTestId('kev')
//   expect(appContainer).toBeInTheDocument()
// })
