import React from "react";
import Typography from "./components/ui/Typography";

const Text = () => {
  const pageContent = {
    subtitle: "We are here for your care",
    title: "Blog 3 Column",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  };

  return (
    <div className="bg-[#CEE13D] py-20">
      <div className="container  px-2">
        <div className="text-start  px-4 mb-12">
          <Typography variant="h4">{pageContent.subtitle}</Typography>
          <Typography variant="h2">{pageContent.title}</Typography>
        </div>

        <div className="max-w-3xl text-start px-4">
          <Typography variant="p">{pageContent.description}</Typography>
        </div>
      </div>
    </div>
  );
};

export default Text;
