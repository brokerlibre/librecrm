<template>
  <v-layout align-center justify-center row>
    <v-flex mb-5 xs12>
        Fazer a validação dos dados se o usuário está no banco de dados
        utilizar a variavel valid
      <v-form ref="form" lazy-validation>
        <v-text-field v-model="user.email" label="Email" required></v-text-field>
        <v-text-field v-model="user.password" label="Senha" required></v-text-field>
        <v-btn @click="submit">Login</v-btn>
        <router-link tag="li" to="/register_broker">
          <a>Cadastrar um corretor</a>
        </router-link>
      </v-form>
    </v-flex>
  </v-layout>
</template>

<script>
const axios = require("axios");
export default {
  data: function(){
    return {
        user: { email: "", password: "" }
    }
  },
  methods: {
    submit() {
      console.log(this.user.email, this.user.password);
      this.$router.push({ name: 'CustomersTable'})
    },
    create_user(){
        var self = this;
        axios.post('/user', self.user)
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    }
  }
};
</script>

<style>
</style>
