<template>
  <header>
    <a class="title-page" title="PriVue" to="/"><h1>PriVue</h1></a>
    <ul class="navigation">
      <li class="nav-item">Ajuda</li>
      <li class="nav-item">Projeto</li>
      <li class="nav-item">Contribuidores</li>
    </ul>
  </header>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style scoped lang="scss">
@import '../styles/colors.scss';

header {
  display: flex;
  flex-flow: row wrap;
  align-content: center;
  align-items: center;
  padding: 0 15px;
  margin-bottom: 15px;
  background: $darken;
  color: white;
  user-select: none;
  box-shadow: 0px 1px 10px 0px rgba(0,0,0,0.2)
}

.title-page {
  flex: 1;

  h1 {
    font-size: 2em;
    font-weight: 300;
    margin: 0;
  }
}

.navigation {
  list-style: none;
  margin: 0;
  justify-content: flex-end;
  display: flex;
}

.nav-item {
  flex: 1;
  padding: 1.2em;
  font-weight: 300;

  &:hover {
    background:darken($primary, 25%);
    zoom: 102%;
  }
}
</style>
