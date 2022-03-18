<template>
  <MainPage />
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import MainPage from "./components/page/mainPage/index.vue";

@Options({
  name: "App",
  components: { MainPage },
})
export default class App extends Vue {}
</script>

<style scoped>
.contents {
  display: flex;
}
</style>
