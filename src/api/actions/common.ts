import { Login } from "@/models";
import { AxiosPromise } from "axios";
import axios from "@/api/api";

export const login = {
  login: (params: Login): AxiosPromise<any> => {
    return axios.request({
      url: '/api/login',
      data: params,
    })
  },
  logout: (): AxiosPromise<any> => {
    return axios.request({
      url: '/api/logout',
    })
  },
  findPassword: (params: Login): AxiosPromise<any> => {
    return axios.request({
      url: '/api/find-password',
      data: params,
    })
  },
  isLogin: (): AxiosPromise<any> => {
    return axios.request({
      url: '/api/is-login',
    })
  },
}