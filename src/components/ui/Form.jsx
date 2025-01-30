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

function SelectDemoDepartment() {
  const [selectedValue, setSelectedValue] = React.useState("");
  return (
    <Select onValueChange={setSelectedValue}>
      <SelectTrigger className="max-w-lg w-full h-12 p-7 border-y-blue-150">
        <SelectValue placeholder="Department" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Department</SelectLabel>
          <SelectItem value="banana">Surgery and Radiology</SelectItem>
          <SelectItem value="blueberry">SPediatrics</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
// ----------------------DOCTOR SELECTION-------------
function SelectDemoDoctor() {
  const [selectedValue, setSelectedValue] = React.useState("");
  return (
    <Select onValueChange={setSelectedValue}>
      <SelectTrigger className="max-w-lg w-full h-12 p-7 border-y-blue-150">
        <SelectValue placeholder="Doctor" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Doctor</SelectLabel>
          <SelectItem value="apple">Doctor Name </SelectItem>
          <SelectItem value="banana">Doctor Name Two</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
// ----------------NAME SELECTION----------------
function SelectDemoYourName() {
  const [selectedValue, setSelectedValue] = React.useState("");

  return (
    <Select onValueChange={setSelectedValue}>
      <SelectTrigger className="max-w-lg w-full h-12 p-7 border-y-blue-150">
        <SelectValue placeholder={selectedValue || "Your Name"} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Your Name</SelectLabel>
          <SelectItem value="apple">Name One</SelectItem>
          <SelectItem value="banana">Name Two</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
// ----------------PHONENUMBER -----------------------
function PhoneInput() {
  return (
    <div className="max-w-lg w-full h-14 p-2 border border-blue-150 rounded-md flex items-center relative">
      <Input
        type="tel"
        placeholder="Your Phone Number"
        className="w-full h-full p-4 pr-12 border-none focus:ring-2 focus:ring-blue-500"
      />
      <Phone className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" />
    </div>
  );
}

// ----------------SPECIAL DATE---------------
function DataInput() {
  return (
    <div className="max-w-lg w-full h-14 p-2 border border-blue-150 rounded-md flex items-center relative">
      <Input
        type="text"
        placeholder="Select Date"
        className="w-full h-full p-4 pr-12 border-none focus:ring-2 focus:ring-blue-500"
      />
      <Calendar className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" />
    </div>
  );
}
// --------------DATAINPUT------------
function TimeInput() {
  return (
    <div className="max-w-lg w-full h-14 p-2 border border-blue-150 rounded-md flex items-center relative">
      <Input
        placeholder="Add a time"
        type="text"
        className="w-full h-full p-4 pr-12 border-none focus:ring-2 focus:ring-blue-500"
      />
      <Timer className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" />
    </div>
  );
}
// -------------------SPECIALREQUEST-----------
function RequestInput() {
  return (
    <div className="w-full h-36 p-2 border border-blue-150 rounded-md flex items-center relative">
      <Input
        placeholder="Special request"
        type="text"
        className="w-full h-full p-4 pr-12 border-none focus:ring-2 focus:ring-blue-500"
      />
      <NotebookPen className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" />
    </div>
  );
}

const BASE_URL = "https://crudcrud.com/api/4c55bf192f2d4b83987fecc89e51cc0f";

function Form() {
  return (
    <form action="#" className="w-2/4 border-lime-600 h-full bg-black">
      <div>
        <h5 className="text-red-600 text-xl">Appointment</h5>
        <h2 className=" text-white text-6xl">Book Appointment</h2>
      </div>
      <div className="flex gap-5 mt-5">
        <SelectDemoDepartment />
        <SelectDemoDepartment />
      </div>
      <div className="flex gap-5 mt-5">
        <SelectDemoYourName />
        <PhoneInput />
      </div>
      <div className="flex gap-5 mt-5">
        <DataInput />
        <TimeInput />
      </div>
      <div className="flex gap-5 mt-5">
        <RequestInput />
      </div>
      <button typeof="submit" className="bg-red-600 text-white w-full h-14">
        Submit Query
      </button>
    </form>
  );
}

export default Form;
