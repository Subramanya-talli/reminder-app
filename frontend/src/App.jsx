import React from "react"
import {Route, Routes} from "react-router-dom"
import Home from "./pages/Home"
import NewReminder from "./pages/NewReminder"
import EditReminder from "./pages/EditReminder"
import AllReminders from "./pages/AllReminders"
 
function App() {

  return (
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/reminder/create" element={<NewReminder/>}></Route>
      <Route path="/reminders/edit/:id" element={<EditReminder/>}></Route>
      <Route path="/reminders/all" element={<AllReminders/>}></Route>
    </Routes>
  )
}

export default App
