import React from "react";
import Typography from "@/components/ui/Typography";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const AppointmentPage = () => {
  const { t } = useTranslation();
  return (
    <div
      className="flex items-center h-[100vh] w-full bg-no-repeat bg-cover"
      style={{
        backgroundImage: "url('/img/bgbook.jpg')",
        height: "calc(100vh - 150px)",
      }}
    >
      <div className="flex flex-col md:flex-row items-center text-center sm:text-start sm:items-start w-full md:p-48">
        <div className="flex flex-col items-center sm:items-start w-full">
          <Typography variant="h4">
            {t("about.main.title")} {/* We are here for your care. */}
          </Typography>
          <Typography variant="h1">
            {t("app.appointment")} {/* Appointment */}
          </Typography>
        </div>

        <div className="flex flex-row justify-end sm:justify-start mt-4">
          <Typography variant="p" className="cursor-pointer">
            <Link to="/About">
              {t("about.main.button1")} {/* Home */}
            </Link>
          </Typography>

          <span className="mx-1">|</span>
          <Typography variant="p" className="text-red-500">
            {t("app.appointment")} {/* Appointment */}
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default AppointmentPage;
