import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

function HomeProtected() {
  const { auth } = useSelector((state) => ({ ...state }));
  return (
    <div
      style={{
        height: "100vh",
        justifyContent: " center",
        display: "flex",
        color: "var(--secondary-color)",
      }}
    >
      <h2 style={{ marginTop: "300px" }}>Hello, {auth.email}</h2>
    </div>
  );
}
export default HomeProtected;
