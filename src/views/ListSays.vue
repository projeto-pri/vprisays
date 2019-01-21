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

export default {
  name: "listSay",
  components: { Keyboard, List, Card },
  data: () => ({
    items: [],
    voices: [],
    synth: null
  }),
  async created() {
    this.items = dataJSON;
    this.speak('Seja Bem-vindo ao PriVue, use as setas ou mouse para navegar entre as frases');
  },
  methods: {
    initSynth() {
      if (!("speechSynthesis" in window)) {
        this.aletIncompatible();
      } else {
        this.synth = window.speechSynthesis;
        this.voices = this.synth.getVoices();

        if (!this.voices.length) {
          this.aletIncompatible()
        }
      }
    },
    speak(msg) {
      if (!this.synth) {
        this.initSynth();
      }
      const _msg = Object.assign(new SpeechSynthesisUtterance(msg), {
        lang: "pt-BR",
        rate: 1.0,
        pitch: 1.0, // 0 to 2
        voiceURI: "native"
      });

      // default language pt-BR
      this.synth.speak(_msg);
    },
    onSpeak() {
      const currentText = this.$refs.list.currentText;
      this.speak(currentText);
      setTimeout(() => this.onResetList(), 1500);
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
    },
    aletIncompatible() {
      console.warn("This browser is not supported!");
      setTimeout(() => alert("Este navegador não é suportado! Recomendo o Google Chrome."), 500)
    }
  }
};
</script>

<style scoped>
#list {
  margin: 0 16px;
}
</style>
