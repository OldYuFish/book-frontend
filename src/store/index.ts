import { login } from "@/api";
import { createStore } from "vuex";
import { IUserInfo } from "./models";

const store = createStore({
  state: {
    userInfo: {
      token: "",
      roleId: 0,
      userName: "",
    } as IUserInfo
  },
  mutations: {
    setUserInfo: (state, userInfo: IUserInfo): void => {
      localStorage.setItem("token", userInfo.token)
      state.userInfo = userInfo
    },
    logout: (state) => {
      state.userInfo.token
      localStorage.setItem("token", "")
    },
  },
  actions: {
    async getUserInfo({ commit }) {
      const { data } = await login.isLogin()
      if (data.code === 0) {
        commit('setUserInfo', data.data)
      } else {
        commit(
          'setUserInfo',
          {
            token: "",
            roleId: 0,
            userName: "",
          }
        )
        location.replace('/login')
      }
    },
  },
  getters: {
    userInfo: (state) => {
      return state.userInfo
    },
  }
});

export default store;
