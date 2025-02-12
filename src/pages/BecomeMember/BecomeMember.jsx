import React from "react";
import AppointmentPage from "./AppointmentSlide";
import FormAppointment from "@/components/ui/FormAppointment";
import CombinedPage from "./CombinedPage";
import { AboutAppointment } from "./AboutAppointment";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

const queryClient = new QueryClient();

export const BecomeMember = () => {
  const location = useLocation();
  const formRef = useRef(null);

  useEffect(() => {
    if (location.state?.scrollTo === "FormAppointment") {
      setTimeout(() => {
        formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    }
  }, [location]);
  return (
    <div className="overflow-x-hidden">
      <AppointmentPage />
      <AboutAppointment />
      <QueryClientProvider client={queryClient}>
        <div ref={formRef}>
          <FormAppointment />
        </div>
      </QueryClientProvider>
      <CombinedPage />
    </div>
  );
};
