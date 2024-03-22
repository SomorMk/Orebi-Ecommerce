import React from 'react'
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayout from './Components/Layout/RootLayout';
import Home from './Pages/Home'
import About from './Pages/About';
import Shop from './Pages/Shop';
import Contact from './Pages/Contact';
import Journal from './Pages/Journal';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />} >

      <Route index element={<Home />} ></Route>

      <Route path='/shop' element={<Shop />} ></Route>

      <Route path='/about' element={<About />} ></Route>

      <Route path='/contact' element={<Contact />} ></Route>

      <Route path='/journal' element={<Journal />} ></Route>

    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />
}

export default App