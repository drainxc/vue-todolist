<template>
  <div id="app">
    <div class="container">
      <div>
        <h1>TodoList</h1>
        <input type="text" v-model="userInput" @keyup.enter="setTodoList" />
        <div class="contents" v-for="todo in todoList" v-bind:key="todo">
          <li>
            {{ todo.label }}
          </li>
          <button v-on:click="toggleTodoState(todo)">delete</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { data } from "./lib/export/data";

@Options({
  name: "App",
  components: {},
  data() {
    return {
      userInput: "",
      todoList: data,
      nextID: 3,
    };
  },
  methods: {
    setTodoList: function (): void {
      this.todoList.push({
        label: this.userInput,
        state: "active",
        key: this.nextID,
      });
      this.nextID += 1;
      this.userInput = "";
    },

    toggleTodoState: function (todo: any): void {
      console.log(todo.key);
    },
  },
})
export default class App extends Vue {}
</script>

<style scoped>
.contents {
  display: flex;
}
</style>
