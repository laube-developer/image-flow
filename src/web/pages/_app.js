import '../styles/globals.css'
import Header from '../src/components/header'
import AuthUserContext from './../src/utils/context/userContext';
import { useState } from 'react';

function MyApp({ Component, pageProps }) {
  const [authUser, setAuth] = useState()
  const [username, setUsername] = useState("")
  const [senha, setSenha] = useState("")

  return <AuthUserContext.Provider value={[authUser, setAuth, username, setUsername, senha, setSenha]}>
    <Header />
    <Component {...pageProps} />
  </AuthUserContext.Provider>
}

export default MyApp
