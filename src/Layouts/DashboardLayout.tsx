import { Component, ParentProps } from "solid-js"
import { DashboardSidebar } from "@/Components"

const DashboardLayout: Component<ParentProps> = ({ children }) => {
  return (
    <div class="grid grid-cols-5 grid-rows-2 h-screen w-screen m-0">
      <div class="row-span-2 bg-gray-50">
        <DashboardSidebar />
      </div>

      <div class="col-span-4 row-span-2 px-10 py-4">
        {children}
      </div>
    </div>
  )
}

export default DashboardLayout