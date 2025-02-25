import React from "react";

export function Footer() {
  return (
    <div className="w-full h-32">
      <div
        className="h-16 bg-[#13232f] bg-cover bg-center footer-top primary-bg footer-map pos-rel pt-120 pb-80 text-white"
        style={{ backgroundImage: "url('/img/image copy 11.png')" }}
      >
        <div>
          <div>
            <div>
              <img src="/img/image copy 12.png" alt="" />
            </div>
            <div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut.
              </p>
            </div>
            <div>
              <ul>
                <li>
                  <i class="far fa-envelope"></i>info@examplemedical.com
                </li>
                <li>
                  <i class="far fa-clone"></i>examplemedical.com
                </li>
                <li>
                  <i class="far fa-flag"></i>227 Marion Street, Columbia
                </li>
              </ul>
            </div>
          </div>
          <div>
            <h2>Departments</h2>
            <div>
              <div></div>
              <div></div>
            </div>
          </div>
          <div>
            <h2>News Feeds</h2>
            <div>
              <div>
                <img src="/img/image copy .png" alt="" />
                <div>
                  <h3></h3>
                  <p></p>
                </div>
              </div>
              ...
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
