<template>
  <div class="row">
    <div v-for="pais in paises" :key="pais.name" class="col-12">
      <Card :pais="pais" />
    </div>
  </div>
</template>
<script>
import Card from "./Card.vue";
import { onMounted, computed } from "@vue/runtime-core";
import { useStore } from "vuex";
export default {
  components: {
    Card,
  },
  setup() {
    const store = useStore();
    const paises = computed(() => {
      return store.getters.rankingPaises;
    });
    onMounted(async () => {
      await store.dispatch("getPaises");
      await store.dispatch("filtrarContinente", "");
    });
    return { paises };
  },
};
</script>