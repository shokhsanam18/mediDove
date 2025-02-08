import React from "react";
import AppointmentPage from "./AppointmentSlide";
import { About } from "@/pages/About/About";
import FormAppointment from "@/components/ui/FormAppointment";
import NewsAppointment from "./NewsAppointment";
export const BecomeMember = () => {
  return (
    <div className="overflow-x-hidden">
      <AppointmentPage />;
      <About />
      <FormAppointment />
      <NewsAppointment />
    </div>
  );
};
