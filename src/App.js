import React from 'react'
import { Outlet } from 'react-router-dom'
import AppPage from './layouts/AppPage'

const App = () => {
  return (
    <div id="nimedix-app" className="m-0 p-0 static">
      <AppPage>
        <Outlet />
      </AppPage>
    </div>
  )
}

export default App
