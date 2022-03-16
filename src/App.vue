<template>
  <div id="app">
    <div class="container">
      <div></div>
      <h1>TodoList</h1>
      <input
        type="text"
        v-model="userInput"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {
      userInput: "",
      todoList: [],
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
