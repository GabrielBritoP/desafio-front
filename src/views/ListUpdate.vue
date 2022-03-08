<template>
<div>
  <Get />
  <Put />
</div>
</template>

<script>
// @ is an alias to /src
import Put from "../components/Put.vue";
import Get from "../components/Get.vue";

export default {
  name: "HomeView",
  components: {
    Put,
    Get,
  },
};
</script>