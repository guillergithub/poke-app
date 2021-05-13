/* 

const Pokemon = ({ name, type, iconUrl }) => {

    return (
        <div className="card mt-2">
            <h3 style={{margin: 0}}>{name}</h3>      
            <img src={iconUrl} alt='pokemon'></img>
            <h4 style={{margin: 0}}>{type}</h4>
        </div>
    )
}

export default Pokemon; */


import PokemonCard from './PokemonCard'
import { useState, useEffect } from 'react'

const Pokemon = ({ url }) => {

    
    const [pokemonName, setPokemonName] = useState('')
    const [pokemonType, setPokemonType] = useState('')
    const [pokemonIconUrl, setPokemonIconUrl] = useState('')

    useEffect( () => {
        if(url) {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setPokemonName(data.name)
                setPokemonType(data.types[0].type.name)
                setPokemonIconUrl(data.sprites.front_default)
            })
            
    }
  }, [url])


    return <PokemonCard name={pokemonName} type={pokemonType} iconUrl={pokemonIconUrl}/>
}

export default Pokemon