import React from 'react'
import renderWithRedux from '../tests/renderWithRedux'
import { render, fireEvent } from '@testing-library/react'

import '@testing-library/jest-dom/extend-expect'
import '@babel/polyfill'

import SideBar from '../client/components/SideBar'

test('Test the sideBar title is loading', async () => {
  const { getAllByTestId } = renderWithRedux(<SideBar />)
  const sideBarItem = getAllByTestId('sideBarItem')
  expect(sideBarItem).toHaveLength(4)
})

test('Test the sideBar rating is loading', async () => {
  const { getAllByTestId } = renderWithRedux(<SideBar />)
  const rating = getAllByTestId('rating')
  expect(rating).toHaveLength(4)
})