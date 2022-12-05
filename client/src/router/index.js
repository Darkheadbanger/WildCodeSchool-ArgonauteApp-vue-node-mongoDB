import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/ArgonautesView.vue";
import About from "../views/About.vue";
// Ici sert à tromper le changement de la page c'est a dire, de changer la page mais Toujours dans le même page
const routes = [
  // Ici, le router "faux hangement de page" se réalise avec le component
  // Pour récupèrer le fichier HomeView qui contient le fichier TheWelcome.vue
  {
    name: "Home",
    path: "/",
    component: Home,
    meta: {
      title: "Les Argonautes",
    },
  },
  {
    name: "About",
    path: "/about",
    component: About,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

// Le nom d'onglet est "les argonautes" au lieu de vue
router.beforeEach((to) => {
  document.title = `${to.meta.title}`;
});

// On export router au fichier app.vue
export default router;
