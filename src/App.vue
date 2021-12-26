<template>
  <div class="container text-center">
    <img alt="Vue logo" src="./assets/logo.png" />
    <h1 class="text-center">API PAIS</h1>
    <Continentes />
    <Form />
    <CardList />
  </div>
</template>

<script>
import CardList from "./components/CardList.vue";
import Continentes from "./components/Continentes.vue";
import Form from "./components/Form.vue";
export default {
  name: "App",
  components: {
    CardList,
    Continentes,
    Form,
  },
};
</script>
