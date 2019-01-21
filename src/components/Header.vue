<template>
  <div id="HeaderTable">
    <h3 v-if="text">{{ text }}</h3>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: ['text'],
};
</script>

<style scoped lang="scss">
#HeaderTable {
  padding: 15px;
  user-select: none;
  border-radius: 4px 4px 0px 0px;
  background-color: #0074d9;
  box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.2);

  h3 {
    font-size: 1.8em;
    margin: 0;
    color: white;
    text-align: center;
    font-weight: 300;
  }
}
</style>
