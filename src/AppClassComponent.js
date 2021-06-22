import React, { Component } from 'react'
import './App.css';
import ToyContainerClass from './ToyContainerClass'
import Search from './Search'
import Counter from './Counter'

export default class AppClassComponent extends Component {
    state = {
        searchTerm: "",
        toys: []
    }

    handleChange = (event) => {
        this.setState({searchTerm: event.target.value}) 
        //update state to be what we passed in as an argument
    }

    render() {
        return (
            <div className="App">
              <Counter/>
              <h1>React Toy Tale</h1>
              <Search handleChange={this.handleChange}/>
              <ToyContainerClass 
                searchTerm={this.state.searchTerm}
              />
            </div>
          )
    }
}





