import React from "react"

import "./Assets/main.css"
import AuthenticationApp from "./AuthenticationApp";
import useToken from "./Hooks/useToken";
import UnAuthenticationApp from "./UnAuthenticationApp";

function App() {

  const [token] = useToken()

  if (token) {
    return <AuthenticationApp />
  }
  else {
    return <UnAuthenticationApp />
  }
}

export default App;
