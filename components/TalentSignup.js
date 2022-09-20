import React from "react";
import Form from "./Form";
export default function TalentSignup() {
  return (
    <div>
      {" "}
      <h2 className="flex justify-center text-3xl py-7 font-bold text-white">
        Create Your Talent Account
      </h2>
      <Form type="talent" />
    </div>
  );
}
