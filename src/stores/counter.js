import { defineStore } from "pinia";

export const useCounterStore = defineStore({
    id: 'counter',
    state: () => ({
        count: 0
    }),
    getters: {
        getCount: (state) => state.count,
        getCountDouble: (state) => state.count * 2,
        getCountDivided: (state) => (divided) => state.count / divided,
    },
    actions: {
        increment() {
            this.count++
        },
        decrement() {
            this.count--
        },
        incrementBy(mount) {
            this.count += mount
        }
    }
})