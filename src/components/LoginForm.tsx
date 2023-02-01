import { Component, createSignal } from "solid-js"
import { UserStore } from "@/stores"

interface IForm {
  email: string
  password: string
}

const LoginForm: Component = () => {
  const initForm = { email: "", password: "" }
  const [form, setForm] = createSignal<IForm>(initForm)

  const setEmail = (email: string) => setForm({ ...form(), email })
  const setPassword = (password: string) => setForm({ ...form(), password })

  const handleSubmit = () => {
    UserStore.Login({ user: form(), token: "sample_token" })
    setForm(initForm)
  }

  return (
    <form
      class="w-96 mx-auto bg-gray-50 drop-shadow-md rounded p-4"
      onSubmit={handleSubmit}
    >
      <h1 class="text-2xl text-gray-800 py-3">Login</h1>

      <fieldset class="py-5">
        <label class="text-xs block">Email</label>
        <input
          class="bg-gray-200 active:bg-gray-300 px-3 py-2 rounded w-full"
          type="email"
          onChange={(e) => setEmail(e.currentTarget.value)}
        />
      </fieldset>

      <fieldset class="py-5">
        <label class="text-xs block">Password</label>
        <input
          class="bg-gray-200 active:bg-gray-300 px-3 py-2 rounded w-full"
          type="password"
          onChange={(e) => setPassword(e.currentTarget.value)}
        />
      </fieldset>

      <input
        type="submit"
        value="Login"
        class="bg-gray-300 text-gray-900 active:bg-gray-300 text-sm mt-6 px-3 py-2 rounded"
      />
    </form>
  )
}

export default LoginForm
