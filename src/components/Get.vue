<template>
  <v-container>
    <v-btn :loading="loading" :disabled="loading" @click="loader = 'loading';getDataMethod  ()" rounded> Get data</v-btn>

      <v-data-table
    :headers="headers"
    :items="allData"
    :items-per-page="6"
    class="elevation-1"
  ></v-data-table>
  </v-container>
</template>

<script>  
import axios from "axios";
export default {
  name: "Get",
     data () {
      return {
        loader: null,
        loading:false,
        test: "string",
        allData:[],
        headers:[
           {
            text: 'ID',
            align: 'start',
            sortable: false,
            value: 'id',
          },
           {
            text: 'Nome',
            value: 'nome',
          },
           {
            text: 'Matricula',
            value: 'matricula',
          },
           {
            text: 'Email',
            value: 'email',
          },
           {
            text: 'CPF',
            value: 'cpf',
          },
        ]
      }
    },
    mounted() {
      this.getDataMethod()
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
    getDataMethod() {
      axios
        .get(" http://localhost:3000/usuarios")
        .then((res) => {
          console.log(res.data);
          this.allData = res.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style scoped>
button{
  margin-bottom: 2rem;
}
.elevation-1{
  display: inline;
}

</style>
