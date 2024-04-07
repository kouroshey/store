import { Outlet, RouterProvider } from 'react-router-dom'
import { router } from './router/router'

const App = () => {
  return (
    <RouterProvider router={router}>
      <main className='relative'>
        <Outlet />
      </main>
    </RouterProvider>
  )
}

export default App