<template>
  <div id="app">
    <Navbar></Navbar>
    <router-view/>
  </div>
</template>

<script>
import Navbar from './components/Navbar';

export default {
  name: 'app',
  components: { Navbar },
  data: () => ({}),
  methods: {}
}
</script>

<style lang="scss">
@import './styles/flex.scss';
@import './styles/basic.scss';
</style>
