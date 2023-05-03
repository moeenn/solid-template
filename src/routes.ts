import { Component, ParentProps, lazy } from "solid-js"
import { BaseLayout, DashboardLayout } from "@/layouts"

const HomePage = lazy(() => import("@/pages/HomePage"))
const AboutPage = lazy(() => import("@/pages/AboutPage"))
const LoginPage = lazy(() => import("@/pages/LoginPage"))
const DashboardUsersPage = lazy(() => import("@/pages/Dashboard/UsersPage"))
const DashboardTestPage = lazy(() => import("@/pages/Dashboard/TestPage"))

export interface IRoute {
  path: string
  page: Component<{}>
  layout: Component<ParentProps>
  auth: boolean
}

export const routes: IRoute[] = [
  {
    path: "/",
    page: HomePage,
    layout: BaseLayout,
    auth: false,
  },
  {
    path: "/about",
    page: AboutPage,
    layout: BaseLayout,
    auth: false,
  },
  {
    path: "/login",
    page: LoginPage,
    layout: BaseLayout,
    auth: false,
  },
  {
    path: "/dashboard/users",
    page: DashboardUsersPage,
    layout: DashboardLayout,
    auth: true,
  },
  {
    path: "/dashboard/test",
    page: DashboardTestPage,
    layout: DashboardLayout,
    auth: true,
  },
]