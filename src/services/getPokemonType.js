
const URL_BASE = 'https://pokeapi.co/api/v2/type/'

const getPokemonType = (type) => {
    const promise = fetch (URL_BASE+type)
        .then(res => res.json())

    return promise

}

export default getPokemonType;