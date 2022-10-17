import Header from './components/Header'
import MainContentHolder from './components/MainContentHolder'
import Sidenav from './components/Sidenav'

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="flex min-h-[calc(100vh-4rem)]">
        <Sidenav/>
        <MainContentHolder> </MainContentHolder>
      </div>
      {/* <footer>Footer @</footer> */}
    </div>
  )
}

export default App
