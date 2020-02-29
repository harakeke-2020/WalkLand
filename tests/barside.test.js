import React from 'react'
import renderWithRedux from './renderWithRedux'
import { fireEvent } from '@testing-library/react'

import '@testing-library/jest-dom/extend-expect'
import '@babel/polyfill'

import { SideBar } from '../client/components/SideBar'

test('Test the sideBar title is loading', async () => {
  const mockOnClick = jest.fn()
  const { getByTestId } = renderWithRedux(<SideBar activePage={mockOnClick} />)
  const sideBarItem = getByTestId('sideBarItem')
  expect(sideBarItem).toBeInTheDocument()
})

// test('Test the sideBar rating is loading', async () => {
//   const { getAllByTestId } = renderWithRedux(<SideBar />)
//   const rating = getAllByTestId('rating')
//   expect(rating).toHaveLength(4)
// })
