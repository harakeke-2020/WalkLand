import React, { Component } from 'react'

const mockdata = {
  id: 4,
  title: 'Goldie\'s Bushwalk',
  location: Muriwai,
  mainPhoto: "https://images.unsplash.com/photo-1517896470636-9242d3a38392?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1268&q=80"
  rating: 4.5
  photos: [
    "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80", 
    "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80", 
    "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1440&q=80", 
    "https://images.unsplash.com/photo-1504700610630-ac6aba3536d3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
    ],
routeImage: a string pointing to a freely hosted image of the route of the hike,
info: an object that looks like this:
{
distance: a decimal point number (data-type: float) with the distance of the walk in km's
ascent: a number showing the number of vertical metres climbed on the hike
descent: a number showing the number of vertical metres descended on the hike
timeTaken: number of seconds to complete the hike (convert this to hh:mm:ss in component)
difficulty: number showing the difficulty rating of the hike (min: 1, max: 5)
}
}

export default class Details extends Component {
  render() {
    return (
      <div>
        
      </div>
    )
  }
}
