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
import Layout from "./layout/Layout"

function App() {

  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />

          <Route path="/home" element={<ProtectedLayout>
            <Layout>
              <Home />
            </Layout>
          </ProtectedLayout>} />

          <Route path="/profile" element={<ProtectedLayout>
            <Layout>
              <Profile />
            </Layout>
          </ProtectedLayout>} />

          <Route path="/players" element={<ProtectedLayout>
            <Layout>
              <Players />
            </Layout>
          </ProtectedLayout>} />

          <Route path="/match" element={<ProtectedLayout>
            <Layout>
              <Match />
            </Layout>
          </ProtectedLayout>} />

          <Route path="/teams" element={<ProtectedLayout>
            <Layout>
              <Test />
            </Layout>
          </ProtectedLayout>} />

          <Route path="/test" element={<ProtectedLayout>
            <Layout>
              <Test />
            </Layout>
          </ProtectedLayout>} />

          <Route path="/*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
