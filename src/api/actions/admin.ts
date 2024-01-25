import {
  BookInformation,
  BookQuery,
  UserDetail,
  UserQuery,
  ActivityQuery,
  ActivityInformation,
  AlertQuery, AlertInformation
} from "@/models";
import { AxiosPromise } from "axios";
import axios from '@/api/api';

export const bookManage = {
  query: (params: { bookQuery: BookQuery, pageIndex: number, pageSize: number }): AxiosPromise<any> => {
    return axios.request({
      url: '/api/book-list',
      data: params,
    })
  },
  info: (params: { id: number }): AxiosPromise<any> => {
    return axios.request({
      url: '/api/book-detail',
      data: params,
    })
  },
  create: (params: BookInformation ): AxiosPromise<any> => {
    return axios.request({
      url: '/api/book-create',
      data: params,
    })
  },
}

export const userManage = {
  query: (params: { userQuery: UserQuery, pageIndex: number, pageSize: number }): AxiosPromise<any> => {
    return axios.request({
      url: '/api/user-list',
      data: params,
    })
  },
  create: (params: UserDetail ): AxiosPromise<any> => {
    return axios.request({
      url: '/api/user-create',
      data: params,
    })
  },
}

export const activityManage = {
  query: (params: { activityQuery: ActivityQuery, pageIndex: number, pageSize: number }): AxiosPromise<any> => {
    return axios.request({
      url: '/api/activity-list',
      data: params,
    })
  },
  create: (params: ActivityInformation ): AxiosPromise<any> => {
    return axios.request({
      url: '/api/activity-create',
      data: params,
    })
  },
}

export const alertManage = {
  query: (params: { alertQuery: AlertQuery, pageIndex: number, pageSize: number }): AxiosPromise<any> => {
    return axios.request({
      url: '/api/alert-list',
      data: params,
    })
  },
  create: (params: AlertInformation ): AxiosPromise<any> => {
    return axios.request({
      url: '/api/alert-create',
      data: params,
    })
  },
}

export const self = {
  updatePassword: (params: { oldPassword: string, newPassword: string }): AxiosPromise<any> => {
    return axios.request({
      url: '/api/update-password',
      data: params,
    })
  },
}
