import './App.css'

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth'

import { useState, useEffect } from 'react'
import { useAuthentication } from './hooks/useAuthentication'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import Dashboard from './pages/Dashboard/Dashboard'
import CreatePost from './pages/CreatePost/CreatePost'

import { AuthProvider } from './context/AuthContext'


function App() {
  const [user, setUser] = useState(undefined)
  const {auth } = useAuthentication()

  const loadingUser = user === undefined

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user)
    })
  }, [auth])

if (loadingUser) {
  return <p>Carregando...</p>
}

  return (
    <>
        <AuthProvider value={{ user }}>
        <div>
        <BrowserRouter>
        <Navbar />
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/post/create" element={<CreatePost />} />
              <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
        </div>
        </AuthProvider>
    </>
  )
}

export default App
