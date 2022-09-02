import { Component, For } from "solid-js"
import { Link, useLocation } from "@solidjs/router"

const links = [
  { href: "/dashboard/users", text: "Users" },
  { href: "/dashboard/test", text: "Test" },
]

const DashboardSidebar: Component = () => {
  const location = useLocation()

  return (
    <div>
      <Link href="/">
        <h1 class="text-xl text-gray-800 p-4">Logo</h1>
      </Link>

      <div class="mt-3">
        <For each={links}>{
          (link) => (
            <Link href={link.href} class="p-4 block hover:bg-gray-100 text-sm">
              <span classList={{ "text-blue-700": location.pathname === link.href }}>{link.text}</span>
            </Link>
          )
        }</For>
      </div>
    </div>
  )
}

export default DashboardSidebar