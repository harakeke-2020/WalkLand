import React, { Component } from 'react'

const mockData = {
  id: 4,
  title: 'Goldie\'s Bushwalk',
  location: 'Muriwai',
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

class Details extends Component {
  state = props.selected
  render () {
    return (
      <div>
        <h3>{mockData.title}</h3>
        <h5>{mockData.location}</h5>
        <ul>
          {
            mockData.photos.map(item => (<img src={item} height="42" width="42">))
          }
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    selected: state.selected
  }
}

export default connect(mapStateToProps)(Details)
