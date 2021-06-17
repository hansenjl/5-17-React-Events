import {useState} from 'react'
function ToyForm(){
    
    return(
        <div>
            <h2>Add a New Toy:</h2>
            <form >
                <label>Name:</label>
                <input type="text" name="name" />
                <label>Image:</label>
                <input type="text" name="image"   />
                <label>Likes:</label>
                <select >
                    <option value="">Please Select</option>
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                </select>
                <input type="submit" value="Add Toy" />
            </form>
        </div>
    )

}

export default ToyForm