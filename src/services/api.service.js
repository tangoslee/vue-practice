import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";

Vue.use(VueAxios, axios);

const apiService = {
  get(url, data = {}, options = {}) {
    // const query = data.length > 0 ? `?${Object.from(data).join("&")}` : "";
    // console.log('apiService.get()', `${url}${query}`);
    // return Vue.axios.get(`${url}${query}`).then(res => {
    //   console.log('res: ', res);
    //   return new Promise((resolve, reject) => {
    //     resolve(res);
    //   });
    // });
    return Vue.axios({
      ...options,
      responseType: "json",
      method: "get",
      url,
      data
    });
  },

  post(url, data = {}, options = {}) {
    return Vue.axios({
      ...options,
      responseType: "json",
      method: "post",
      url,
      data
    });
  },

  put(url, data = {}, options = {}) {
    return Vue.axios({
      ...options,
      responseType: "json",
      method: "put",
      url,
      data
    });
  },

  delete(url, data = {}, options = {}) {
    return Vue.axios({
      ...options,
      responseType: "json",
      method: "delete",
      url,
      data
    });
  }
};

export default apiService;
