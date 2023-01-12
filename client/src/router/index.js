import { createRouter, createWebHistory } from "vue-router";
import ArgonautesView from "../views/ArgonautesView.vue";
import About from "../views/About.vue";
let routes = [
    {
      name: "Home",
      path: "/",
      component: ArgonautesView,
      meta: {
        title: "Les Argonautes",
      },
    },
    {
      name: "About",
      path: "/about",
      component: About,
    },
  ],
  router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
  });
router.beforeEach((to) => {
  document.title = `${to.meta.title}`;
});
export default router;
