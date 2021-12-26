import { createStore } from "vuex";

export default createStore({
  state: {
    paises: [],
    paisesFiltrados: [],
  },
  //MODIFICAR EL STATE
  mutations: {
    setPaises(state, payload) {
      state.paises = payload;
    },
    setPaisesFiltrados(state, payload) {
      state.paisesFiltrados = payload;
    },
  },
  actions: {
    async getPaises({ commit }) {
      try {
        const res = await fetch("https://restcountries.com/v3/all");
        const data = await res.json();
        //console.log(data);
        this.commit("setPaises", data);
      } catch (error) {
        console.log(error);
      }
    },
    filtrarContinente({ comit, state }, region) {
      const filtro = state.paises.filter((pais) =>
        pais.region.includes(region)
      );
      this.commit("setPaisesFiltrados", filtro);
    },
    filtroInput({ state }, texto) {
      const textoProcesado = texto.toLowerCase();
      const filtro = state.paises.filter((pais) => {
        const textoApi = pais.name.official.toLowerCase();
        if (textoApi.includes(textoProcesado)) {
          return pais;
        }
      });
      this.commit("setPaisesFiltrados", filtro);
    },
  },
  getters: {
    rankingPaises(state) {
      return state.paisesFiltrados.sort((a, b) => {
        return a.population < b.population ? 1 : -1;
      });
    },
  },
  modules: {},
});
