<template>
  <div>
    <select v-model="lang">
      <option v-for="(voice, key) in voices" :key="key" :value="voice.lang">{{ voice.lang }}</option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'SpeakConfig',
  props: { voices: { default: [] } },
  data: () => ({
    lang: 'pt-BR'
  }),
  methods: {
  }
}
</script>

<style scoped>
select {
  background: #005e9c;
  padding: 5px 10px;
  border-radius: 4px;
  border: none;
  color: white;
  width: 100px;
}
</style>
