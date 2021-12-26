<template>
  <input
    v-model="texto"
    type="text"
    placeholder="Ingresar Pais"
    class="form-control my-3"
    @keyup="buscar"
  />
</template>
<script>
import { ref } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    const texto = ref("");
    const store = useStore();
    const buscar = () => {
      store.dispatch("filtroInput", texto.value);
    };
    return { texto, buscar };
  },
};
</script>
<style lang="">
</style>