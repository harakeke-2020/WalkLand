import React from 'react'
import renderWithRedux from '../tests/renderWithRedux'
import { render, fireEvent } from '@testing-library/react'
import LandingPage, { Landing } from '../client/components/LandingPage'

import '@testing-library/jest-dom/extend-expect'
import '@babel/polyfill'

test('loads and displays WalkLand ', async () => {
  const { getByTestId } = renderWithRedux(<LandingPage />)
  const title = getByTestId('title')
  expect(title).toHaveTextContent('Walkland')
})