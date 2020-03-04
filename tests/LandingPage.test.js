import React from 'react'
import renderWithRedux from '../tests/renderWithRedux'
import { render, fireEvent } from '@testing-library/react'
import LandingPage, { Landing } from '../client/components/LandingPage'

import '@testing-library/jest-dom/extend-expect'
import '@babel/polyfill'

test('loads and displays WalkLand ', async () => {
  const { getByTestId } = renderWithRedux(<LandingPage />)
  const title = getByTestId('image')
  expect(title).toHaveAttribute('src')
  expect(title).toBeInTheDocument()
})

test('The main button has the correct text and is present ', async () => {
  const { getByTestId } = renderWithRedux(<LandingPage />)
  const button = getByTestId('startButton')
  expect(button).toHaveTextContent('START JOURNEY')
  expect(button).toBeInTheDocument()
})

test('should call props.onClick when clicked', async () => {
  const mockOnClick = jest.fn()
  const { getByTestId } = renderWithRedux(<Landing activePage= {mockOnClick} />)
  fireEvent.click(getByTestId('startButton'))
  expect(mockOnClick).toHaveBeenCalledTimes(1)
})

test('button has classname ', async () => {
  const { getByTestId } = renderWithRedux(<LandingPage />)
  const startbutton = getByTestId('startButton')
  expect(startbutton).toHaveClass('btn')
})
