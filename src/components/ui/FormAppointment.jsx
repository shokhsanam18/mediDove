import React, { forwardRef } from "react";
import { useMutation } from "@tanstack/react-query"; // Import useMutation
import Typography from "./Typography";
import { Input } from "@/components/ui/inputFormAppointment";
import { Phone, Calendar, Timer, NotebookPen } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/selectformAppointment";

function SelectDemo({ value, onChange, placeholder, items }) {
  return (
    <Select onValueChange={onChange} value={value}>
      <SelectTrigger className="w-full h-14 p-4 border border-blue-100 rounded-md text-gray-400 focus:ring-0 focus:border-blue-150">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>{placeholder}</SelectLabel>
          {items.map((item) => (
            <SelectItem key={item.value} value={item.value}>
              {item.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

function TextInput({ value, onChange, placeholder, icon: Icon, className }) {
  return (
    <div
      className={`w-full h-14 p-2 border border-blue-100 rounded-md flex items-center gap-2 ${className}`}
    >
      <Input
        type="text"
        placeholder={placeholder}
        className="w-full h-full p-4 border-none outline-none"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={(e) => (e.target.style.boxShadow = "none")}
        onBlur={(e) => (e.target.style.boxShadow = "none")}
        style={{
          border: "none",
          outline: "none",
        }}
      />
      {Icon && <Icon className="text-gray-400" />}
    </div>
  );
}

const BASE_URL = "https://9e25-89-236-218-41.ngrok-free.app/api/formData";

function FormAppointment(props, ref) {
  const [formData, setFormData] = React.useState({
    department: "",
    doctor: "",
    name: "",
    phone: "",
    date: "",
    time: "",
    request: "",
  });

  const handleChange = (key) => (value) => {
    setFormData((prev) => ({ ...prev, [key]: value.toString() }));
  };

  const mutation = useMutation({
    mutationFn: async (data) => {
      const response = await fetch(BASE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error("Failed to book appointment.");
      }
      return response.json();
    },
    onSuccess: () => {
      alert("Appointment booked successfully!");
    },
    onError: (error) => {
      alert("Error: " + error.message);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate(formData);
  };

  return (
    <div
      ref={ref}
      className="flex justify-center items-center w-full min-h-screen bg-cover p-10 bg-center px-4"
      style={{
        backgroundImage: "url('/img/bgzlyuka.jpg')",
      }}
    >
      <form
        onSubmit={handleSubmit}
        className="border-2 border-red-200 p-6 md:p-10 bg-white shadow-lg rounded-lg w-full md:max-w-xl overflow-auto"
      >
        <Typography variant="p" className="text-red-500 text-2xl">
          Appointment
        </Typography>
        <Typography variant="h2" className="text-3xl md:py-6 py-3">
          Book Appointment
        </Typography>

        <div className="flex flex-col md:flex-row gap-4 mt-4">
          <SelectDemo
            value={formData.department}
            onChange={handleChange("department")}
            placeholder="Department"
            items={[
              { value: "surgery", label: "Surgery and Radiology" },
              { value: "pediatrics", label: "Pediatrics" },
            ]}
          />
          <SelectDemo
            value={formData.doctor}
            onChange={handleChange("doctor")}
            placeholder="Doctor"
            items={[
              { value: "doctor1", label: "Doctor One" },
              { value: "doctor2", label: "Doctor Two" },
            ]}
          />
        </div>

        <div className="flex flex-col md:flex-row gap-4 mt-4">
          <TextInput
            value={formData.name}
            onChange={handleChange("name")}
            placeholder="Your Name"
          />

          {/* <div className="flex flex-col md:flex-row gap-4 mt-4">
            <SelectDemo
              value={formData.doctor}
              onChange={handleChange("Your Name")}
              placeholder="Your Name"
              items={[
                { value: "Name1", label: "Name One" },
                { value: "Name2", label: "Name Two" },
              ]}
            />
            <TextInput
              value={formData.phone}
              onChange={handleChange("phone")}
              placeholder="Your Phone Number"
              icon={Phone}
            />
          </div> */}
          <TextInput
            value={formData.phone}
            onChange={handleChange("phone")}
            placeholder="Your Phone Number"
            icon={Phone}
          />
        </div>

        <div className="flex flex-col md:flex-row gap-4 mt-4">
          <TextInput
            value={formData.date}
            onChange={handleChange("date")}
            placeholder="Select Date"
            icon={Calendar}
          />
          <TextInput
            value={formData.time}
            onChange={handleChange("time")}
            placeholder="Add a time"
            icon={Timer}
          />
        </div>

        <div className="w-full mt-4">
          <TextInput
            className="h-32"
            value={formData.request}
            onChange={handleChange("request")}
            placeholder="Special Request"
            icon={NotebookPen}
          />
        </div>

        <button
          type="submit"
          className="bg-red-600 text-white w-full h-12 mt-5 rounded-md hover:bg-green-500 transition-colors duration-300"
          disabled={mutation.isLoading}
        >
          {mutation.isLoading ? "Submitting..." : "SUBMIT QUERY"}
        </button>
      </form>
    </div>
  );
}

export default forwardRef(FormAppointment);
