<template>
  <div id="Keyboard" class="row align-center justify-center">
    <button type="button" class="btn--direction" @click="up()" @mouseup="removeFocus('btnDown')">
      <v-icon icon="chevron-up"></v-icon>
    </button>
    <button
      type="button"
      ref="btnDown"
      class="btn--direction"
      @click="down()"
      @mouseup="removeFocus('btnDown')"
    >
      <v-icon icon="chevron-down"></v-icon>
    </button>
    <button type="button" class="btn--speak" @click="select()" @mouseup="removeFocus('btnDown')">
      <v-icon icon="volume-up"></v-icon>
    </button>
  </div>
</template>

<script>
export default {
  name: "Keyboard",
  async mounted() {
    this.watchKeyboard();
  },
  methods: {
    removeFocus(ref) {
      this.$refs[ref].blur();
    },
    down() {
      this.$emit("down");
    },
    up() {
      this.$emit("up");
    },
    back() {
      this.$emit("back");
    },
    select(index = undefined) {
      this.$emit("select", index);
    },
    watchKeyboard() {
      document.addEventListener("keyup", this.keyMapper);
    },
    async keyMapper(event) {
      const key = event.key;

      const actions = {
        ArrowDown: () => this.down(),
        ArrowUp: () => this.up(),
        Enter: () => this.select(),
        Backspace: () => this.back(),
        Escape: () => this.back()
      };

      if (key in actions) {
        actions[key]();
      } else if (this.isNumber(key)) {
        this.select(+key);
      }
    },
    isNumber(key) {
      return -1 < +key !== NaN;
    }
  }
};
</script>

<style lang="scss" scoped>
#Keyboard {
  margin: 0 15px;
}

.btn {
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.2);
  font-size: 2em;
  &:focus {
    outline: none;
  }
}

.btn--direction {
  @extend .btn;
  @include bg-adapter(#2ecc71);
}

.btn--speak {
  @extend .btn;
  @include bg-adapter(#3498db);
}
</style>
