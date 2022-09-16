import React from "react";

export default function Test(props: any) {
  const test = "Hello world";
  return (
    <div className="bg-black rounded text-white flex justify-center items-center">
      {test}
    </div>
  );
}
