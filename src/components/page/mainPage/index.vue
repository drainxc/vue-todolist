<template>
  <div id="app">
    <div class="container">
      <div>
        <h1>TodoList</h1>
        <Contents />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Contents from "../../common/Contents/index.vue";

@Options({
  name: "MainPage",
  components: {
    Contents,
  },
})
export default class MainPage extends Vue {}
</script>

<style scoped></style>
