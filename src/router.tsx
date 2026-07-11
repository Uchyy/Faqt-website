import { createRouter, createRoute, createRootRoute, Outlet } from "@tanstack/react-router";

import Home from "./pages/Home";
import Auth from "./pages/Auth";
import Dashboard from "./pages/Dashboard";
import { PageProvider } from "./context/PageContext";

const rootRoute = createRootRoute({
  component: () =>  <PageProvider>
      <Outlet />
    </PageProvider>,
});

// 🏠 Home
const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Home,
});

// 🔐 Auth
const authRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/auth",
  component: Auth,
});

// 🔐 Dashboard
const dashboardRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/dashboard",
  component: Dashboard,
});

const routeTree = rootRoute.addChildren([indexRoute, authRoute, dashboardRoute]);

export const router = createRouter({
  routeTree,
});