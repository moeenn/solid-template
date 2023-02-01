import { Component, Show } from "solid-js"
import { Container } from "@/components"
import { Link } from "@solidjs/router"
import { UserStore } from "@/stores"

const Navbar: Component = () => {
  return (
    <div class="bg-blue-600 drop-shadow-lg">
      <Container>
        <div class="flex flex-row justify-between py-1">
          <Link href="/" class="my-auto">
            <h1 class="text-xl text-white">Logo</h1>
          </Link>

          <nav class="flex flex-row space-x-5 py-3 my-auto">
            <Link
              class="text-xs text-white hover:bg-blue-500 px-3 py-2 rounded"
              href="/about"
            >
              About
            </Link>

            <Show when={UserStore.store.isLoggedIn}>
              <Link
                class="text-xs text-white hover:bg-blue-500 px-3 py-2 rounded"
                href="/dashboard/users"
              >
                Dashboard
              </Link>
            </Show>

            <Show
              when={!UserStore.store.isLoggedIn}
              fallback={
                <button
                  class="text-xs text-white hover:bg-blue-500 px-3 py-2 rounded"
                  onClick={() => UserStore.Logout()}
                >
                  Logout
                </button>
              }
            >
              <Link
                class="text-xs text-white hover:bg-blue-500 px-3 py-2 rounded"
                href="/login"
              >
                Login
              </Link>
            </Show>
          </nav>
        </div>
      </Container>
    </div>
  )
}

export default Navbar
