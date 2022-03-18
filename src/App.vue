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
  },
})
export default class App extends Vue {}
</script>

<style scoped>
.contents {
  display: flex;
}
</style>
