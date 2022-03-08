<template>
  <div>
    <h2>Informe o id para deletar</h2>
    <v-form @submit.prevent="deleteData">
      <div>
        <label for="id"> Id </label>
        <v-text-field id="id" type="number" placeholder="id" v-model="formData.id" />
      </div>

      <v-btn  rounded>enviar dados</v-btn>
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
    deleteData() {
      axios
        .delete(`http://localhost:3000/usuarios/${this.formData.id}`)
        .then((res) => {
          console.log(res.data);
          console.log("dados deletados");
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
