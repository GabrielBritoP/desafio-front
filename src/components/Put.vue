<template>
  <div>
    <h2>Informe o id e altere os campos</h2>
    <form @submit.prevent="putData">
      <div>
        <label for="id"> Id </label>
        <input id="id" type="number" placeholder="id" v-model="formData.id" />
      </div>

      <div>
        <label for="nome"> Nome </label>
        <input
          id="nome"
          type="text"
          placeholder="nome"
          v-model="formData.nome"
        />
      </div>

      <div>
        <label for="matricula"> Matricula </label>
        <input
          id="matricula"
          type="text"
          placeholder="matricula"
          v-model="formData.matricula"
        />
      </div>

      <div>
        <label for="email"> Email </label>
        <input id="email" type="email" placeholder="email" v-model="formData.email"/>
      </div>

      <div>
        <label for="cpf"> CPF </label>
        <input id="cpf" type="text" placeholder="cpf" v-mask="'###.###.###-##'" v-model="formData.cpf" />
      </div>

      <button>alterar dados</button>
    </form>
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
div {
  margin-top: 1rem;
}
form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
}
input {
  width: 10rem;
}
</style>
