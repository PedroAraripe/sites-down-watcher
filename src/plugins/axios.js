import axios from "axios";

const baseURL = `${process.env.base_url}:${process.env.server_port}`;

const instance = axios.create({ baseURL });

export default {
  install: function (Vue) {
    Object.defineProperty(Vue.prototype, "$axios", { value: instance });
  },
};
