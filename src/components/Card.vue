<template>
  <div id="card">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Card',
  data: () => ({})
}
</script>

<style scoped lang="scss">
@import '../styles/colors.scss';

#card {
  border-radius: 3px;
  margin: 10px;
  padding: 10px;
  background: white;
  box-shadow: 0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12) !important;

  p {
    margin: 0;
  }
}
</style>
