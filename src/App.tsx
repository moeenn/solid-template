import { Component, For, Show } from "solid-js"
import { Dynamic } from "solid-js/web"
import { Routes, Route, Navigate } from "@solidjs/router"
import routes from "./routes"
import { UserStore } from "@/stores"

const App: Component = () => {
  return (
    <Routes>
      <For each={routes}>
        {(route) => (
          <Route
            path={route.path}
            component={() => (
              <route.layout>
                <Show when={route.auth_required && !UserStore.store.isLoggedIn}>
                  <Navigate href="/login" />
                </Show>

                <Dynamic component={route.page} />
              </route.layout>
            )}
          />
        )}
      </For>
    </Routes>
  )
}

export default App
