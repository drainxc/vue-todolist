<template>
  <div id="app">
    <div class="container">
      <div>
        <h1>TodoList</h1>
        <input type="text" v-model="userInput" @keyup.enter="setTodoList" />
        <div>
          <li v-for="todo in todoList" v-bind:key="todo">
            {{todo}}
          </li>
        </div>
      </div>
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
  methods: {
    setTodoList() {
      this.todoList.push(this.userInput);
      this.userInput = "";
    },
  },
};
</script>

<style scoped>
#app {
  text-align: center;
}
</style>
