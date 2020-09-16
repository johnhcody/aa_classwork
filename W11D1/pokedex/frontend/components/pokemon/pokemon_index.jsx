import React from 'react';
import requestAllPokemon from '../../actions/pokemon_actions'
import PokemonIndexItem from './pokemon_index_item';


class PokemonIndex extends React.Component {
    constructor(props) {
        super(props)

    }

    componentDidMount() {
        return this.props.requestAllPokemon();
    }

    

    render() {
        // debugger
        const pokeItems = this.props.pokemon.map(poke => (
            <PokemonIndexItem key={poke.id} pokemon={poke} />
        ));

        return (<ul className="pokemon-list">{pokeItems}</ul>)

    }
}

export default PokemonIndex;
