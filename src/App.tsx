import { useState } from 'react'
import { useRoutes } from 'react-router-dom'
import './App.less'
import { routes } from './router'
import 'animate.css'

function App() {
  const RouterView = () => useRoutes(routes)
  return (<RouterView />)
}

export default App
