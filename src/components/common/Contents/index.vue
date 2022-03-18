<template>
  <input type="text" v-model="userInput" @keyup.enter="setTodoList" />
  <div class="contents" v-for="todo in todoList" v-bind:key="todo">
    <li>{{ todo.label }}</li>
    <button v-on:click="deleteBtn(todo)">delete</button>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { data } from "../../../lib/export/data";

@Options({
  name: "Contents",
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
      if (this.userInput !== "") {
        this.todoList.push({
          label: this.userInput,
          state: "active",
          key: this.nextID,
        });
        this.nextID += 1;
        this.userInput = "";
      }
    },
    deleteBtn: function (todo: any): void {
      this.todoList = this.todoList.filter(
        (item: any) => item.key !== todo.key
      );
    },
  },
})
export default class Contents extends Vue {}
</script>

<style scoped>
.contents {
  display: flex;
}
</style>
