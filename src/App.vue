<template>
  <div id="app">
    <div class="container">
      <div>
        <h1>TodoList</h1>
        <input type="text" v-model="userInput" @keyup.enter="setTodoList" />
        <div class="contents">
          <li v-for="todo in todoList" v-bind:key="todo">
            {{ todo.label }}
          </li>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { data } from "@/lib/export/data";

export default {
  name: "App",
  components: {},
  data() {
    return {
      userInput: "",
      todoList: data,
    };
  },
  methods: {
    setTodoList() {
      this.todoList.push({
        label: this.userInput,
        state: "active",
      });
      this.userInput = "";
    },
  },
};
</script>

<style scoped>
#app {
  padding-left: 20px;
}
</style>
