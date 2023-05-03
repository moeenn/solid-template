import { For, Show } from "solid-js"
import { Dynamic } from "solid-js/web"
import { Router, Routes, Route, Navigate } from "@solidjs/router"
import { routes } from "./routes"
import { UserStore } from "@/stores"

export const App = () => {
  return (
    <Router>
      <Routes>
        <For each={routes}>
          {(route) => (
            <Route
              path={route.path}
              component={() => (
                <route.layout>
                  <Show when={route.auth && !UserStore.store.isLoggedIn}>
                    <Navigate href="/login" />
                  </Show>

                  <Dynamic component={route.page} />
                </route.layout>
              )}
            />
          )}
        </For>
      </Routes>
    </Router>
  )
}