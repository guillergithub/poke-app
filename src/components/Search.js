import { useState } from 'react'

const Search = ({handleSearch}) => {

    const [value, setValue] = useState('')
    
    return (
        <div>
            <input onChange={ e=>setValue(e.target.value) } value={value}/>
            <button onClick={ () => {handleSearch(value)} }>Find</button>
        </div>
    )
} 

export default Search;