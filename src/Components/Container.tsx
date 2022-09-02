import { Component, ParentProps } from "solid-js"

const Container: Component<ParentProps> = ({ children }) => {
  return (
    <div class="container mx-auto px-4">
      {children}
    </div>
  )
}

export default Container