import { Routes, Route } from "react-router-dom";

import { CreateMovie } from '../pages/CreateMovie'
import { Home } from "../pages/Home"
import { MoviePreview } from "../pages/MoviePreview"
import { Profile } from "../pages/Profile"

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/createmovie" element={<CreateMovie/>}/>
      <Route path="/" element={<Home/>}/>
      <Route path="/moviepreview/:id" element={<MoviePreview/>}/>
      <Route path="/profile" element={<Profile/>}/>
    </Routes>
  )
}