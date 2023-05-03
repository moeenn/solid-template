import { Component, ParentProps } from "solid-js"

export const Container: Component<ParentProps> = ({ children }) => {
  return <div class="container mx-auto px-4">{children}</div>
}