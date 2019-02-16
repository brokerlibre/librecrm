<template>
  <v-layout align-start justify-center row>
    <v-flex>
      <v-sheet height="400">
        <v-calendar ref="calendar" v-model="start" :type="type" :end="end" color="primary"></v-calendar>
      </v-sheet>
    </v-flex>
    <v-btn fixed bottom left large>
      <router-link to="/activity">Nova Atividade</router-link>
    </v-btn>
  </v-layout>
</template>

<script>
export default {
  data: () => ({})
};
</script>

<style>
</style>
