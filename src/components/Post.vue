<template>
  <div>
    <h2> Cadastre as informações </h2>
    <v-form>
      <div>
        <label for="id"> Id </label>
        <v-text-field
          id="id"
          type="number"
          placeholder="id"
          v-model="formData.id"
        />
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
        <v-text-field
          id="email"
          type="email"
          placeholder="email"
          v-model="formData.email"
        />
      </div>

      <div>
        <label for="cpf"> CPF </label>
        <v-text-field
          id="cpf"
          type="text"
          placeholder="cpf"
          v-mask="'###.###.###-##'"
          v-model="formData.cpf"
        />
      </div>

      <v-btn rounded @click="postData();showAlert()">enviar dados</v-btn>
    </v-form>
  </div>
</template>

<script>
import axios from "axios";
import { mask } from "vue-the-mask";

export default {
  name: "PostData",
  directives: { mask },
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
     showAlert() {
      this.$swal("Cadastro feito");
    },
    showErrorAlert(msg){
       this.$swal(msg);
    },
    
    postData() {
      console.log("entrou");
      axios
        .post(" http://localhost:3000/usuarios", this.formData)
        .then((res) => {
          console.log(res.data);
        })
        .catch((error) => {
          console.log(error);
          this.showErrorAlert("Erro ao cadastrar");
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
</style>
