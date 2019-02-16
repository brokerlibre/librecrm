<template>
  <v-app dark>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>LIBRE</span>
        <span class="font-weight-light">CRM</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn flat>
          <router-link to="/agenda">Minha Agenda</router-link>
        </v-btn>
        <v-btn flat>
          <router-link to="/cdashboard">Carteira de Clientes</router-link>
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

