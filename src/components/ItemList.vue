<template>
  <div id="ItemList" :class="[{'focused': focused}, 'row']" @click="selected()">
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
  props: ['index', 'text', 'focused'],
  data: () => ({}),
  methods: {
    selected() {
      this.$emit('onSelect', this.index);
    }
  }
};
</script>

<style scoped lang="scss">
#ItemList {
  @include bg-adapter(white);
  color: #444;
  font-size: 1.3em;
  padding: 10px;
  border-top: 1px #6b6b6b26 solid;
  cursor: pointer;
}

.focused {
  background-color: gray !important;
  box-shadow: inset 0px 1px 10px 0px rgba(0, 0, 0, 0.2);

  .text {
    color: white;
  }
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
