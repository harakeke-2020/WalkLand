import React from 'react'
import renderWithRedux from '../tests/renderWithRedux'
import { render, fireEvent, queryByTestId, getByTestId } from '@testing-library/react'
import  DisplayMap  from '../client/components/DisplayMap'

test('shows that the map loads', async () => {
  const { getByTestId } = renderWithRedux(
    <DisplayMap
    />)
  const showDetails = getByTestId('loadMap')
  expect(showDetails).toBeInTheDocument()
 
})