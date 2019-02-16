<template>
  <v-layout align-center justify-center row>
     <v-card align-center justify-center >
        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">Login do Corretor</h3>
      <v-form ref="form" lazy-validation>
        <v-text-field v-model="user.email" label="Email" required></v-text-field>
        <v-text-field v-model="user.password" label="Senha" required></v-text-field>
        <v-btn @click="submit">Login</v-btn>
      </v-form>
          </div>
        </v-card-title>

        <v-card-actions>
        <router-link to="/register_broker">
          <a>Cadastrar um corretor</a>
        </router-link>
        </v-card-actions>
      </v-card>
  </v-layout>
</template>

<script>
const axios = require("axios");
export default {
  data: function() {
    return {
      user: { email: "", password: "" }
    };
  },
  methods: {
    submit() {
      console.log(this.user.email, this.user.password);
      this.$router.push({ name: "ClientsDashboard" });
    },
    create_user() {
      var self = this;
      axios
        .post("/user", self.user)
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }
};
</script>

<style>
</style>
