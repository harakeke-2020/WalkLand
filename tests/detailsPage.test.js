import React from 'react'
import './setup'
import renderWithRedux from '../tests/renderWithRedux'
import { render, fireEvent, queryByTestId, getByTestId } from '@testing-library/react'
import Details from '../client/components/Details'

import '@testing-library/jest-dom/extend-expect'
import '@babel/polyfill'


const mockData = [{
  id: 1,
  title: 'Goldie\'s Bushwalk',
  latitude: -36.845928,
  longitude: 174.474207,
  location: 'Muriwai',
  mainPhoto: 'https://cdn-assets.alltrails.com/uploads/photo/image/18238463/extra_large_402813450dbfc0f7a66096692f0f543c.jpg',
  photos: [
    'https://cdn-assets.alltrails.com/uploads/photo/image/18238463/extra_large_402813450dbfc0f7a66096692f0f543c.jpg',
    'https://cdn-assets.alltrails.com/uploads/photo/image/22578955/extra_large_074a071686927417546e8646bff479ed.jpg',
    'https://cdn-assets.alltrails.com/uploads/photo/image/21824864/extra_large_f1eb12e2bbed6d49dff05753dcf6d83c.jpg',
    'https://cdn-assets.alltrails.com/uploads/photo/image/25533958/extra_large_ef609dc231603d2ecdfac3e4a30beefe.jpg'
  ],
  routeImage: 'http://i.imgur.com/tudbIvd.jpg',
  distance: '4.5Kms',
  elevationGain: 200,
  timeTaken: '2 Hours',
  difficulty: 'Intermediate',
  Surface: 'There are numerous stream crossings',
  description: 'Goldies Bush and Mokoroa Falls Loop is a 6.0 kilometer lightly trafficked loop trail located near Auckland, Auckland, New Zealand that features a waterfall and is rated as moderate. The trail is primarily used for hiking, walking, and nature trips.'
}]

test('loads and displays WalkLand ', () => {
  const { queryByTestId } = renderWithRedux(<Details selectedWalk={mockData}  />)
  const details = queryByTestId('detailsTitle')
  expect(details).toBeInTheDocument
})

// test('Loads and displays description ', () => {
//   const { getByTestId, rerender } = renderWithRedux(<Details selectedWalk={mockData}  />)
//   const description = getByTestId('description')
//   rerender(<Details selectedWalk={mockData}/>)
//   expect(description).toBeInTheDocument()
// })

