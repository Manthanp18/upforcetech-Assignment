import React, { useState } from "react";
import Link from "next/link";

function Form({ type }) {
  // console.log(type);

  const [firstname, setFirstName] = useState("");
  const [lastname, setLastname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch(`http://wren.in:3200/api/sign-up/${type}`, {
        method: "POST",
        body: JSON.stringify({
          first_name: firstname,
          last_name: lastname,
          username: username,
          email: email,
          password: password,
        }),
      });
      let resJson = await res.json();
      if (res.status === 201) {
        console.log("USER CREATED");
      } else {
        console.log("ERROR");
      }
    } catch (err) {
      console.log(err);
    }
  };

  //   console.log(formValue);
  return (
    <form className="" onSubmit={handleSubmit}>
      {" "}
      <label className="text-white px-3 py-2 text-sm">First name</label>
      <input
        className=" form-control block w-full px-3 py-1.5 mb-4 text-base font-normal bg-gray border-2 border-green rounded-full transition ease-in-out m-0  placeholder-white placeholder-text-sm placeholder:text-xs"
        placeholder="First Name"
        type="firstname"
        name="firstname"
        value={firstname}
        onChange={(e) => setFirstName(e.target.value)}
        required
      />
      <label className="text-white px-3 py-2 text-sm ">Last name</label>
      <input
        className=" form-control block w-full px-3 mb-4 py-1.5 placeholder-white placeholder-text-sm placeholder:text-xs text-base font-normal bg-gray border-2 border-green rounded-full transition ease-in-out m-0"
        placeholder="Last Name"
        type="lastname"
        name="lastname"
        value={lastname}
        onChange={(e) => setLastname(e.target.value)}
        required
      />
      <label className="text-white px-3 py-2 text-sm">Username</label>
      <input
        className=" form-control block w-full px-3 py-1.5 mb-4 placeholder-white placeholder-text-sm placeholder:text-xs text-base font-normal bg-gray border-2 border-green rounded-full transition ease-in-out m-0"
        placeholder=" Username"
        type="username"
        name="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />
      <label className="text-white px-3 py-2 text-sm">Email</label>
      <input
        className=" form-control block w-full px-3 py-1.5 mb-4 placeholder-white placeholder-text-sm placeholder:text-xs text-base font-normal bg-gray border-2 border-green rounded-full transition ease-in-out m-0"
        placeholder="Email"
        type="email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <label className="text-white px-3 py-2 text-sm">Password</label>
      <input
        className=" form-control block w-full px-3 py-1.5 mb-4 placeholder-white placeholder-text-sm placeholder:text-xs text-base font-normal bg-gray border-2 border-green rounded-full transition ease-in-out m-0"
        placeholder="Password"
        type="password"
        name="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <div className="form-check flex justify-center ">
        <input
          id=""
          type="checkbox"
          value=""
          required
          className="w-4 h-4 my-1 text-green bg-green rounded border-gray-300 focus:ring-green-800 dark:focus:ring-green-800 dark:ring-offset-green-800 focus:ring-2"
        />
        <div>
          <label htmlFor="" className="ml-2 text-xs font-medium text-white">
            I agree to{" "}
            <span className="text-green">
              <Link href="#">Terms and Conditions</Link>
            </span>
          </label>
        </div>
      </div>
      <div className="flex justify-center ">
        <button
          type="submit"
          className=" bg-green py-3 px-14 rounded-full my-3"
          //   onClick={handleSubmit}
        >
          Signup
        </button>
      </div>
    </form>
  );
}

export default Form;
