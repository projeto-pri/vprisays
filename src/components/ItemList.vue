<template>
  <div id="item" class="row" @click="selected()">
    <span v-if="index < 10" class="shortcut row justify-start">
      <p>{{ index }}.</p>
      <v-icon icon="keyboard"></v-icon>
    </span>
    <span class="text">{{ text }}</span>
  </div>
</template>

<script>
export default {
  name: 'ItemList',
  props: ['index', 'text'],
  data: () => ({}),
  methods: {
    selected() {
      this.$emit('onSelect', this.index);
    }
  }
};
</script>

<style scoped lang="scss">
#item {
  @include bg-adapter(white);
  font-size: 1.3em;
  padding: 10px;
  border-top: 1px #6b6b6b26 solid;
  cursor: pointer;
}

.shortcut {
  color: darken($color: white, $amount: 25%);

  p {
    margin: 0 5px;
  }
}

.text {
  margin-left: 15px;
}
</style>
