import React, {useState} from 'react'
import axios from 'axios'

const Display = (props) => {
    const [pokemon, setPokemon] = useState([]);

    const showPokemon = () => {
        axios.get('https://pokeapi.co/api/v2/pokemon/?limit=807')
            .then(response => setPokemon(response.data.results))// results is 
            
    };


    return (
        <div>
            <button onClick={showPokemon}>Fetch Pokemon</button>
            {pokemon.length > 0 && pokemon.map((poke, idx) => {
                return (<div key={idx}>{poke.name}</div>)
            })}
        </div>

    );
}

export default Display