import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  changeType = (newFilterType) => {
    this.setState({
      filters: {
        type: newFilterType
      }
    })
  }

  getPetList = () => {
    const fetchAddress = () => {
      return this.state.filters.type === "all" ? '/api/pets' : `/api/pets?type=${this.state.filters.type}`
    }

    fetch(fetchAddress())
    .then(resp => resp.json())
    .then((json) => {
      this.setState({
        pets: json
      }, () => console.log(this.state.pets))
    })
  }

  adoptPet = (id) => {
    debugger;
    console.log(this.state.pets)
    const foundPet = this.state.pets.find((pet) => pet.id === id)

    foundPet.isAdopted = true;
  }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.changeType}
              onFindPetsClick={this.getPetList}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.adoptPet}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
