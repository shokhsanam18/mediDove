import MedicalCardsAppointment from "./MedicalCardsAppointment";
import BlogCards from "./Blogcards";
const AfterNewsMembership = () => {
  return (
    <div className="flex justify-center items-center flex-col md:flex-row md:px-40 w-full">
      <div className=" flex gap-6 mb-5 w-full ">
        <MedicalCardsAppointment />
      </div>
      <div className="">
        <BlogCards />
      </div>
    </div>
  );
};
export default AfterNewsMembership;
