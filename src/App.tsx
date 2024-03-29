import './App.css'
import {router} from "./layouts/reouter";
import {RouterProvider} from "react-router-dom";
import {useEffect, useState} from "react";
import {AuthContext} from './contexts/AuthContext'
import {Fetch} from "./utils/fetch";


function App() {

  const [user, setUser] = useState({
    name: null,
    role: null,
  });

  useEffect(()=>{
      (async()=>{
          const res = await Fetch('/users')
          setUser(res.body)
      })()
  },[])

  return (
      <AuthContext.Provider value={{user, setUser}}>
        <RouterProvider router={router} />
      </AuthContext.Provider>
  )
}

export default App
