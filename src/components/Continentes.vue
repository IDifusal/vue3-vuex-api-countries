<template>
  <div class="text-center">
    <h3 class="text-center text-black">Filtrar por continente</h3>
    <div class="btn-group" role="group" aria-label="Basic example">
      <button @click="filtro('Americas')" type="button" class="btn btn-primary">
        America
      </button>
      <button @click="filtro('Europe')" type="button" class="btn btn-primary">
        Europa
      </button>
      <button @click="filtro('Americas')" type="button" class="btn btn-primary">
        Oceania
      </button>
      <button @click="filtro('Africa')" type="button" class="btn btn-primary">
        Africa
      </button>
      <button @click="filtro('')" type="button" class="btn btn-primary">
        All
      </button>
    </div>
  </div>
</template>
<script>
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();

    const filtro = (region) => {
      store.dispatch("filtrarContinente", region);
    };
    return { filtro };
  },
};
</script>
<style >
</style>