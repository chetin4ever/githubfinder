import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Alert from "./component/layout/Alert"
import Footer from "./component/layout/Footer"
import Navbar from "./component/layout/Navbar"
import About from "./component/pages/About"
import Home from "./component/pages/Home"
import NotFound from "./component/pages/NotFound"
import { AlertProvider } from "./context/alert/AlertContext"
import { GithubProvider } from "./context/github/GithubContext"

function App() {
  return (
    <GithubProvider>
      <AlertProvider>
        <Router>
          <div className='flex flex-col justify-between h-screen'>
            <Navbar />
            <main className='container mx-auto px-3 pb-12'>
              <Alert />
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/notfound' element={<NotFound />} />
                <Route path='/*' element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </AlertProvider>
    </GithubProvider>
  )
}

export default App
