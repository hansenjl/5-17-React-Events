import React, { Component } from 'react'
import ToyCard from './ToyCard'
import ToyForm from './ToyForm'

export default class ToyContainerClass extends Component{

    // constructor(props){
    //     this.props = props 
    // }
    state = {
        toys: []
    }

    componentDidMount(){
        fetch('http://localhost:3004/toys')
       .then(r => r.json())
       .then(data => this.setState({toys: data}))
    }

    addLike = (id) => {
        // spread operator 
        // where is the one we want to update located in the array of toys?
        const idx = this.state.toys.findIndex(t => t.id === id )
        const toysBefore = [...this.state.toys.slice(0,idx)]
        const foundToy = this.state.toys[idx]
        const toysAfter = [...this.state.toys.slice(idx+1)]
        this.setState({toys: [...toysBefore, {...foundToy, likes: foundToy.likes + 1}, ...toysAfter]})
    }

    renderToys(){
        // we want only the toys who have a name that includes the search team
        const filteredToys = this.state.toys.filter((toy) => toy.name.toLowerCase().includes(this.props.searchTerm.toLowerCase()))
    
         return filteredToys.map( (toy,index) => {
            return (
                <ToyCard 
                    key={index} 
                    id={toy.id}  
                    name={toy.name}  
                    image={toy.image} 
                    likes={toy.likes}
                    addLike={this.addLike}
                />
            )
         })
    }

    addToy = (newToy) => {
        this.setState((prevState) => ({toys: [...prevState.toys, newToy]}))
   }

    render() {
        return(
            <div id="toy-container">
                <ToyForm addToyFn={this.addToy}/>
                {this.renderToys()}
            </div>
                
        )
    }
}



