const state = {
  token: null,
};

const getters = {
  isLoggedIn: state => !!state.token,
};

const actions = {
  // To call mutation call commit
  logout: ({ commit }) => {
    commit('setToken', null);
  },
};

const mutations = {
  setToken: (state, token) => {
    state.token = token;
  },
};
