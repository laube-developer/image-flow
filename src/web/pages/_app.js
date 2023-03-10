import '../styles/globals.css'
import Header from '../src/components/Global/Header';
import { useState } from 'react';

import LayoutBox from "../src/components/App/LayoutBox"

function MyApp({ Component, pageProps }) {
  const [authUser, setAuth] = useState()
  const [username, setUsername] = useState("")
  const [senha, setSenha] = useState("")

  return <LayoutBox>
    <Header />
    <Component {...pageProps} />
  </LayoutBox>
}

export default MyApp
