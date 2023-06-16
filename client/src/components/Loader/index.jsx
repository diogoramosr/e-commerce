import React from "react";

export default function Loader() {
  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-blue-500">
      <div className="h-full w-0 bg-white animate-loader"></div>
    </div>
  );
}
