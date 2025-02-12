import React from "react";
import axios from "axios";
import { Input } from "./input";
import { Label } from "./label";
import { Textarea } from "./textarea";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

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
    <form
      onSubmit={handleSubmit}
      className="w-full  pt-24 pb-24 pl-[10%] pr-[10%] bg-[#F4F9FC] flex flex-col items-center gap-8"
    >
      <div className="flex justify-between w-full">
        <div>
          <p className="text-[#647589] text-[14px] font-normal">
            Anything On your Mind
          </p>
          <h1 className="text-[#223645] text-[60px] font-semibold ">
            Estimate Your Idea
          </h1>
        </div>
        <Link to="/BecomeMember" state={{ scrollTo: "FormAppointment" }}>
          <button
            type="button"
            className="flex items-center h-16 w-60 rounded-full bg-[#E51E50] text-white font-semibold shadow-lg hover:bg-[#8CB369] transition"
          >
            <span className="w-14 h-14 flex items-center justify-center bg-white text-black rounded-full border-2 border-white shadow-md ml-2">
              <Plus size={16} />
            </span>
            <span className="ml-4 text-sm tracking-wide">MAKE APPOINTMENT</span>
          </button>
        </Link>
      </div>
      <div className="w-full">
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
        className="flex items-center h-16 w-60 rounded-full bg-[#E51E50] text-white font-semibold shadow-lg hover:bg-[#8CB369] transition "
        disabled={loading}
      >
        <span className="w-14 h-14 flex items-center justify-center bg-white text-black rounded-full border-2 border-white shadow-md ml-2">
          <Plus size={16} />
        </span>
        <span
          className={`ml-4 text-sm tracking-wide ${
            loading ? "opacity-50" : "opacity-100"
          }`}
        >
          {loading ? "Submitting..." : "GET ACTION"}
        </span>
      </button>
    </form>
  );
}

export default FormComponent;
