import React from "react"
import AdminHomePage from "../pages/AdminHomePage"
import ApplicationFormPage from "../pages/ApplicationFormPage"
import CreateTripPage from "../pages/CreateTripPage"
import HomePage from "../pages/HomePage"
import ListTripsPage from "../pages/ListTripsPage"
import LoginPage from "../pages/LoginPage"
import TripDetailsPage from "../pages/TripDetailsPage"
import {BrowserRouter, Routes, Route } from "react-router-dom"



export default function Router(){


    return(
        <BrowserRouter>
  <Routes>

    <Route index element={<HomePage />}></Route>
    <Route path="/trips/list" element={<ListTripsPage/>}></Route>
    <Route path="/trips/application" element={<ApplicationFormPage/>}></Route>
    <Route path="/login" element={<LoginPage/>}></Route>
    <Route path="/admin/trips/list" element={<AdminHomePage/>}></Route>
    <Route path="/admin/trips/create" element={<CreateTripPage/>}></Route>
    <Route path="/admin/trips/:id" element={<TripDetailsPage/>}></Route>
  
  </Routes>
  </BrowserRouter>
    )
}