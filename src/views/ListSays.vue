<template>
  <div id="ListSays">
    <div class="col justify-center">
      <List id="list" ref="list" :data="items" field="text" header="PriVue" @speak="onSpeak()"></List>
      <div id="Tips">
        <Card title="Dicas úteis">
          <ul>
            <li>- use o teclado número (0-9) para agilizar suas escolhas!</li>
            <li>- use setas (cima, baixo) para mudança das opções e 'Enter' para selecionar.</li>
            <li>- use o teclado básico abaixo ou clique sobre os itens</li>
          </ul>
        </Card>
        <Keyboard @up="onUp" @down="onDown" @back="onBack" @select="onSelectItem($event)"></Keyboard>
      </div>
    </div>
  </div>
</template>

<script>
import Keyboard from "@/components/Keyboard";
import List from "@/components/List";
import Card from "@/components/Card";

import dataJSON from "@/assets/modules.json";
import SpeechService from '../plugins/speechService.js';

export default {
  name: "listSay",
  components: { Keyboard, List, Card },
  data: () => ({
    items: [],
    synth: null,
    inProgress: false
  }),
  created() {
    this.items = dataJSON;
    this.synth = new SpeechService();
  },

  methods: {
    onSpeak() {
      if (this.inProgress === false) {
        const currentText = this.$refs.list.currentText;

        this.inProgress = true;
        this.synth.speak(currentText);

        setTimeout(() => {
          this.onResetList();
          this.inProgress = false;
        }, 1500);
      }
    },
    onUp() {
      this.$refs.list.up();
    },
    onDown() {
      this.$refs.list.down();
    },
    onBack() {
      this.$refs.list.back();
    },
    onSelectItem(index) {
      this.$refs.list.selectItem(index);
    },
    onResetList() {
      this.$refs.list.reset();
    }
  }
};
</script>

<style scoped>
#list {
  margin: 0 16px;
}
</style>
