import Vue from "vue";
import App from "@/App.vue";
import router from "@/router";
import store from "@/stores/store";

Vue.config.productionTip = false;

if (process.env.NODE_ENV === "production") {
  require("dotenv").config();
} else {
  require("dotenv").config({
    path: "../.env.local"
  });
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
