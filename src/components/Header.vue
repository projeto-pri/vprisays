<template>
  <div id="header">
    <h3 v-if="text">{{ text }}</h3>
    <slot></slot>
  </div>
</template>

<script>
import Card from './Card';

export default {
  name: 'Header',
  props: ['text'],
  components: { Card }
}
</script>

<style scoped lang="scss">
@import '../styles/colors.scss';

#header {
  padding: 15px;
  user-select: none;
  border-radius: 4px 4px 0px 0px;
  background-color: #0074D9;
  box-shadow: 0px 5px 5px 0px rgba(0,0,0,0.2);

  h3 {
    font-size: 1.8em;
    margin: 0;
    color: white;
    text-align: center;
    font-weight: 300;
  }
}
</style>
