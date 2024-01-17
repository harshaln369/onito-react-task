import React from "react"
import { createRoot } from "react-dom/client"
import { Provider } from "react-redux"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { store } from "./app/store"
import "./index.css"
import Registration from "./pages/registration"
import DatatablesList from "./pages/datatables-list"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Registration />,
  },
  {
    path: "/users",
    element: <DatatablesList />,
  },
])

const container = document.getElementById("root")

if (container) {
  const root = createRoot(container)

  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </React.StrictMode>,
  )
} else {
  throw new Error(
    "Root element with ID 'root' was not found in the document. Ensure there is a corresponding HTML element with the ID 'root' in your HTML file.",
  )
}
