<template>
  <div id="keyboard" class="container content-center">
    <div class="row">
      <button ref="btnUp" class="btn direction" @click="up()" type="button">
        <v-icon icon="chevron-up"></v-icon>
      </button>
      <button ref="btnDown" class="btn direction" @click="down()" type="button">
        <v-icon icon="chevron-down"></v-icon>
      </button>
      <button ref="btnSpeak" class="btn speak" @click="select()" type="button">
        <v-icon icon="volume-up"></v-icon>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Keyboard',
  data: () => ({}),
  mounted() {
    this.watchKeyboard();
  },
  methods: {
    emit(methodFather) { this.$emit(methodFather) },
    down() {
      this.$refs.btnDown.blur();
      this.emit('down');
    },
    up() {
      this.$refs.btnUp.blur();
      this.emit('up');
    },
    back() {
      this.$refs.btnSpeak.blur();
      this.emit('back');
    },
    select(index = undefined) {
      this.$refs.btnSpeak.blur();
      this.emit('select', index);
    },
    watchKeyboard() {
      document.addEventListener("keyup", this.keyMapper);
    },
    keyMapper() {
      const key = event.keyCode;
      const actions = {
        40: () => this.down(),
        38: () => this.up(),
        13: () => this.select(),
        8: () => this.back()
      }

      if (key in actions) {
        actions[key]()
      } else if (this.keyIsNumber(key)) {
        const keyInNumber = key - 48;
        this.select(keyInNumber);
      }
    },
    keyIsNumber(key) {
      const _key = key - 48;
      const isNumber = _key > -1 && _key < 10;
      return isNumber;
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../styles/mixins.scss';

#keyboard {
  margin: 0 15px;
}

.btn {
  box-shadow: 0px 2px 5px 0px rgba(0,0,0,0.2);
  font-size: 2em;

  &:focus { outline: none; }
}

.direction {
  @include bg-adapter(#2ecc71);
}

.speak {
  @include bg-adapter(#3498db);
}


</style>
