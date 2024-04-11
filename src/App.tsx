import {RouterProvider} from "react-router-dom";
import {router} from "./router";
import {AuthProvider} from './contexts/AuthContext'
import { MessagesContextProvider } from "./contexts/MessagesContext";

import './App.css'


function App() {

  return (
      <AuthProvider>
          <MessagesContextProvider>
            <RouterProvider router={router} />
          </MessagesContextProvider>
      </AuthProvider>
  )
}

export default App
