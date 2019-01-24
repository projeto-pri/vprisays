<template>
  <nav id="NavBar" class="row wrap">
    <a title="PriVue" @click="goTo('/')">
      <h1 class="title-page">{{ title }}</h1>
    </a>
    <ul class="navigation">
      <template v-for="(item, index) in links">
        <li class="nav-item" :key="index" @click="goTo(item.router)">
          <span v-if="item.name">{{ item.name }}</span>
          <v-icon v-if="item.icon" :icon="item.icon" size="lg" />
        </li>
      </template>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  data: () => ({
    title: "VPriSays",
    links: [
      { name: 'Projeto', icon: ['fab', 'github'], router: "/projeto" },
      { name: 'Ajuda', icon: 'question-circle', router: "/ajuda" },
    ]
  }),
  methods: {
    goTo(router) {
      this.$router.push(router);
    }
  }
};
</script>

<style scoped lang="scss">
nav {
  background: $primary;
  padding: 0 15px;
  color: white;
  margin-bottom: 15px;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 2px 5px 0px #00000033;

  @include sm {
    flex-direction: column;
  }
}

.title-page {
  font-size: 2em;
  font-weight: 300;
  margin: 0;
  padding: 0.3em;
}

.navigation {
  display: inline-flex;
  flex-flow: row nowrap;
  justify-content: flex-end;
  align-items: flex-start;

  & > * {
    flex: 0 1 auto;
  }

  @media screen and (max-width: 460px) {
    justify-content: center;
  }
}

.nav-item {
  flex: 1;
  display: inline-flex;
  align-items: center;
  font-weight: 300;
  color: #ffffff;
  background: $primary;
  font-size: 1.1em;
  padding: 1.1em;
  cursor: pointer;

  &:hover {
    background: darken($primary, 5%);
  }

  & > * {
    flex: 1;
  }

  span {
    @include sm() {
      display: none;
    }
  }

  svg {
    margin: 0 5px;
  }
}
</style>
