import React from "react";
import AppointmentPage from "./AppointmentSlide";
import { About } from "@/pages/About/About";
import FormAppointment from "@/components/ui/FormAppointment";
export const BecomeMember = () => {
  return (
    <>
      <AppointmentPage />;
      <span class="block w-full h-px bg-gray-300 shadow-sm shadow-gray-400 opacity-50"></span>
      <About />
      <span class="block w-full h-px bg-gray-300 shadow-sm shadow-gray-400 opacity-50"></span>
      <FormAppointment />
    </>
  );
};
