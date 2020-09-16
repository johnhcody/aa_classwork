export const selectAllPokemon = (state) => {
    let pokeArr = Object.values(state)
    return pokeArr;

}