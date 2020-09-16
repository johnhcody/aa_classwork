import { $CombinedState } from "redux"

export const fetchAllPokemon = () => {
    return $.ajax({
        url: 'api/pokemon',
        method: 'GET'
    })
}


export const fetchPokemon = (pokemon) => {
    return $.ajax({
        url: `api/pokemon/${pokemon.ud}`,
        method: 'GET'
    })
}