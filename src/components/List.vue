<template>
  <div id="list">
    <Header text="Opções">
      <button type="button" :disabled="!this.path.length" class="btn-back" @click="back">
        <v-icon icon="chevron-left"></v-icon>
      </button>
    </Header>
    <div class="col">
      <template v-for="(item, index, key) in getData" class="items">
        <ItemList
          @onSelect="selectItem"
          :text="getText(item)"
          :focused="currentItem === index"
          :index="index"
          :key="key"
        ></ItemList>
      </template>

      <template v-if="getData == []">
        <ItemList text="Sem itens"></ItemList>
      </template>
    </div>
  </div>
</template>

<script>
import ItemList from './ItemList';
import Header from './Header';

export default {
  name: 'List',
  props: {
    data: { default: [] },
    field: { default: null },
    header: { default: null }
  },
  components: {
    ItemList,
    Header
  },
  data: () => ({
    currentItem: 0,
    path: []
  }),
  methods: {
    up() {
      if (this.currentItem > 0) {
        this.currentItem--;
      }
    },
    down() {
      const lenData = this.getData.length - 1;
      if (this.currentItem < lenData) {
        this.currentItem++;
      }
    },
    back() {
      this.path.pop();
      this.currentItem = 0;
    },
    reset() {
      this.currentItem = 0;
      this.path = [];
    },
    async selectItem(index = this.currentItem) {
      if (index < this.getData.length) {
        const existOptions = !!this.getData[index].options;
        if (existOptions) {
          this.path.push(index);
          this.currentItem = 0;
        } else {
          this.currentItem = index;
          this.$emit('speak');
        }
      }
    },
    getText(item) {
      return this.field ? item[this.field] : item;
    }
  },
  computed: {
    getData() {
      let data = this.data;
      this.path.forEach(p => {
        data = data[p].options;
      });
      return data;
    },
    currentText() {
      let text = "";
      let _data = this.data;
      this.path.forEach(p => {
        text += this.getText(_data[p]) + ' ';
        _data = _data[p].options;
      });
      text += this.getText(_data[this.currentItem]);
      return text;
    }
  }
};
</script>

<style scoped lang="scss">
#list {
  box-shadow: 0px 2px 5px 0px #00000033;
  border-radius: 4px;
  overflow: hidden;
}

.btn-back {
  background: white;
  color: #666;
  font-size: 1.5em;
  border-radius: 100%;
  padding: 10px 15px;
  box-shadow: 0px 2px 5px 0px #00000033;

  &:disabled {
    background: darken(white, 40%);
    color: darken(white, 50%);
  }

  & > * {
    display: block
  }
}

</style>
