import React, { Component } from 'react'
import SideBarItem from './SideBarItem'

class SideBar extends Component {
  state = {
    walkDetails: [
      {
        id: 1,
        title: 'Goldies Bushwalk',
        mainPhoto: 'lol',
        rating: '4.5'
      },
      {
        id: 2,
        title: 'Ice Walk',
        mainPhoto: 'lol',
        rating: '4'
      },
      {
        id: 3,
        title: 'Dessert walk',
        mainPhoto: 'lol',
        rating: '3'
      }
    ]
  }

  render () {
    return (
      <div>
        {this.state.walkDetails.map((walk, idx) => {
          return (
            <SideBarItem key={idx} title={walk.title} mainPhoto={walk.mainPhoto} rating={walk.rating} />
          )
        })}
      </div>
    )
  }
}

export default SideBar
