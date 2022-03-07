<template>
  <div>
     <v-container
    id="input-usage"
    fluid
  >
    <v-row>
      <v-col cols="12">
        <v-input
          :messages="['Messages']"
          append-icon="mdi-close"
          prepend-icon="mdi-phone"
        >
          Default Slot
        </v-input>
      </v-col>
    </v-row>
  </v-container>
    <form @submit.prevent="postData">
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
        <input
          id="email"
          type="email"
          placeholder="email"
          v-model="formData.email"
        />
      </div>

      <div>
        <label for="cpf"> CPF </label>
        <input id="cpf" type="text" placeholder="cpf" v-mask="'###.###.###-##'" v-model="formData.cpf" />
      </div>

      <button>enviar dados</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";
import {mask} from 'vue-the-mask'

export default {
  name: "PostData",
  directives: {mask},
  data() {
    return {
      formData: {
        id: "",
        nome: "",
        matricula: "",
        email: "",
        cpf: "",
      },
    };
  },
  methods: {
    postData() {
      console.log("entrou");
      axios
        .post(" http://localhost:3000/usuarios", this.formData)
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
  #input-usage .v-input__prepend-outer,
  #input-usage .v-input__append-outer,
  #input-usage .v-input__slot,
  #input-usage .v-messages {
    border: 1px dashed rgba(0,0,0, .4);
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
input {
  width: 10rem;
}
</style>
