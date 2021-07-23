import React,{useState, useEffect} from 'react'
import './App.css'
import { NavBar } from './Components/NavBar'
import {css} from '@emotion/react'
import PropagateLoader from 'react-spinners/PropagateLoader'
import { Header } from './Components/Header'
import { Product } from './Components/Product'
import { About } from './Components/About'
import { Contact } from './Components/Contact'

function App() {
const [loading, setLoading] = useState(false)
const override = css`
display: block;
border-color: red;
margin-top: 20%;
`

useEffect(()=>{
  setLoading(true)
  setTimeout(() => {
    setLoading(false)
  }, 5000);
}, [])


  return (
    <div className="App">
      {
        loading ? <PropagateLoader color={"#3d2514"} Loading={loading} css={override} size={40} />
        :
        <>
        <NavBar />
        <Header />
        <Product />
        <About />
        <Contact />
        </>
      }

    </div>
  );
}

export default App;
