import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Counter from './component/Counter';
import Dashboard from './Dashboard/Dashboard';

function MyComponent(){
useEffect(()=>{
  console.log("Component mounted")
  },[]);
 
return<h1>Hello World</h1>;
}

function App() {
 

  return (
    <>
     <Counter/>
     <Dashboard/>
    </>
  )
}

export default App
