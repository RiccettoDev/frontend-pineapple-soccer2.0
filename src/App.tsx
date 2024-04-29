import { BrowserRouter, Route, Routes } from "react-router-dom"

import { AuthProvider } from "./context/AuthProvider"
import ProtectedLayout from "./components/protectedLayout/intex"


import Login from "./pages/Login"
import ErrorPage from "./pages/ErrorPage"
import Home from "./pages/Home"
import Profile from "./pages/Profile"
import Players from "./pages/Players"
import Match from "./pages/Match"
import Test from "./pages/Test"

function App() {

  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />

          <Route path="/home" element={<ProtectedLayout>
            <Home />
          </ProtectedLayout>} />

          <Route path="/profile" element={<ProtectedLayout>
            <Profile />
          </ProtectedLayout>} />

          <Route path="/players" element={<ProtectedLayout>
            <Players />
          </ProtectedLayout>} />

          <Route path="/match" element={<ProtectedLayout>
            <Match />
          </ProtectedLayout>} />

          <Route path="/test" element={<ProtectedLayout>
            <Test />
          </ProtectedLayout>} />

          <Route path="/*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
