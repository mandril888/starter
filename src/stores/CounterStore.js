import { defineStore } from "pinia";
import { useStorage } from "@vueuse/core";

export const useCounterStore = defineStore("counter", {
  state: () => ({
    counter: useStorage("counter", 0),
  }),
  getters: {
    doubleCounter: (state) => state.counter * 2,
  },
  actions: {
    incrementCounter() {
      this.counter++;
    },
  },
});
