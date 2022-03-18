<template>
  <input type="text" v-model="userInput" @keyup.enter="setTodoList" />
  <div class="contents" v-for="todo in todoList" v-bind:key="todo">
    <div>
      <input
        v-if="todo.fix"
        v-model="fixInput"
        @keyup.enter="setFixTodo(todo)"
      />
      <li v-else>{{ todo.label }}</li>
    </div>
    <input type="checkbox" v-model="todo.check" />
    <button v-on:click="updateBtn(todo)">수정</button>
    <button v-on:click="deleteBtn(todo)">삭제</button>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { data } from "../../../lib/export/data";

@Options({
  name: "Contents",
  data() {
    return {
      userInput: "",
      todoList: data,
      nextID: 3, // 초기 데이터
      fixInput: "",
    };
  },
  methods: {
    setTodoList: function (): void {
      if (this.userInput !== "") {
        // input 값이 들어있다면
        this.todoList.push({
          label: this.userInput,
          key: this.nextID,
          cheak: false,
          fix: false,
        }); // data 추가
        this.nextID += 1; // key
        this.userInput = ""; // input 값 비우기
      }
    },

    deleteBtn: function (todo: any): void {
      this.todoList = this.todoList.filter(
        (item: any) => item.key !== todo.key
      ); // 지울 데이터가 key값과 같다면 제외
    }, // 삭제 기능

    updateBtn: function (todo: any): void {
      todo.fix = !todo.fix;
    }, // 조건문으로 li를 input으로 바꾸기

    setFixTodo: function (todo: any): void {
      todo.label = this.fixInput;
      todo.fix = false;
      this.fixInput = "";
    }, // todo의 label을 fixInput 값으로 바꾸기
  },
})
export default class Contents extends Vue {}
</script>

<style scoped>
.contents {
  display: flex;
}
</style>
