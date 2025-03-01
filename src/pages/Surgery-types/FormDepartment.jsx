import React from "react";
import { useMutation } from "@tanstack/react-query";
import { Input } from "@/components/ui/inputFormAppointment";
import { Phone } from "lucide-react";
import axios from "axios";
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
      <SelectTrigger className="w-full h-14 p-4 mb-4 sm:mb-5 border-blue-100 rounded-md text-gray-400 focus:ring-0 focus:border-blue-200">
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
    <div className="w-full h-14 p-2 border border-blue-100 rounded-md flex items-center gap-2">
      <Input
        type="text"
        placeholder={placeholder}
        className="w-full h-full p-4 border-none outline-none"
        value={value}
        onChange={onChange}
      />
      {Icon && <Icon className="text-gray-400" />}
    </div>
  );
}

const BASE_URL = "http://18.195.85.76/api/formDepartments";

function FormDepartment() {
  const [formDepartment, setFormDepartment] = React.useState({
    timeUsage1: "",
    timeUsage2: "",
    timeUsage3: "",
    timeUsage4: "",
    phone: "",
  });

  const handleChange = (key) => (event) => {
    const value = event.target ? event.target.value : event;
    setFormDepartment((prev) => ({ ...prev, [key]: value }));
  };

  const mutation = useMutation({
    mutationFn: async (data) => {
      const response = await axios.post(BASE_URL, data, {
        headers: { "Content-Type": "application/json" },
      });
      return response.data;
    },
    onSuccess: () => {
      alert("Sent successfully to get support");
    },
    onError: (error) => {
      alert("Error: " + (error.response?.data?.message || error.message));
    },
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate(formDepartment);
  };

  return (
    <div className="flex bg-white text-black w-[90%] max-w-[450px] h-[500px] rounded mx-auto my-auto sm:w-[90%] sm:h-[480px] md:w-[450px] md:h-[575px] md:flex md:justify-center lg:w-[450px] lg:h-[575px] lg:flex lg:justify-center">
      <form
        onSubmit={handleSubmit}
        className="border border-white p-4 sm:p-6 md:p-10 bg-white shadow-lg rounded-lg w-full"
      >
        {["timeUsage1", "timeUsage2", "timeUsage3", "timeUsage4"].map(
          (field) => (
            <SelectDemo
              key={field}
              value={formDepartment[field]}
              onChange={handleChange(field)}
              placeholder="When would you like our support?"
              items={[
                {
                  value: "support1",
                  label: "When would you like our support?",
                },
              ]}
            />
          )
        )}

        <TextInput
          value={formDepartment.phone}
          onChange={handleChange("phone")}
          placeholder="Your Phone Number"
          icon={Phone}
        />

        <button
          type="submit"
          className="bg-red-600 text-white w-full py-3 mt-5 rounded-md hover:bg-green-500 transition duration-300"
          disabled={mutation.isLoading}
        >
          {mutation.isLoading ? "Submitting..." : "SUBMIT QUERY"}
        </button>
      </form>
    </div>
  );
}

export default FormDepartment;
