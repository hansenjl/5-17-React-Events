
function Search({handleChange}){
    
    return(
        <div>
            <input onChange={handleChange} type="text" placeholder="Search for a toy..." />
        </div>
    )
}

export default Search