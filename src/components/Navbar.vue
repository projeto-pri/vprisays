<template>
  <nav class="row wrap">
    <a title="PriVue" to="/">
      <h1 class="title-page">PriVue</h1>
    </a>
    <ul class="navigation">
      <li class="nav-item">Ajuda</li>
      <li class="nav-item">Projeto</li>
      <li class="nav-item">Contribuidores</li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "Navbar"
};
</script>

<style scoped lang="scss">
nav {
  background: $darken;
  padding: 0 15px;
  color: white;
  margin-bottom: 15px;
  justify-content: space-between;
  box-shadow: 0px 2px 5px 0px #00000033;

  @media screen and (max-width: 460px) {
    justify-content: center;
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

  * {
    flex: 0 1 auto;
  }

  @media screen and (max-width: 460px) {
    justify-content: center;
  }
}

.nav-item {
  flex: 1;
  font-weight: 300;
  color: #dedede;
  font-size: 1.1em;
  padding: 1.1em;

  &:hover {
    background: darken($darken, 1%);
    color: #f6f6f6;
  }
}
</style>
