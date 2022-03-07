<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <GetData />
    <PostData />
    <PutData />
    <DeleteData />
 
  </div>
</template>

<script>
import PutData from "./components/Put.vue";
import GetData from "./components/Get.vue";
import PostData from "./components/Post.vue";
import DeleteData from "./components/Delete.vue";
export default {
  name: "App",
  components: {
    GetData,
    PostData,
    PutData,
    DeleteData,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
