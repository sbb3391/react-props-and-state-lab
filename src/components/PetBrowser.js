/* eslint-disable no-unused-expressions */
import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  render() {

    const petCards = this.props.pets.map( onePet => {
      return <Pet pet={onePet} key={onePet.id} onAdoptPet={this.props.onAdoptPet} />
    })

    return <div className="ui cards">{petCards}</div>
  }
}

export default PetBrowser
