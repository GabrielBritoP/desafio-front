<template>
  <div>
    <button @click="getData">Get data</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "GetData",
  methods: {
    getData() {
      axios
        .get(" http://localhost:3000/usuarios")
        .then((res) => {
          console.log(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },  
  },
};
</script>

<style scoped>
button {
  width: 5rem;
}
</style>
