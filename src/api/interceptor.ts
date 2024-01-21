import type { AxiosInstance, AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from 'axios'
import axios from 'axios'
import { ElMessage } from 'element-plus'

export default class HttpClient {
  baseUrl: string

  constructor(public apiUrl: string = '') {
    this.baseUrl = apiUrl;
  }

  request(httpOptions: AxiosRequestConfig) {
    const instance: AxiosInstance = axios.create();
    httpOptions = this.mergeConfig(httpOptions);
    this.interceptors(instance, httpOptions.url);
    return instance(httpOptions);
  }

  private mergeConfig(httpOptions: AxiosRequestConfig): AxiosRequestConfig {
    // 默认基础配置项, 等待自定义(httpOptions)配置项传入合并
    return Object.assign(
      {
        baseURL: this.baseUrl,
        timeout: 20000,
        headers: {
          Authorization: localStorage.getItem("token") === "" ? undefined : localStorage.getItem("token"),
          // "Content-Type": "application/json",
        },
        method: 'post',
      },
      httpOptions,
    );
  }

  private interceptors(instance: AxiosInstance, url?: string) {
    instance.interceptors.request.use(
      (config: InternalAxiosRequestConfig) => {
        return config;
      },
      (error) => {
        return Promise.reject(error);
      },
    );

    instance.interceptors.response.use(
      (response: AxiosResponse) => {
        const data: IResponse = response.data as any;

        const codeRes = {
          '10000': '登录超时，请重新登录！',
        }
        const systemError: string[] = [];
        if (data.code && systemError.includes(data.code.toString())) {
          ElMessage.error("系统错误，请联系系统管理员！");
        }
        if (data.code && codeRes[data.code.toString()]) {
          ElMessage.error(codeRes[data.code.toString()]);
        }

        return response;
      },

      (error) => {
        // TODO 处理413status '上传文件过大'
        console.log(error.response);
        return Promise.reject(error);
      },
    );
  }
}
