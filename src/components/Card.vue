<template>
  <div id="card">
    <h2 class="title" v-if="title">{{ title }}</h2>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: ['title']
};
</script>

<style scoped lang="scss">
#card {
  border-radius: 3px;
  margin: 16px;
  padding: 10px;
  background: white;
  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.2);
  overflow: hidden;

  p {
    margin: 0;
  }
}

.title {
  font-weight: 100;
  font-size: 1.3em;
  margin: 10px;
}
</style>
