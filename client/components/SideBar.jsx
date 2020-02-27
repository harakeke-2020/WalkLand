import React, { Component } from 'react'
import SideBarItem from './SideBarItem'

class SideBar extends Component {
  state = {
    walkDetails: [
      {
        id: 1,
        title: 'Goldies Bushwalk',
        mainPhoto: 'lolone',
        rating: '4.5'
      },
      {
        id: 2,
        title: 'Ice Walk',
        mainPhoto: 'loltwo',
        rating: '4'
      },
      {
        id: 3,
        title: 'Dessert walk',
        mainPhoto: 'lolthree',
        rating: '3'
      }
    ]
  }

  //this.props.statefromstore

  render () {
    return (
      <div>
        {this.state.walkDetails.map((walk, idx) => {
          return (
            <SideBarItem key={idx} walk={walk} />
          )
        })}
      </div>
    )
  }
}

export default SideBar
