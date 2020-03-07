import React from 'react'

  

const Cards = (props) => {
    const {charArr} = props;
    const characters = charArr.map(char => {
        return (
            <h1>{char.name}</h1>
            
        )
    }) 
    return Cards;
}
        
            
        


export default Cards
