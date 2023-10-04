import auth from "@/middleware/auth";
import guest from "@/middleware/guest";
import { menuItems, menuItems2 } from "@/constant/data";

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
      menuItems: menuItems,
    },
    children: [
      {
        path: "home",
        name: "home",
        component: () => import("@/views/home/index.vue"),
        meta: {
          hide: true,
        },
      },
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
        path: "profile",
        name: "profile",
        component: () => import("@/views/profile.vue"),
      },
    ],
  },
  {
    path: "/app2",
    name: "Layout2",
    redirect: "/app2/home2",

    component: () => import("@/Layout/index.vue"),
    meta: {
      middleware: [auth],
      menuItems: menuItems2,
    },
    children: [
      {
        path: "home",
        name: "home2",
        component: () => import("@/views/home/index.vue"),
        meta: {
          hide: true,
        },
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
