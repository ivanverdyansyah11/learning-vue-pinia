<template>
    <p>Ini Footer</p>
    <button @click="increment()">Increment Value</button>
    <button @click="decrement()">Decrement Value</button>
    <button @click="reset()">Reset Value</button>

    <br>
    <br>

    <button @click="incrementWithAction()">Increment with Action</button>
    <button @click="decrementWithAction()">Decrement with Action</button>
    <button @click="incrementByWithAction(10)">Increment By 10</button>

    <br>
    <br>

    <button @click="fetchPokemon('ditto')">Get Pokemon Detail</button>
    <button @click="resetFetchPokemon()">Reset Fetch Pokemon</button>
</template>

<script setup>
import { useCounterStore } from "../stores/counter"
import { usePokemonStore } from "../stores/pokemon"

const counter = useCounterStore()
const pokemon = usePokemonStore()

const increment = () => {
    counter.$patch((state) => {
        state.count++
    })
}

const decrement = () => {
    counter.$patch((state) => {
        state.count--
    })
}

const reset = () => {
    counter.$reset()
}

const incrementWithAction = () => {
    counter.increment()
}

const decrementWithAction = () => {
    counter.decrement()
}

const incrementByWithAction = (amount) => {
    counter.incrementBy(amount)
}

const fetchPokemon = (name) => {
    pokemon.getPokemonDetail(name)
}

const resetFetchPokemon = () => {
    pokemon.$reset()
}
</script>