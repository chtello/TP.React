import React, { useState } from 'react';

const Card = ({ title, content, img, id, EliminarCard }) => {
    const[likes, setLikes] = useState (0);
return (
    <div className="card" style={{margin:"2px"}}>
        <h2>{title}</h2>
        <p>{content}</p>
        <img src={img} />
        <button onClick={()=> EliminarCard(id)}>Eliminar</button>
        <button onClick={()=> setLikes(likes + 1)}>Like</button>
        <h4>Likes: {likes} </h4>
    </div>
);
};

export default Card; 
