<template>
  <div>
    <v-btn :loading="loading" :disabled="loading" @click="loader = 'loading';getData()" rounded> Get data</v-btn>
    <div> {{allData}}</div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "GetData",
     data () {
      return {
        loader: null,
        loading: false,
        loading2: false,
        loading3: false,
        loading4: false,
        loading5: false,
        allData:[]
      }
    },
    watch: {
      loader () {
        const l = this.loader
        this[l] = !this[l]

        setTimeout(() => (this[l] = false), 1000)

        this.loader = null
      },
    },
  methods: {
    getData() {
      axios
        .get(" http://localhost:3000/usuarios")
        .then((res) => {
          console.log(res.data);
          this.allData=res.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style scoped>


</style>
