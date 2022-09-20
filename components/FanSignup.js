import React from "react";
import Form from "./Form";
export default function FanSignup() {
  return (
    <div>
      {" "}
      <h2 className="flex justify-center text-3xl font-bold py-7 text-white">
        Create Your Fan Account
      </h2>
      <Form type="fan" />
    </div>
  );
}
