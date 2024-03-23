<template>
    <p>Ini Header</p>
    <span>state: {{ counter }}</span>
    <br>
    <span>getters: {{ getCount }}</span>
    <br>
    <span>getters double: {{ getCountDouble }}</span>
    <br>
    <span>getters divided: {{ getCountDivided }}</span>
    <br>
    <span>pokemon detail: {{ pokemon }}</span>
</template>

<script setup>
    import { computed } from "vue"
    import { useCounterStore } from "../stores/counter"
    import { usePokemonStore } from "../stores/pokemon"

    const counterStore = useCounterStore()
    const pokemonStore = usePokemonStore()

    const counter = computed(() => counterStore.count)
    const getCount = computed(() => counterStore.getCount)
    const getCountDouble = computed(() => counterStore.getCountDouble)
    const getCountDivided = computed(() => counterStore.getCountDivided(4))
    const pokemon = computed(() => pokemonStore.pokemonDetail.abilities)

    counterStore.$subscribe((mutations, state) => {
        console.log(mutations, state);
    })
</script>