import React from 'react'
import renderWithRedux from '../tests/renderWithRedux'
import { render, fireEvent } from '@testing-library/react'
import { SideBarItem } from '../client/components/SideBarItem'

test('test the button is present', async () => {
  const mockOnClick = jest.fn()

  const data = {
    id: 1,
    title: 'Goldie\'s Bushwalk',
    latitude: -36.845928,
    longitude: 174.474207,
    location: 'Auckland',
    mainPhoto: 'https://images.unsplash.com/photo-1517896470636-9242d3a38392?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1268&q=80',
    rating: 4.5,
    photos: [
      'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80',
      'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
      'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1440&q=80',
      'https://images.unsplash.com/photo-1504700610630-ac6aba3536d3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
    ],
    routeImage: 'https://i1.wp.com/exploringkiwis.com/wp-content/uploads/2019/04/Screen-Shot-2019-04-14-at-8.38.47-PM.png?resize=1393%2C800&ssl=1',
    info: {
      distance: 3.00,
      elevationGain: 200,
      timeTaken: 12352,
      difficulty: 3.5
    }
  }

  const { getByTestId } = renderWithRedux(
    <SideBarItem selectedWalk={mockOnClick}
      activePage={mockOnClick}
      walk={data}
      selectedWalkState={data}
      activePageState={'map'}
    />)
  const sideBarShowMapButton = getByTestId('showmapbutton')
  expect(sideBarShowMapButton).toBeInTheDocument()
})
