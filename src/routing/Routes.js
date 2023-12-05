import React from "react";
import SignInSide from "../skcet/signIn";
import SignUp from "../skcet/signUp";
import Facts from "../catfact";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "../skcet/dashboard";

function Navigate() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Dashboard />} />
        <Route path="/sign-in" element={<SignInSide />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/cat" element={<Facts />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Navigate;
