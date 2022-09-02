import { Component } from "solid-js"
import { Counter } from "@/Components"

const AboutPage: Component = () => {
  return (
    <div class="mt-6">
      <h1 class="text-2xl text-gray-800 py-3">About Page</h1>
      <Counter />
    </div>
  )
}

export default AboutPage