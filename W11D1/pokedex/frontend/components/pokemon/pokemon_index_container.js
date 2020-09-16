import { connect } from 'react-redux';
import { selectAllPokemon } from '../../reducers/selectors'
import PokemonIndex from './pokemon_index'



const mSTP = state => ({
    // pokemon: Object.values(state.pokemon)
    pokemon: selectAllPokemon(state.entities.pokemon)
});

const mDTP = dispatch => {
    // debugger
        return {
        requestAllPokemon: () => dispatch(requestAllPokemon())
    }
};

export default connect(mSTP, mDTP)(PokemonIndex);