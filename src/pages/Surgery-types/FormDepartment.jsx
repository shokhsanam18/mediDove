import React from "react";
import { useMutation } from "@tanstack/react-query";
import { Input } from "@/components/ui/inputFormAppointment";
import { Phone } from "lucide-react";
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
      <SelectTrigger className="w-full h-14 p-4 mb-5 border-blue-100 rounded-md text-gray-400 focus:ring-0 focus:border-blue-200">
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
        onChange={onChange}
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

const BASE_URL =
  "https://a359-89-236-218-41.ngrok-free.app/api/formDepartments";

function FormDepartment(props, ref) {
  const [formDepartment, setformDepartment] = React.useState({
    timeUsage1: "",
    timeUsage2: "",
    timeUsage3: "",
    timeUsage4: "",
    phone: "",
  });

  const handleChange = (key) => (event) => {
    const value = event.target ? event.target.value : event;
    setformDepartment((prev) => ({ ...prev, [key]: value }));
  };

  const mutation = useMutation({
    mutationFn: async (data) => {
      const response = await fetch(BASE_URL, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error("Failed to get support");
      }
      return response.json();
    },
    onSuccess: () => {
      alert("Sent succesfully to get support");
    },
    onError: (error) => {
      alert("Error:" + error.message);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate(formDepartment);
  };

  return (
    <div className="w-1/3">
      <form
        onSubmit={handleSubmit}
        className="border-1 border-white p-6 md:p-10 bg-white shadow-lg rounded-lg w-full"
      >
        <SelectDemo
          value={formDepartment.timeUsage1}
          onChange={handleChange("timeUsage1")}
          placeholder={"When would you like our support ?"}
          items={[
            { value: "support1", label: "When would you like our support ?" },
          ]}
        />
        <SelectDemo
          value={formDepartment.timeUsage2}
          onChange={handleChange("timeUsage2")}
          placeholder={"When would you like our support ?"}
          items={[
            { value: "support1", label: "When would you like our support ?" },
          ]}
        />
        <SelectDemo
          value={formDepartment.timeUsage3}
          onChange={handleChange("timeUsage3")}
          placeholder={"When would you like our support ?"}
          items={[
            { value: "support1", label: "When would you like our support ?" },
          ]}
        />
        <SelectDemo
          value={formDepartment.timeUsage4}
          onChange={handleChange("timeUsage4")}
          placeholder={"When would you like our support ?"}
          items={[
            { value: "support1", label: "When would you like our support ?" },
          ]}
        />
        <TextInput
          value={formDepartment.phone}
          onChange={handleChange("phone")}
          placeholder="Your Phone Number"
          icon={Phone}
        />

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

export default FormDepartment;
