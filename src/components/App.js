import {AppStyled} from "../constants/AppStyled"
import Logo from "../constants/Logo"
import Login from "../pages/login/Login"
import Register from "../pages/register/Register"
import Habits from "../pages/habits/Habits"
import Today from "../pages/today/Today"
import Historic from "../pages/historic/Historic"
import { BrowserRouter, Routes, Route } from "react-router-dom"

export default function App() {
  return (
    <AppStyled>
      <BrowserRouter>
        <Routes>
          <Route path="/"  element={<Login />}/>
          <Route path="/cadastro"  element={<Register />}/>
          <Route path="/habitos"  element={<Habits />}/>
          {/* <Route path="/hoje"  element={<Today />}/>
          <Route path="/historico"  element={<Historic />}/> */}
        </Routes>
      </BrowserRouter>
    </AppStyled>
  );
}