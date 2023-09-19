import auth from "@/middleware/auth";
import guest from "@/middleware/guest";

const routes = [
  {
    path: "/",
    name: "Login",
    component: () => import("@/views/auth/login/index.vue"),
  },
  {
    path: "/app",
    name: "Layout",
    redirect: "/app/home",
    component: () => import("@/Layout/index.vue"),
    meta: {
      middleware: [auth],
    },
    children: [
      {
        path: "blank-page",
        name: "blank-page",
        component: () => import("@/views/blank-page.vue"),
        meta: {
          groupParent: "Utility",
        },
      },
      {
        path: "notifications",
        name: "notifications",
        component: () => import("@/views/notifications.vue"),
        meta: {
          hide: true,
        },
      },
      {
        path: "home",
        name: "home",
        component: () => import("@/views/home/index.vue"),
        meta: {
          hide: true,
        },
      },
      {
        path: "profile",
        name: "profile",
        component: () => import("@/views/profile.vue"),
      },
    ],
  },
  
  {
    path: "/:catchAll(.*)",
    name: "404",
    component: () => import("@/views/404.vue"),
  },
  
];

export default routes;
