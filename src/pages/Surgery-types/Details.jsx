import React from "react";
import { useTranslation } from "react-i18next";

export const Details = () => {
  const { t } = useTranslation();
  return <div>{t("greeting")}</div>;
};
