import ToyCard from './ToyCard'
import ToyForm from './ToyForm'
import {useState, useEffect} from 'react'

function ToysContainer({searchTerm}){
  
   const [toys, setToys] = useState([])
   // typically you would set this to an empty array 

   useEffect(()=>{
       fetch('http://localhost:3000/toys')
       .then(r => r.json())
       .then(data => setToys(data))
   }, [])
  

   function addLike(id){
       // spread operator 
       // where is the one we want to update located in the array of toys?
       const idx = toys.findIndex(t => t.id === id )
       const toysBefore = [...toys.slice(0,idx)]
       const foundToy = toys[idx]
       const toysAfter = [...toys.slice(idx+1)]
       setToys([...toysBefore, {...foundToy, likes: foundToy.likes + 1}, ...toysAfter])
   }

   function renderToys(){

    // we want only the toys who have a name that includes the search team
    const filteredToys = toys.filter((toy) => toy.name.toLowerCase().includes(searchTerm.toLowerCase()))

     return filteredToys.map( (toy,index) => 
        <ToyCard 
            key={index} 
            id={toy.id}  
            name={toy.name}  
            image={toy.image} 
            likes={toy.likes}
            addLike={addLike}
        />)
   }
   
   function addToy(newToy){
        setToys([...toys, newToy])
   }
    return(
        <div id="toy-container">
            <ToyForm addToyFn={addToy}/>
            {renderToys()}
        </div>
            
    )
    
}

export default ToysContainer
