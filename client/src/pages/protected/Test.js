import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

function Test() {
  const { auth } = useSelector((state) => ({ ...state }));
  return (
    <div>
      <h2>Hello, {auth.email}</h2>
    </div>
  );
}
export default Test;
