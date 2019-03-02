<template>
  <div id="ListSays">
    <div class="col justify-center">
      <List id="list" ref="list" :data="items" field="text" header="PriVue" @speak="onSpeak()"></List>
      <div id="Tips">
        <Card title="Dicas de uso">
          <ul class="lista-de-dicas">
            <li>- Use o teclado numérico (0-9) para agilizar suas escolhas!</li>
            <li>- Use setas (cima, baixo) para mudança das opções e 'Enter' para selecionar.</li>
            <li>- Use o teclado básico abaixo ou clique sobre os itens</li>
          </ul>
        </Card>
        <Keyboard @up="onUp" @down="onDown" @back="onBack" @select="onSelectItem($event)"></Keyboard>
      </div>
    </div>
  </div>
</template>

<script>

import SpeechService from "../plugins/speechService.js";
import dataJSON from "@/assets/modules.json";

export default {
  name: "listSay",
  components: {
    Keyboard: () => import('@/components/Keyboard'),
    List: () => import('@/components/List'),
    Card: () => import('@/components/Card')
  },
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
    async onSpeak() {
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

<style lang="scss" scoped>

.lista-de-dicas {
  font-size: 20px;
}

#ListSays {
  @include lg {
    padding: 0 20%;
  }
}

#list {
  margin: 0 16px;
}
</style>
