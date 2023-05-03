import { Component, ParentProps } from "solid-js"
import { Container, Navbar } from "@/components"

export const BaseLayout: Component<ParentProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      <Container>{children}</Container>
    </>
  )
}
