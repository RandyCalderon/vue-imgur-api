import api from '../../api/imgur';

const state = {
  images: [],
};

const getters = {
  allImages: state => state.images,
};

const actions = {
  // Rootstate allows you to access state of other modules
  async fetchImages({ rootState, commit }) {
    const { token } = rootState.auth;
    const response = await api.fetchImages(token);
    console.log(response);
    commit('setImages', response);
  },
};

const mutations = {
  setImages: (state, images) => {
    state.images = images;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
