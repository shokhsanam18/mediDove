import React from "react";
import axios from "axios";
import { Input } from "./input";
import { Label } from "./label";
import { Textarea } from "./textarea";

function InputWithName({ value, onChange }) {
  return (
    <div className="grid w-full items-center gap-1.5">
      <Input
        type="text"
        id="name"
        placeholder="YOUR NAME"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}

function InputWithEmail({ value, onChange }) {
  return (
    <div className="grid w-full  items-center gap-1.5">
      <Label htmlFor="email"></Label>
      <Input
        type="email"
        id="email"
        placeholder="YOUR EMAIL"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}

function InputWithPhone({ value, onChange }) {
  return (
    <div className="grid w-full  items-center gap-1.5 ">
      <Label htmlFor="phone"></Label>
      <Input
        type="tel"
        id="phone"
        placeholder="YOUR PHONE"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}

function InputWithSubject({ value, onChange }) {
  return (
    <div className="grid w-full  items-center gap-1.5">
      <Input
        type="text"
        id="subject"
        placeholder="YOUR SUBJECT"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}

function InputWithMessage({ value, onChange }) {
  return (
    <Textarea
      placeholder="YOUR MESSAGE"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}
const BASE_URL =
  "https://crudcrud.com/api/08f751552a294a91b3c2daca67ddeac4/ideas";

export const submitMessage = async (messageData) => {
  try {
    const response = await axios.post(BASE_URL, messageData);
    return response.data;
  } catch (error) {
    console.error("Error submitting message:", error);
  }
};

export const getMessages = async () => {
  try {
    const response = await axios.get(BASE_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching messages:", error);
  }
};

function FormComponent() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [subject, setSubject] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);

    if (!name || !email || !phone || !subject || !message) {
      setSuccess("Fill the form");
      setLoading(false);
      return;
    }

    const formData = {
      name,
      email,
      subject,
      message,
      phone,
    };
    const response = await submitMessage(formData);

    if (response) {
      setSuccess("Message submitted successfully!");
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
      setSubject("");
    }

    setLoading(false);
  };
  return (
    <form onSubmit={handleSubmit} className="w-4/5 mx-auto  p-6 bg-[#F4F9FC]">
      <p className="text-[#647589] text-[14px] font-normal">
        Anything On your Mind
      </p>
      <h1 className="text-[#223645] text-[60px] font-semibold ">
        Estimate Your Idea
      </h1>
      <div className="flex justify-between w-full">
        <InputWithName className="w-full" value={name} onChange={setName} />
        <InputWithEmail value={email} onChange={setEmail} />
      </div>
      <div className="flex justify-between">
        <InputWithPhone value={phone} onChange={setPhone} />
        <InputWithSubject value={subject} onChange={setSubject} />
      </div>
      <div className="bg-white">
        <InputWithMessage value={message} onChange={setMessage} />
      </div>
      {success && (
        <p
          className={
            success === "Fill the form" ? "text-red-500" : "text-green-500"
          }
        >
          {success}
        </p>
      )}
      <button
        type="submit"
        className="bg-red-600 text-white w-140/9 h-14"
        disabled={loading}
      >
        {loading ? "Submitting..." : "GET ACTION"}
      </button>
    </form>
  );
}

export default FormComponent;
