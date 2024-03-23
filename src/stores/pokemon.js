import { defineStore } from "pinia";

export const usePokemonStore = defineStore('pokemonId', {
    state: () => ({
        pokemonDetail: {}
    }),
    actions: {
        async getPokemonDetail(name) {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
            const result = await response.json()
            this.pokemonDetail = result
        }
    }
})