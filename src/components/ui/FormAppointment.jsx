import * as React from "react";
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
      <SelectTrigger className="w-full h-12 p-4 border-y-blue-150">
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
      className={`w-full h-14 p-2 border border-blue-150 rounded-md flex items-center relative ${className}`}
    >
      <Input
        type="text"
        placeholder={placeholder}
        className="w-full h-full p-4 pr-12 border-none focus:ring-2 focus:ring-blue-500"
        value={value}
        onChange={onChange}
      />
      {Icon && (
        <Icon className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" />
      )}
    </div>
  );
}

const BASE_URL =
  "https://crudcrud.com/api/25d79de5389d4238851da19031bd0a1b/appointments";

function FormAppointment() {
  const [formData, setFormData] = React.useState({
    department: "",
    doctor: "",
    name: "",
    phone: "",
    date: "",
    time: "",
    request: "",
  });
  const [loading, setLoading] = React.useState(false);

  const handleChange = (key) => (value) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(BASE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (response.ok) alert("Appointment booked successfully!");
      else alert("Failed to book appointment.");
    } catch (error) {
      alert("Error: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="flex justify-center items-center  min-h-screen bg-cover p-10 bg-center px-4"
      style={{
        backgroundImage: "url('/img/bgzlyuka.jpg')",
      }}
    >
      <form
        onSubmit={handleSubmit}
        className="border-2 border-red-200 p-6 md:p-10 bg-white shadow-lg rounded-lg w-full md:max-w-lg overflow-auto"
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
            icon={NotebookPen}
          />
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
          className="bg-red-600 text-white w-full h-12 mt-5 rounded-md transition hover:bg-red-700 disabled:opacity-50"
          disabled={loading}
        >
          {loading ? "Submitting..." : " SUBMIT QUERY"}
        </button>
      </form>
    </div>
  );
}

export default FormAppointment;
