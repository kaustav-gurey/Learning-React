import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from './components/Header.jsx';
import Meme from './components/Meme.jsx';


export default function App(){
  return (
    <div>
      <Header />
      <Meme />
    </div>
  )
}