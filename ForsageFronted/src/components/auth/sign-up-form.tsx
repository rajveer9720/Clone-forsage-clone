'use client';

import { useState } from 'react';
import AnchorLink from '@/components/ui/links/anchor-link';
import Checkbox from '@/components/ui/forms/checkbox';
import Button from '@/components/ui/button/button';
import Input from '@/components/ui/forms/input';
import Web3 from 'web3';
import UserCredentialABI from '@/../build/contracts/UserCredentials.json';

const web3 = new Web3(Web3.givenProvider || 'http://127.0.0.1:7545');

const contractAddress = "0xd0c05F90e292B377Be83b5322eA7704595d8aDCb"; // Update with the actual address
const UserCredentials = new web3.eth.Contract(UserCredentialABI.abi, contractAddress); // Access the ABI correctly

export default function SignUpForm() {
  const [state, setState] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    referral: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const accounts = await web3.eth.getAccounts();
    const { firstName, lastName, username, email, password, referral } = formData;

    try {
      // Check if the user is already registered
      const isRegistered = await UserCredentials.methods.isRegistered().call({ from: accounts[0] });

      if (isRegistered) {
        console.log("User already registered");
        const user = await UserCredentials.methods.getUser().call({ from: accounts[0] });
        console.log("User data:", user);
        
        alert("User already registered");
      } else {
        // Register the new user
        await UserCredentials.methods.register(
          username,
          password,
          firstName,
          lastName,
          
          email,
          referral
        ).send({ from: accounts[0] });

        console.log("User registered");
        const newUser = await UserCredentials.methods.getUser().call({ from: accounts[0] });
        console.log("User data after registration:", newUser);
        alert("Successfully registered!");
      }

      // Get all users
      const allUsers = await UserCredentials.methods.getAllUsers().call();
      console.log("All registered users:", allUsers);
    } catch (error) {
      console.error("Error registering user:", error);
      const allUsers = await UserCredentials.methods.getAllUsers().call();
      alert("Error registering user. Please try again.");
    }
  };

  return (
    <form noValidate onSubmit={handleSubmit} className="grid grid-cols-1 gap-4">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-3">
        <Input
          type="text"
          name="firstName"
          placeholder="First Name"
          inputClassName="focus:!ring-0 placeholder:text-[#6B7280]"
          value={formData.firstName}
          onChange={handleChange}
        />
        <Input
          type="text"
          name="lastName"
          placeholder="Last Name"
          inputClassName="focus:!ring-0 placeholder:text-[#6B7280]"
          value={formData.lastName}
          onChange={handleChange}
        />
      </div>
      <Input
        type="text"
        name="username"
        placeholder="UserName"
        inputClassName="focus:!ring-0 placeholder:text-[#6B7280]"
        value={formData.username}
        onChange={handleChange}
      />
      <Input
        type="email"
        name="email"
        placeholder="Email"
        inputClassName="focus:!ring-0 placeholder:text-[#6B7280]"
        value={formData.email}
        onChange={handleChange}
      />
      <div className="relative">
        <Input
          type={state ? 'text' : 'password'}
          name="password"
          placeholder="Password"
          inputClassName="focus:!ring-0 placeholder:text-[#6B7280]"
          value={formData.password}
          onChange={handleChange}
        />
        <span
          className="absolute bottom-3 right-4 cursor-pointer text-[#6B7280] rtl:left-4 rtl:right-auto sm:bottom-3.5"
          onClick={() => setState(!state)}
        >
          {/* {state ? (
            // <EyeIcon className="h-4 w-4 sm:h-5 sm:w-5" />
          ) : (
            <EyeSlashIcon className="h-4 w-4 sm:h-5 sm:w-5" />
          )} */}
        </span>
      </div>
      <Checkbox
        iconClassName="bg-[#4B5563] rounded mt-0.5"
        label={
          <>
            I’ve read and agree with
            <AnchorLink
              href={'#'}
              className="ml-2 font-medium tracking-[0.5px] underline dark:text-gray-300"
            >
              Terms of Service and our Privacy Policy
            </AnchorLink>
          </>
        }
        labelPlacement="end"
        labelClassName="ml-1.5 text-[#4B5563] !text-xs dark:text-gray-300 tracking-[0.5px] !leading-7"
        containerClassName="!items-start"
        inputClassName="mt-1 focus:!ring-offset-[1px]"
        size="sm"
      />
      <Button
        type="submit"
        className="mt-5 rounded-lg !text-sm uppercase tracking-[0.04em]"
      >
        sign up
      </Button>
    </form>
  );
}
