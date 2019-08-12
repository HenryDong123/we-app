import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);
const Login = () => import("./views/login/Login");
export default new Router({
  routes: [
    {
      path: "/login",
      name: "Login",
      component: Login
    }
  ]
});
