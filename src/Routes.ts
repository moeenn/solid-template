import { Component, ParentProps } from "solid-js"
import { BaseLayout, DashboardLayout } from "./Layouts"

import {
  HomePage, 
  AboutPage, 
  LoginPage, 
  DashboardUsersPage, 
  DashboardTestPage,
} from "./Pages"

export interface IRoute {
  path: string,
  page: Component<{}>,
  layout: Component<ParentProps>,
  auth_required: boolean,
}

const routes: IRoute[] = [
  { 
    path: "/", 
    page: HomePage, 
    layout: BaseLayout,
    auth_required: false, 
  },
  { 
    path: "/about", 
    page: AboutPage, 
    layout: BaseLayout,
    auth_required: false, 
  },
  { 
    path: "/login", 
    page: LoginPage, 
    layout: BaseLayout,
    auth_required: false, 
  },
  { 
    path: "/dashboard/users", 
    page: DashboardUsersPage, 
    layout: DashboardLayout,
    auth_required: true, 
  },
  { 
    path: "/dashboard/test", 
    page: DashboardTestPage, 
    layout: DashboardLayout,
    auth_required: true, 
  },
]

export default routes