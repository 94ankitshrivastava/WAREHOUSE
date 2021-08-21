import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const router = new Router({
  // mode: "history",
  // base: "/#/",
  routes: [
    {
      path: "/",
      name: "Warehouses",
      component: () => import("@/views/Warehouse.vue"),
      meta: {
        searchable: true,
      },
    },
  ],
});

export default router;
