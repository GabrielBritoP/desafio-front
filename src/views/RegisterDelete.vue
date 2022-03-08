<template>
<div>
  <Post />
  <Delete />
</div>
</template>

<script>
// @ is an alias to /src
import Delete from "../components/Delete.vue";
import Post from "../components/Post.vue";

export default {
  name: "HomeView",
  components: {
    Post,
    Delete,
  },
};
</script>