import {useState} from 'react'
function ToyForm({addToyFn}){

    // const [name, setName] = useState("")
    // const [image, setImage] = useState("")
    // const [likes, setLikes] = useState("")
    const [formData, setFormData] = useState({name: "", image: "", likes: ""})
    
    function handleChange(e) {
        let keyToChange = e.target.name
        let newThing = e.target.value
        setFormData({...formData, [keyToChange]: newThing})
    }
  

    function handleSubmit(e){
        e.preventDefault()
        // send this data to our "db"
        // add this data to our state that keeps track of toys 
        // console.log(formData)
        // addToyFn(formData)
        const newToy = JSON.stringify({...formData, likes: parseInt(formData.likes)})
        console.log(newToy)
        const configObj = {
            method: 'POST', 
            headers: {
                "Content-Type": "application/json"
            },
            body: newToy
        }
        fetch("http://localhost:3000/toys", configObj)
        .then( r => r.json())
        .then(data => {
            console.log(data)
            addToyFn(data)
        })
        
       setFormData({name: "", image: "", likes: ""})

    }

    return(
        <div>
            <h2>Add a New Toy:</h2>
            <form onSubmit={handleSubmit}>
                <label>Name:</label>
                <input type="text" name="name" onChange={handleChange } value={formData.name} />
                <label>Image:</label>
                <input type="text" name="image" onChange={handleChange}  value={formData.image} />
                <label>Likes:</label>
                <select name="likes" onChange={handleChange} value={formData.likes} >
                    <option value="">Please Select</option>
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                </select>
                { formData.name &&  <input type="submit" value="Add Toy" />}
               
            </form>
        </div>
    )

}

export default ToyForm