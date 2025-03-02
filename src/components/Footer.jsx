import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom'; // Assuming you are using React Router

export const Footer = () => {
  const { t } = useTranslation();
  return (
    <div className="w-full ">
      <div
        className="sm:h-[40em] h-full w-full p-[10%] flex bg-[#13232f] bg-cover bg-center footer-top primary-bg footer-map pos-rel pt-120 pb-80 text-white"
        style={{ backgroundImage: "url('/img/image copy 11.png')" }}
      >
        <div className="flex justify-between gap-6 flex-col sm:flex-row">
          <div className="w-1/3">
            <div className="mb-[35px]">
              <img src="/img/image copy 12.png" alt="" />
            </div>
            <div className="mb-[25px]">
              <p className="text-[#91a1b4] pr-[20px] text-[14px] font-normal leading-[26px] mb-[15px]">
                © 2025 MediDovies. Barcha huquqlar himoyalangan. Soddalik va
                tejamkorlik uchun mo‘ljallangan. Yordam va savollar uchun biz
                bilan bog‘laning.
              </p>
            </div>
            <div>
              <ul>
                <li className="text-[#91a1b4] text-[18px] mb-[12px]">
                  <i class="far fa-envelope mr-[14px] font-normal"></i>
                  snuraliyeva@students.wiut.uz
                </li>
                <li className="text-[#91a1b4] text-[18px] mb-[12px]">
                  <i class="far fa-clone mr-[14px] font-normal"></i>
                  mybib.com
                </li>
                <li className="text-[#91a1b4] text-[18px] mb-[12px]">
                  <i class="mr-[14px] font-normal far fa-flag"></i>
                  10, 75, Qorasuv dahasi, Samarqand, O'zbekiston
                </li>
              </ul>
            </div>
          </div>

          <div className="w-1/3">
            <h2 className="text-[24px] text-white block font-poppins font-semibold leading-[1.1] tracking-[-0.3px] mt-0 mb-[46px]">
            <Link to="/">{t("footer.departments.title")} </Link>
            </h2>
            <ul className="flex flex-col gap-6 flex-wrap h-[16.5em]">
              <li>
                <a
                  className="text-[#899dab] hover:text-[#8FB569] font-rubik font-medium text-[14px] outline-none no-underline transition-all duration-300 ease-out cursor-pointer"
                  href="./About"
                >
               {t("footer.departments.topic1")} 
                </a>
              </li>
              <li>
                <a
                  className="text-[#899dab] hover:text-[#8FB569] font-rubik font-medium text-[14px] outline-none no-underline transition-all duration-300 ease-out cursor-pointer"
                  href="./Blog"
                >
             {t("footer.departments.topic2")} 
                </a>
              </li>
              <li>
                <a
                  className="text-[#899dab] hover:text-[#8FB569] font-rubik font-medium text-[14px] outline-none no-underline transition-all duration-300 ease-out cursor-pointer"
                  href="./Ustav"
                >
                 {t("footer.departments.topic3")} 
                </a>
              </li>
              <li>
                <a
                  className="text-[#899dab] hover:text-[#8FB569] font-rubik font-medium text-[14px] outline-none no-underline transition-all duration-300 ease-out cursor-pointer"
                  href="./Shifokorlar"
                >
               {t("footer.departments.topic4")} 
                </a>
              </li>
              <li>
                <a
                  className="text-[#899dab] hover:text-[#8FB569] font-rubik font-medium text-[14px] outline-none no-underline transition-all duration-300 ease-out cursor-pointer"
                  href="./Surgery"
                >
            {t("footer.departments.topic5")} 
                </a>
              </li>
              <li>
                <a
                  className="text-[#899dab] hover:text-[#8FB569] font-rubik font-medium text-[14px] outline-none no-underline transition-all duration-300 ease-out cursor-pointer"
                  href="./Details"
                >
               {t("footer.departments.topic6")} 
                </a>
              </li>
              <li>
                <a
                  className="text-[#899dab] hover:text-[#8FB569] font-rubik font-medium text-[14px] outline-none no-underline transition-all duration-300 ease-out cursor-pointer"
                  href="./Blog"
                >
                 {t("footer.departments.topic7")} 
                </a>
              </li>
              <li>
                <a
                  className="text-[#899dab] hover:text-[#8FB569] font-rubik font-medium text-[14px] outline-none no-underline transition-all duration-300 ease-out cursor-pointer"
                  href="./News"
                >
                {t("footer.departments.topic8")} 
                </a>
              </li>
              <li>
                <a
                  className="text-[#899dab] hover:text-[#8FB569] font-rubik font-medium text-[14px] outline-none no-underline transition-all duration-300 ease-out cursor-pointer"
                  href="./BecomeMember"
                >
               {t("footer.departments.topic9")} 
                </a>
              </li>
              <li>
                <a
                  className="text-[#899dab] hover:text-[#8FB569] font-rubik font-medium text-[14px] outline-none no-underline transition-all duration-300 ease-out cursor-pointer"
                  href="./ContactUS"
                >
               {t("footer.departments.topic10")} 
                </a>
              </li>
            </ul>
          </div>

          <div className="w-1/3">
            <h2 className="text-[24px] text-white block font-poppins font-semibold leading-[1.1] tracking-[-0.3px] mt-0 mb-[46px]">
            {t("footer.NewsFeeds.title")} 
            </h2>
            <div>
              <div className="flex items-center text-[14px] text-[#647589] font-rubik font-normal mb-[20px]">
                <img
                  className="float-left mr-[15px] text-[#10111e] outline-none no-underline max-w-full align-middle transition-all duration-300 ease-out"
                  src="/img/image copy 17.png"
                  alt=""
                />
                <div>
                  <h5 className="hover:text-[#8FB569] text-[18px] text-[#bdc1d5] font-rubik font-medium leading-[1.3] mb-[4px]">
                    <a href="#">
                      Ovqatlanishning uzoq muddatli salomatlik va
                      kasalliklarning oldini olishga ta’siri
                    </a>
                  </h5>
                  <span className="text-[14px] text-[#647589] font-rubik font-normal">
                    14 Feb 2022
                  </span>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-center text-[14px] text-[#647589] font-rubik font-normal mb-[20px]">
                <img
                  className="float-left mr-[15px] text-[#10111e] outline-none no-underline max-w-full align-middle transition-all duration-300 ease-out"
                  src="/img/image copy 19.png"
                  alt=""
                />
                <div>
                  <h5 className="hover:text-[#8FB569] text-[18px] text-[#bdc1d5] font-rubik font-medium leading-[1.3] mb-[4px]">
                    <a href="#">
                      Zamonaviy tibbiyotdagi yutuqlar: ilg‘or davolash usullari
                      va innovatsiyalar
                    </a>
                  </h5>
                  <span className="text-[14px] text-[#647589] font-rubik font-normal">
                    14 Feb 2022
                  </span>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-center text-[14px] text-[#647589] font-rubik font-normal mb-[20px]">
                <img
                  className="float-left mr-[15px] text-[#10111e] outline-none no-underline max-w-full align-middle transition-all duration-300 ease-out"
                  src="/img/image copy 18.png"
                  alt=""
                />
                <div>
                  <h5 className="hover:text-[#8FB569] text-[18px] text-[#bdc1d5] font-rubik font-medium leading-[1.3] mb-[4px]">
                    <a href="#">
                      Ruhiy salomatlik haqida tushuncha: sabablari, davolash
                      usullari va kelajak istiqbollari
                    </a>
                  </h5>
                  <span className="text-[14px] text-[#647589] font-rubik font-normal">
                    14 Feb 2022
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" bg-[#0D1B26] flex items-center justify-center">
        <p
          className="text-[#9aacbb]  p-[25px] text-[14px]"
          style={{ fontFamily: "Rubik, sans-serif" }}
        >
          Copyright by@ BasicTheme - 2022
        </p>
      </div>
    </div>
  );
}
