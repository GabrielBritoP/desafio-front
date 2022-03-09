<template>
  <div>
    <h2>Informe o id para deletar</h2>
    <v-form ref="form">
      <div>
        <label for="id"> Id </label>
        <v-text-field
          id="id"
          type=""
          placeholder="id"
          v-model="formData.id"
        />
      </div>

      <v-btn @click="deleteDataMethod()">Deletar</v-btn>
    </v-form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "DeleteData",
  data() {
    return {
      formData: {
        id: "",
      },
    };
  },
  methods: {
    showAlert(msg) {
      this.$swal(msg);
    },
    reset () {
        this.$refs.form.reset()
      },
    deleteDataMethod() {
      axios
        .delete(`http://localhost:3000/usuarios/${this.formData.id}`)
        .then((res) => {
          console.log(res.data);
          console.log("dados deletados");
          this.showAlert("Usuário Deletado");
          this.reset();
        })
        .catch((error) => {
          console.log(error);
          this.showAlert("Erro ao deletar")
        });
    },
   
  },
};
</script>

<style scoped>
div {
  margin-top: 1rem;
  margin-bottom: 1rem;
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
