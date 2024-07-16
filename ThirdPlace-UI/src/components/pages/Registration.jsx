import React from "react";
import AddUserForm from "../user/AddUserForm";
import Navbar from "../navigation/Navbar";

export default function Registration() {
  return (
    <>
      <Navbar />

      <h2>Register</h2>

      <div className="container review-card">
        <AddUserForm />
      </div>
      
      <p className="gray-text">
        <center>🍒 Powered by Cherry Systems </center>
      </p>
    </>
  );
}