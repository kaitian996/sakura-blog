import React, { useState } from 'react'
import { useRoutes } from 'react-router-dom'
import './App.less'
import "nprogress/nprogress.css"
import { routes } from './router'
import 'animate.css'
import '@code-hike/mdx/dist/index.css'
import { Nprogress } from './components/Nprogress'
function App() {
  const RouterView = () => useRoutes(routes)
  return (
    <React.Suspense fallback={<Nprogress></Nprogress>}>
      <RouterView />
    </React.Suspense>
  )
}

export default App
