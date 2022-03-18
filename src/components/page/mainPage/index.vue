<template>
  <h1>TodoList</h1>
  <Contents />
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
