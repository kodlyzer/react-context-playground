import { Outlet } from 'react-router-dom'

import Header from '../components/Header'
import MainContentHolder from '../components/MainContentHolder'
import Sidenav from '../components/Sidenav'
import { AppProvider } from '../utils/app.context'

function App() {
  return (
    <AppProvider>
      <div className="App">
        <Header />
        <div className="flex min-h-[calc(100vh-4rem)]">
          <Sidenav />
          <MainContentHolder>
            <Outlet />
          </MainContentHolder>
        </div>
      </div>
    </AppProvider>
  )
}

export default App
