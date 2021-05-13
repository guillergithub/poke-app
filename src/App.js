import './App.css';
import Pokemon from './components/Pokemon' 
import Search from './components/Search'
import getPokemonType from './services/getPokemonType'

import { useEffect, useState } from 'react'


function App() {

  const [queryTerm, setQueryTerm] = useState('')
  const [pokemons, setPokemons] = useState([])
  

  useEffect( () => {
    if(queryTerm) {
      getPokemonType(queryTerm).then( data => {
        setPokemons(data.pokemon.slice(0, 15))
      })}

  }, [queryTerm])


  const list = pokemons.map((elem) => {
    return <Pokemon url={elem.pokemon.url} key={elem.pokemon.name} />
  })
      
  
  return (
    <div className="App">

      <Search  handleSearch={setQueryTerm}/>      
      <div className='cards-container'>
        {list}

      </div>

    </div>
  );
}

export default App;
