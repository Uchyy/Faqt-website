import { createRouter, createRoute, createRootRoute, Outlet } from "@tanstack/react-router";

import Home from "./pages/Home";
import Auth from "./pages/Auth";
import Dashboard from "./pages/Dashboard";
import { PageProvider } from "./context/PageContext";
import PublicPage from "./publicpage/PublicPage";
import { demoPageBold, demoPageLight } from "./demo/demoPage";

const rootRoute = createRootRoute({
  component: () => (
    <PageProvider initialPage={demoPageBold}>
      <Outlet />
    </PageProvider>
  ),
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

//Public Page
const publicRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "page/$slug",
  component: PublicPage,
});

const routeTree = rootRoute.addChildren([indexRoute, authRoute, dashboardRoute, publicRoute]);

export const router = createRouter({
  routeTree,
});