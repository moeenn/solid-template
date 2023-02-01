import { Component, Show } from "solid-js"
import { Navigate } from "@solidjs/router"
import { LoginForm } from "@/components"
import { UserStore } from "@/stores"

const LoginPage: Component = () => {
  return (
    <div>
      <Show when={UserStore.store.isLoggedIn}>
        <Navigate href="/" />
      </Show>

      <div class="flex flex-col mt-12">
        <LoginForm />
      </div>
    </div>
  )
}

export default LoginPage
