import React from "react";
import { Link } from "react-router-dom";
export const LayoutTest = () => {
  return (
    <>
      <Link to="/Test">
        <button className="bg-black text-white">Test page</button>
      </Link>
    </>
  );
};
