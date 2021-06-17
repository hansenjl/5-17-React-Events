
// props will ALWAYS be passed in as an argument
// we cannot change props
function ToyCard({id, name, likes, image, addLike}){

  
    return(
        <div className="card" id={`toy-${id}`}>
            <h2>{name}</h2>
            <img src={image} alt={name} className="toy-avatar"/>
            <p>{likes} Likes </p>
            <button onClick={() => addLike(id)} className="like-btn">Like &lt;3</button>
        </div>
    )

}

export default ToyCard