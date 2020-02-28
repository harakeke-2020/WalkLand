import React from 'react'
import { createStore } from 'redux'
import combineReducers from '../client/components/reducers/index'
import { Provider } from 'react-redux'

import { render, fireEvent } from '@testing-library/react'

import '@testing-library/jest-dom/extend-expect'
import '@babel/polyfill'

import LandingPage, { Landing } from '../client/components/LandingPage'

function renderWithRedux (
  ui,
  { initialState, store = createStore(combineReducers, initialState) } = {}
) {
  return {
    ...render(<Provider store={store}>{ui}</Provider>),

    store
  }
}

test('loads and displays WalkLand ', async () => {
  const { getByTestId } = renderWithRedux(<LandingPage />)
  const title = getByTestId('title')
  expect(title).toHaveTextContent('Walkland')
})

test('The main button has the correct text and is present ', async () => {
  const { getByTestId } = renderWithRedux(<LandingPage />)
  const button = getByTestId('startButton')
  expect(button).toHaveTextContent('Walk through Auckland')
  expect(button).toBeInTheDocument()
})

test('should call props.onClick when clicked', async () => {
  const mockOnClick = jest.fn()
  const { getByTestId } = renderWithRedux(<Landing activePage= {mockOnClick} />)
  fireEvent.click(getByTestId('startButton'))
  expect(mockOnClick).toHaveBeenCalledTimes(1)
})

test('video exsists', async () => {
  const { getByTestId } = renderWithRedux(<LandingPage />)
  const video = getByTestId('video')
  expect(video).toBeInTheDocument()
  expect(video).toHaveAttribute('src')
})

test('video has className fullscreen-bg', async () => {
  const { getByTestId } = renderWithRedux(<LandingPage />)
  const fullscreen = getByTestId('fullscreen')
  expect(fullscreen).toHaveClass('fullscreen-bg')
})

test('button has classname ', async () => {
  const { getByTestId } = renderWithRedux(<LandingPage />)
  const startbutton = getByTestId('startButton')
  expect(startbutton).toHaveClass('btn')
})
