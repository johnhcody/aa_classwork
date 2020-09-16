import React from 'react';
import { Link } from "react-router-dom";


const PokemonIndexItem = (props) => {


    return (
        <Link to="/pokemon/:pokemonId">
            <li>
                {props.pokemon.name} : <img src={`assets/pokemon_snaps/${props.pokemon.image_url}`} width="100" height="100" />
            </li>
        </Link>
    )

}




export default PokemonIndexItem;