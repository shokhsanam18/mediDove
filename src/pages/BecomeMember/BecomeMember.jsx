import React from "react";
import AppointmentPage from "./AppointmentSlide";
import FormAppointment from "@/components/ui/FormAppointment";
import CombinedPage from "./CombinedPage";
import { AboutAppointment } from "./AboutAppointment";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();

export const BecomeMember = () => {
  return (
    <div className="overflow-x-hidden">
      <AppointmentPage />
      <AboutAppointment />
      <QueryClientProvider client={queryClient}>
        <FormAppointment />
      </QueryClientProvider>
      <CombinedPage />
    </div>
  );
};
