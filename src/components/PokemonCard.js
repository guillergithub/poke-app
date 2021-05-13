const PokemonCard = ({name, type, iconUrl}) => {

    return (
        <div className="card m-2">
            <h3 style={{margin: 0}}>{name}</h3>      
            <img src={iconUrl} alt='pokemon'></img>
            <h4 style={{margin: 0}}>{type}</h4>
        </div>
    )
    
}

export default PokemonCard;