<template>
  <div id="NotFound" class="col align-center">
    <h3 class="title">Página não encontrada!</h3>
    <br>
    <router-link to="/">
      <div class="row button">
        <v-icon icon="home"></v-icon>
        <div>Início</div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'NotFound'
}
</script>

<style scoped lang="scss">
.title {
  font-size: 200%;
  font-weight: 100;
}

.button {
  cursor: pointer;
  background: $primary;
  color: white;
  padding: 15px 35px;
  border-radius: 4px;
  font-size: 14px;
  box-shadow: 0px 2px 5px 0px #00000033;

  > div {
    margin-left: 5px;
  }
}
</style>

