<template>
  <v-layout align-center justify-center row>
    <v-flex mb-5 xs12>
      <v-form ref="form" v-model="valid" lazy-validation>
        <h4>Tipo da Atividade</h4>
        <v-radio-group v-model="radios" :mandatory="false" row>
          <v-radio label="Chamada" value="radio-1"></v-radio>
          <v-radio label="Reunião" value="radio-2"></v-radio>
          <v-radio label="Deadline" value="radio-3"></v-radio>
        </v-radio-group>
        <v-date-picker v-model="picker" landscape="true" color="green lighten-1"></v-date-picker>
        <v-time-picker v-model="e7" landscape="true" format="24hr"></v-time-picker>
        <v-select :items="items" label="Solo field" solo></v-select>
        <v-btn @click="submit">Criar Atividade</v-btn>
      </v-form>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data: () => ({
    picker: new Date().toISOString().substr(0, 10),
    e7: null,
    items: ["Foo", "Bar", "Fizz", "Buzz"]
  }),
  methods: {
    submit() {}
  }
};
</script>

<style>
</style>
