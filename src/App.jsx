import React from 'react'
import { Outlet } from 'react-router-dom'
import Layout from './components/Layout'

const App = () => {
  return (
    <main className='relative'>
      <Layout>
        {/* <Outlet /> */}
        <p className='text-4xl'>کص عمت ایمان حیدری سیبکی</p>
      </Layout>
    </main>
  )
}

export default App