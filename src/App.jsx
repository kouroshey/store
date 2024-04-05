import React from 'react'
import { Outlet } from 'react-router-dom'
import Layout from './components/Layout'

const App = () => {
  return (
    <main className='relative'>
      <Layout>
        <Outlet />
      </Layout>
    </main>
  )
}

export default App