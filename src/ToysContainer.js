import toysObj from './database'
import ToyCard from './ToyCard'
import {useState} from 'react'

function ToysContainer({searchTerm}){
  
   const [toys, setToys] = useState(toysObj.toys)
   // typically you would set this to an empty array 

  

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
   
    return(
        <div id="toy-container">
            
            {renderToys()}
        </div>
            
    )
    
}

export default ToysContainer
