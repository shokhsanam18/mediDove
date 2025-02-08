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
      <SelectTrigger className="w-full h-12 p-7 border-y-blue-150">
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

function TextInput({ value, onChange, placeholder, icon: Icon }) {
  return (
    <div className="w-full h-14 p-2 border border-blue-150 rounded-md flex items-center relative">
      <Input
        type="text"
        placeholder={placeholder}
        className="w-full h-full p-4 pr-12 border-none focus:ring-2 focus:ring-blue-500"
        value={value}
        onChange={onChange}
      />
      <Icon className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" />
    </div>
  );
}

const BASE_URL =
  "https://crudcrud.com/api/ea978423b30546738243ec60fa8feaba/appointments";

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
      className="flex justify-center h-[100vh] p-16"
      style={{
        backgroundImage: "url('/img/bgzlyuka.jpg')",
      }}
    >
      <form
        onSubmit={handleSubmit}
        className="border-2 border-red-200 w-1/2 bg-white p-5 "
        style={{
          height: "calc(100vh - 80px)",
        }}
      >
        <Typography variant="p" className="text-red-500 mt-5 text-2xl">
          Appointment
        </Typography>
        <Typography variant="h2" className="py-10 text-3xl">
          Book Appointment
        </Typography>

        <div className="flex flex-col md:flex-row gap-5 mt-5">
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

        <div className="flex flex-col md:flex-row gap-5 mt-5">
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

        <div className="flex flex-col md:flex-row gap-5 mt-5">
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

        <div className="w-full  mt-5">
          <TextInput
            className="h-[400px]"
            value={formData.request}
            onChange={handleChange("request")}
            placeholder="Special Request"
            icon={NotebookPen}
          />
        </div>

        <button
          type="submit"
          className="bg-red-600 text-white w-full h-14 mt-5"
          disabled={loading}
        >
          {loading ? "Submitting..." : " SUBMIT QUERY"}
        </button>
      </form>
    </div>
  );
}

export default FormAppointment;
