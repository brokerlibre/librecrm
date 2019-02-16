<template>
  <v-app dark>
    <v-toolbar app color="#555555">
      <v-toolbar-title class="headline text-uppercase">
         <img src="./assets/logo.png" width="150px">
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn flat>
          <router-link to="/agenda">Minha Agenda</router-link>
        </v-btn>
        <v-btn flat>
          <router-link to="/cdashboard">Carteira de Clientes</router-link>
        </v-btn>
        <v-btn flat>
          <router-link to="/dashboard">Dashboard</router-link>
        </v-btn>
      </v-toolbar-items>
      <v-btn flat>
        <router-link to="/login">Login</router-link>
      </v-btn>
    </v-toolbar>

    <v-content>
      <Home/>
    </v-content>
  </v-app>
</template>

<script>
import Home from "./components/Home";

export default {
  name: "App",
  components: {
    Home
  },
  data() {
    return {
      //
    };
  }
};
</script>

<style>
a {
  text-decoration: none;
}
</style>

