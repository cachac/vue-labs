<template>
  <CounterDemo name="Test" @incrementar="mensaje" />
</template>

<script>
import CounterDemo from "./components/CounterDemo.vue";

export default {
  name: "App",
  components: {
    CounterDemo,
  },
	methods: {
		mensaje(value) {
			alert("Incrementado: " + value);
		},
	},
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
