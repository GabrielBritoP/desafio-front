<template>
  <div>
    <h2>Informe o id e altere os campos</h2>
    <v-form  @submit.prevent="putData">
      <div>
        <label for="id"> Id </label>
        <v-text-field id="id" type="number" placeholder="id" v-model="formData.id" />
      </div>

      <div>
        <label for="nome"> Nome </label>
        <v-text-field
          id="nome"
          type="text"
          placeholder="nome"
          v-model="formData.nome"
        />
      </div>

      <div>
        <label for="matricula"> Matricula </label>
        <v-text-field
          id="matricula"
          type="text"
          placeholder="matricula"
          v-model="formData.matricula"
        />
      </div>

      <div>
        <label for="email"> Email </label>
        <v-text-field id="email" type="email" placeholder="email" v-model="formData.email"/>
      </div>

      <div>
        <label for="cpf"> CPF </label>
        <v-text-field id="cpf" type="text" placeholder="cpf" v-mask="'###.###.###-##'" v-model="formData.cpf" />
      </div>

      <v-btn  rounded @click="putData();showAlert()">alterar dados</v-btn>
    </v-form>
  </div>
</template>

<script>
import axios from "axios";
import {mask} from 'vue-the-mask';
export default {
  name: "PutData",
  directives: {mask},
  data() {
    return {
      formData: {
        nome: "",
        matricula: "",
        email: "",
        cpf: "",
      },
    };
  },
  methods: {
     showAlert() {
      this.$swal("Alteração feita");
    },
    putData() {
      axios
        .put(`http://localhost:3000/usuarios/${this.formData.id}`, this.formData)
        .then((res) => {
          console.log(res.data);
          console.log("dados alterados");
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },

};
</script>

<style scoped>
v-btn{
  font-weight: bold;
}
div {
  margin-top: 1rem;
}
form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
}
v-text-field {
  width: 10rem;
}
</style>
