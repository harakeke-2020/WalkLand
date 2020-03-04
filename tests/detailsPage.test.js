import React from 'react'
import './setup'
import renderWithRedux from '../tests/renderWithRedux'
import { render, fireEvent } from '@testing-library/react'
import Details from '../client/components/Details'

import '@testing-library/jest-dom/extend-expect'
import '@babel/polyfill'

test('loads and displays WalkLand ', async () => {

  const { getByTestId } = renderWithRedux(<Details />)
  const details = getByTestId('detailsTitle')
  expect(details).toHaveClass('details-walktitle')
})