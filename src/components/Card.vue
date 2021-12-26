<template>
  <div class="card">
    <div class="card-title text-center">
      <h5 class="text-center bg-dark">Nombre: {{ pais.name.official }}</h5>
      <img
        :src="pais.flags[0]"
        :alt="pais.name.official"
        class="img-fluid w-25"
      />
    </div>
    <div class="card-body">
      <p class="card-text">
        <span class="badge bg-info text-dark d-block mb-1 py-2"
          >Population: {{ numeroFormat(pais.population) }}</span
        >
        <span class="badge bg-dark d-block mb-1"
          >Capital: {{ pais.capital }}</span
        >
        <span class="badge bg-dark d-block mb-1"
          >Region: {{ pais.region }}</span
        >
      </p>
    </div>
  </div>
</template>
<script>
export default {
  props: ["pais"],
  setup() {
    const numeroFormat = (num) => {
      return num.toLocaleString();
    };
    return { numeroFormat };
  },
};
</script>