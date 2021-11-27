import { createRouter, createWebHashHistory } from "vue-router";
import Menu from "../views/Menu.vue";
import ItemDetails from "../views/ItemDetails.vue";
import Cart from "../views/Cart.vue";

const routes = [
  {
    path: "/",
    name: "Menu",
    component: Menu,
  },
  {
    path: "/details/:pathname",
    name: "details",
    component: ItemDetails,
  },
  {
    path: "/cart",
    name: "cart",
    component: Cart,
    props: true
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
