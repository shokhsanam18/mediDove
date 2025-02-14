import React from "react";
import FormDepartment from "./FormDepartment";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();
export const Surgery = () => {
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <FormDepartment />
      </QueryClientProvider>
    </div>
  );
};
