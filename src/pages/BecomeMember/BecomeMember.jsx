import React from "react";
import AppointmentPage from "./AppointmentSlide";
import FormAppointment from "@/components/ui/FormAppointment";
import NewsAppointment from "./NewsAppointment";
import { AboutAppointment } from "./AboutAppointment";
export const BecomeMember = () => {
  return (
    <div className="overflow-x-hidden">
      <AppointmentPage />;
      <AboutAppointment />
      <FormAppointment />
      <NewsAppointment />
    </div>
  );
};
