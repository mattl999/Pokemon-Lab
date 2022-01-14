import React from 'react'

 function Pokemon(props) {
    return (
        <div>
            <h1>HP: {props.hp} </h1>
            <img src={props.img} alt="" />
            <h2>{props.name}</h2>
            <button  onClick={() => {props.attack(props.id)}}>Attack</button>
            
        </div>
    )
}
export default Pokemon;