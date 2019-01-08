<template>
  <div id="item" class="row items-center" @click="selected()">
    <span v-if="index < 10" class="shortcut row items-center">
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
      this.$emit('onSelect', this.index)
    }
  }
}
</script>

<style scoped lang="scss">
@import '../styles/mixins.scss';

$hawkes-blue: #D1DCED;
$ghost-white: #FBFBFC;
$very-light-grey: #CECECE;
$spun-pearl: #A3A3A4;
$hawkes-blue: #E2E3E8;


#item {
  @include bg-adapter(white);
  font-size: 1.3em;
  padding: 10px;
  border-top: 1px #6b6b6b26 solid;
  cursor: pointer;
}

.shortcut {
  color:darken($color: white, $amount: 25%);

  p {
    margin: 0 5px;
  }
}

.text {
  margin-left: 15px;
}

</style>
