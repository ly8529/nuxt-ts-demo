// auth.js
import { defineStore, acceptHMRUpdate } from 'pinia'
import { getOriginalNode } from 'typescript'

export const useCounterStore = defineStore('counter', {
	state: () => ({ count: 0, name: 'Eduardo' }),
	getters: {
		doubleCount: state => state.count * 2,
	},
	actions: {
		increment() {
			this.count++
		},
	},
})

// 确保传递正确的 store 声明，本例中为 `useAuth`
if (import.meta.hot) {
	import.meta.hot.accept(acceptHMRUpdate(useCounterStore, import.meta.hot))
}
