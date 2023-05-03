import { Show } from "solid-js"
import { UserStore } from "@/stores"

export default function HomePage() {
  return (
    <div>
      <div class="mt-6">
        <h1 class="text-2xl text-gray-800 py-3">Hello world</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
          soluta assumenda ullam nisi placeat officia quo quia maxime? In quos
          quas ratione, quam adipisci praesentium voluptatum vero perspiciatis
          tempore consectetur.
        </p>
      </div>

      <Show when={UserStore.store.isLoggedIn}>
        <div class="mt-6">
          <p>Email {UserStore.store.user.email}</p>
          <p>Password: {UserStore.store.user.password}</p>
        </div>
      </Show>
    </div>
  )
}
