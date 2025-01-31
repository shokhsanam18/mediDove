import * as React from "react";
import { Input } from "@/components/ui/input";
import { Phone } from "lucide-react";
import { Calendar } from "lucide-react";
import { Timer } from "lucide-react";
import { NotebookPen } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// ---------------DEPARTMENT SELECTION-------------
function SelectDemoDepartment({ value, onChange }) {
  return (
    <Select onValueChange={onChange} value={value}>
      <SelectTrigger className="max-w-lg w-full h-12 p-7 border-y-blue-150">
        <SelectValue placeholder="Department" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Department</SelectLabel>
          <SelectItem value="surgery">Surgery and Radiology</SelectItem>
          <SelectItem value="pediatrics">Pediatrics</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
// ----------------------DOCTOR SELECTION-------------
function SelectDemoDoctor({ value, onChange }) {
  return (
    <Select onValueChange={onChange} value={value}>
      <SelectTrigger className="max-w-lg w-full h-12 p-7 border-y-blue-150">
        <SelectValue placeholder="Doctor" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Doctor</SelectLabel>
          <SelectItem value="doctor1">Doctor One</SelectItem>
          <SelectItem value="doctor2">Doctor Two</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
// ----------------NAME SELECTION----------------
function SelectDemoYourName({ value, onChange }) {
  return (
    <Select onValueChange={onChange} value={value}>
      <SelectTrigger className="max-w-lg w-full h-12 p-7 border-y-blue-150">
        <SelectValue placeholder="Your Name" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Your Name</SelectLabel>
          <SelectItem value="name1">Name One</SelectItem>
          <SelectItem value="name2">Name Two</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
// ----------------PHONENUMBER -----------------------
function PhoneInput({ value, onChange }) {
  return (
    <div className="max-w-lg w-full h-14 p-2 border border-blue-150 rounded-md flex items-center relative">
      <Input
        type="tel"
        placeholder="Your Phone Number"
        className="w-full h-full p-4 pr-12 border-none focus:ring-2 focus:ring-blue-500"
        value={value}
        onChange={onChange}
      />
      <Phone className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" />
    </div>
  );
}

// ----------------SPECIAL DATE---------------
function DataInput({ value, onChange }) {
  return (
    <div className="max-w-lg w-full h-14 p-2 border border-blue-150 rounded-md flex items-center relative">
      <Input
        type="text"
        placeholder="Select Date"
        className="w-full h-full p-4 pr-12 border-none focus:ring-2 focus:ring-blue-500"
        value={value}
        onChange={onChange}
      />
      <Calendar className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" />
    </div>
  );
}
// --------------TIME INPUT------------
function TimeInput({ value, onChange }) {
  return (
    <div className="max-w-lg w-full h-14 p-2 border border-blue-150 rounded-md flex items-center relative">
      <Input
        placeholder="Add a time"
        type="text"
        className="w-full h-full p-4 pr-12 border-none focus:ring-2 focus:ring-blue-500"
        value={value}
        onChange={onChange}
      />
      <Timer className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" />
    </div>
  );
}
// -------------------SPECIAL REQUEST-----------
function RequestInput({ value, onChange }) {
  return (
    <div className="w-full h-36 p-2 border border-blue-150 rounded-md flex items-center relative">
      <Input
        placeholder="Special request"
        type="text"
        className="w-full h-full p-4 pr-12 border-none focus:ring-2 focus:ring-blue-500"
        value={value}
        onChange={onChange}
      />
      <NotebookPen className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" />
    </div>
  );
}

const BASE_URL =
  "https://crudcrud.com/api/8a474ffec9154065a4036b7b1d81c348/appointments"; 

function Form() {
  const [department, setDepartment] = React.useState("");
  const [doctor, setDoctor] = React.useState("");
  const [name, setName] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [date, setDate] = React.useState("");
  const [time, setTime] = React.useState("");
  const [request, setRequest] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = {
      department,
      doctor,
      name,
      phone,
      date,
      time,
      request,
    };

    try {
      const response = await fetch(BASE_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Appointment booked successfully!");
      } else {
        alert("Failed to book appointment.");
      }
    } catch (error) {
      alert("Error: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-2/4 border-lime-600 h-full bg-black"
    >
      <div>
        <h5 className="text-red-600 text-xl">Appointment</h5>
        <h2 className="text-white text-6xl">Book Appointment</h2>
      </div>
      <div className="flex gap-5 mt-5">
        <SelectDemoDepartment value={department} onChange={setDepartment} />
        <SelectDemoDoctor value={doctor} onChange={setDoctor} />
      </div>
      <div className="flex gap-5 mt-5">
        <SelectDemoYourName value={name} onChange={setName} />
        <PhoneInput value={phone} onChange={(e) => setPhone(e.target.value)} />
      </div>
      <div className="flex gap-5 mt-5">
        <DataInput value={date} onChange={(e) => setDate(e.target.value)} />
        <TimeInput value={time} onChange={(e) => setTime(e.target.value)} />
      </div>
      <div className="flex gap-5 mt-5">
        <RequestInput
          value={request}
          onChange={(e) => setRequest(e.target.value)}
        />
      </div>
      <button
        type="submit"
        className="bg-red-600 text-white w-full h-14"
        disabled={loading}
      >
        {loading ? "Submitting..." : "Submit Query"}
      </button>
    </form>
  );
}

export default Form;
