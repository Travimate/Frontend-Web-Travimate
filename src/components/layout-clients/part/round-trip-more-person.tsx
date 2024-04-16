import React from "react";

const RoundTripMorePerson = () => {
  return (
    <div className="w-full relative">
      <div className="bg-blue-500 w-full rounded-t-3xl pb-8">
        <div className="flex p-8 gap-4">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
            >
              <path
                d="M31.41 33.18L22.25 24L31.41 14.82L28.59 12L16.59 24L28.59 36L31.41 33.18Z"
                fill="white"
              />
            </svg>
          </span>
          <div className="flight text-white font-sans">
            <h2 className="text-3xl font-bold leading-10">
              Jakarta (CGK) - Bali (DPS)
            </h2>
            <h3 className="text-2xl font-semibold leading-10">Order ID: 1</h3>
          </div>
        </div>
        {/* Circle */}
        <div className="w-[116px] h-[116px] bg-blue-500 rounded-full absolute top-20 left-80 z-10"></div>
      </div>

      {/* Booking */}
      <div className="bg-white w-full rounded-[27.51px] py-10 mt-[-30px]">
        <div className="w-full p-8 font-sans text-[#757575]">
          <p className="text-2xl font-bold leading-10">Kode booking</p>
          <div className="flex gap-2 items-center">
            <h1 className="text-[32px] font-bold leading-10 text-[#3E7BFA]">
              JB8TN4
            </h1>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
              >
                <path
                  d="M21.9999 1.33398H5.99992C4.53325 1.33398 3.33325 2.53398 3.33325 4.00065V22.6673H5.99992V4.00065H21.9999V1.33398ZM25.9999 6.66732H11.3333C9.86658 6.66732 8.66658 7.86732 8.66658 9.33398V28.0006C8.66658 29.4673 9.86658 30.6673 11.3333 30.6673H25.9999C27.4666 30.6673 28.6666 29.4673 28.6666 28.0006V9.33398C28.6666 7.86732 27.4666 6.66732 25.9999 6.66732ZM25.9999 28.0006H11.3333V9.33398H25.9999V28.0006Z"
                  fill="#3E7BFA"
                />
              </svg>
            </span>
          </div>
          <h2 className="text-2xl font-bold leading-10">PNR: JB8TN4</h2>
        </div>
        {/* Line */}
        <span className="flex justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="690"
            height="4"
            viewBox="0 0 795 4"
            fill="none"
          >
            <path
              d="M2 2L793 2.00007"
              stroke="#EDEDED"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </svg>
        </span>

        <div className="flex flex-col gap-2 p-8">
          <div className="flex justify-center items-center p-4 w-[95px] h-[36px] bg-[#E7F2FF] rounded-full">
            <p className="font-sans text-[#3E7BFA] font-semibold text-xl leading-7">
              Pergi
            </p>
          </div>
          <div className="font-sans text-[#757575]">
            <h2 className="text-2xl font-bold leading-10">
              Senin, 7 Juli 2023
            </h2>
            <div className="flex items-center gap-4 text-[32px] font-bold text-[#505050]">
              Lion Air
              <div>
                <img
                  src="https://i.ibb.co/YQMnThx/Lion-Air.png"
                  alt="Lion-Air"
                />
              </div>
            </div>
            <h2 className="text-2xl font-bold leading-10">Ekonomi</h2>
          </div>
          <div className="flex gap-4 items-center">
            <div>
              <p className="font-sans text-[28px] font-bold leading-10 text-[#505050]">
                07:00
              </p>
              <p className="font-sans text-xl font-semibold leading-10 text-[#9E9E9E]">
                CGK
              </p>
            </div>
            <div className="flex flex-col items-center">
              <p className="font-sans text-[#9E9E9E] text-base font-semibold leading-6">
                2J 15m
              </p>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="187"
                  height="24"
                  viewBox="0 0 187 24"
                  fill="none"
                >
                  <path
                    d="M3.90454 11.6914H182.046"
                    stroke="#C2C2C2"
                    stroke-width="3"
                  />
                  <path
                    d="M3.90454 11.6914H182.046"
                    stroke="black"
                    stroke-opacity="0.2"
                    stroke-width="3"
                  />
                  <path
                    d="M3.90454 11.6914H182.046"
                    stroke="black"
                    stroke-opacity="0.2"
                    stroke-width="3"
                  />
                  <path
                    d="M3.90454 11.6914H182.046"
                    stroke="black"
                    stroke-opacity="0.2"
                    stroke-width="3"
                  />
                  <ellipse
                    cx="3.90448"
                    cy="11.6907"
                    rx="3.90448"
                    ry="3.82353"
                    fill="#828282"
                  />
                  <ellipse
                    cx="182.534"
                    cy="11.6907"
                    rx="3.90448"
                    ry="3.82353"
                    fill="#828282"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M93.6116 1.35052C93.432 0.667867 93.9469 0 94.6528 0C95.0213 0 95.3642 0.188432 95.5617 0.499479L101.423 9.72877L107.217 10.028C108.263 10.082 109.083 10.9456 109.083 11.9926C109.083 13.0791 108.202 13.9598 107.115 13.9598L101.423 13.9598L95.56 23.4873C95.3639 23.8059 95.0166 24 94.6425 24C93.9397 24 93.4251 23.3378 93.5987 22.6568L95.8154 13.9598L89.9297 13.9598L88.3516 17.4765C88.2377 17.7305 87.9852 17.894 87.7068 17.894C87.3164 17.894 87 17.5775 87 17.1872V6.33955C87 5.99215 87.2774 5.70829 87.6247 5.70028C87.8783 5.69443 88.1113 5.839 88.2187 6.06876L89.9297 9.72877L95.8154 9.72877L93.6116 1.35052Z"
                    fill="#505050"
                  />
                </svg>
              </span>
              <p className="font-sans text-[#9E9E9E] text-base font-semibold leading-6">
                Langsung
              </p>
            </div>
            <div>
              <p className="font-sans text-[28px] font-bold leading-10 text-[#505050]">
                08:35
              </p>
              <p className="font-sans text-xl font-semibold leading-10 text-[#9E9E9E]">
                DPS
              </p>
            </div>
          </div>
        </div>

        {/* Line */}
        <span className="flex justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="690"
            height="4"
            viewBox="0 0 795 4"
            fill="none"
          >
            <path
              d="M2 2L793 2.00007"
              stroke="#EDEDED"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </svg>
        </span>

        <div className="flex flex-col gap-2 p-8">
          <div className="flex justify-center items-center p-4 w-[95px] h-[36px] bg-[#FFD788] rounded-full">
            <p className="font-sans text-[#F96D01] font-semibold text-xl leading-7">
              Pergi
            </p>
          </div>
          <div className="font-sans text-[#757575]">
            <h2 className="text-2xl font-bold leading-10">
              Senin, 7 Juli 2023
            </h2>
            <div className="flex items-center gap-4 text-[32px] font-bold text-[#505050]">
              Lion Air
              <div>
                <img
                  src="https://i.ibb.co/YQMnThx/Lion-Air.png"
                  alt="Lion-Air"
                />
              </div>
            </div>
            <h2 className="text-2xl font-bold leading-10">Ekonomi</h2>
          </div>
          <div className="flex gap-4 items-center">
            <div>
              <p className="font-sans text-[28px] font-bold leading-10 text-[#505050]">
                07:00
              </p>
              <p className="font-sans text-xl font-semibold leading-10 text-[#9E9E9E]">
                CGK
              </p>
            </div>
            <div className="flex flex-col items-center">
              <p className="font-sans text-[#9E9E9E] text-base font-semibold leading-6">
                2J 15m
              </p>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="187"
                  height="24"
                  viewBox="0 0 187 24"
                  fill="none"
                >
                  <path
                    d="M3.90454 11.6914H182.046"
                    stroke="#C2C2C2"
                    stroke-width="3"
                  />
                  <path
                    d="M3.90454 11.6914H182.046"
                    stroke="black"
                    stroke-opacity="0.2"
                    stroke-width="3"
                  />
                  <path
                    d="M3.90454 11.6914H182.046"
                    stroke="black"
                    stroke-opacity="0.2"
                    stroke-width="3"
                  />
                  <path
                    d="M3.90454 11.6914H182.046"
                    stroke="black"
                    stroke-opacity="0.2"
                    stroke-width="3"
                  />
                  <ellipse
                    cx="3.90448"
                    cy="11.6907"
                    rx="3.90448"
                    ry="3.82353"
                    fill="#828282"
                  />
                  <ellipse
                    cx="182.534"
                    cy="11.6907"
                    rx="3.90448"
                    ry="3.82353"
                    fill="#828282"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M93.6116 1.35052C93.432 0.667867 93.9469 0 94.6528 0C95.0213 0 95.3642 0.188432 95.5617 0.499479L101.423 9.72877L107.217 10.028C108.263 10.082 109.083 10.9456 109.083 11.9926C109.083 13.0791 108.202 13.9598 107.115 13.9598L101.423 13.9598L95.56 23.4873C95.3639 23.8059 95.0166 24 94.6425 24C93.9397 24 93.4251 23.3378 93.5987 22.6568L95.8154 13.9598L89.9297 13.9598L88.3516 17.4765C88.2377 17.7305 87.9852 17.894 87.7068 17.894C87.3164 17.894 87 17.5775 87 17.1872V6.33955C87 5.99215 87.2774 5.70829 87.6247 5.70028C87.8783 5.69443 88.1113 5.839 88.2187 6.06876L89.9297 9.72877L95.8154 9.72877L93.6116 1.35052Z"
                    fill="#505050"
                  />
                </svg>
              </span>
              <p className="font-sans text-[#9E9E9E] text-base font-semibold leading-6">
                Langsung
              </p>
            </div>
            <div>
              <p className="font-sans text-[28px] font-bold leading-10 text-[#505050]">
                08:35
              </p>
              <p className="font-sans text-xl font-semibold leading-10 text-[#9E9E9E]">
                DPS
              </p>
            </div>
          </div>
        </div>

        {/* Line */}
        <span className="flex justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="690"
            height="4"
            viewBox="0 0 795 4"
            fill="none"
          >
            <path
              d="M2 2L793 2.00007"
              stroke="#EDEDED"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </svg>
        </span>

        <div className="flex flex-col gap-8 px-8 mt-8">
          <h1 className="text-[#505050] text-[32px] font-bold leading-10">
            Informasi Penumpang
          </h1>
          <div className="flex justify-between">
            <div className="flex flex-col gap-4 font-sans">
              <div className="flex gap-2 text-[#505050] text-2xl font-bold leading-10">
                <div>1.</div>
                Tuan Don Norman
              </div>
              <div className="flex gap-2">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                  >
                    <path
                      d="M15 7.5V10H25V7.5C25 7.225 24.775 7 24.5 7H15.5C15.225 7 15 7.225 15 7.5ZM12 10V7.5C12 5.56875 13.5688 4 15.5 4H24.5C26.4312 4 28 5.56875 28 7.5V10V12V34H12V12V10ZM8 10H10V34H8C5.79375 34 4 32.2062 4 30V14C4 11.7937 5.79375 10 8 10ZM32 34H30V10H32C34.2062 10 36 11.7937 36 14V30C36 32.2062 34.2062 34 32 34Z"
                      fill="#757575"
                    />
                  </svg>
                </span>
                <div>
                  <p className="text-2xl font-bold leading-10 text-[#757575]">
                    Bagasi Kabin 7 Kg
                  </p>
                  <p className="text-base font-medium leading-7 text-[#757575]">
                    *dengan dimensi spesifik yang tunduk pada kebijakan maskapai
                  </p>
                </div>
              </div>
              <div className="flex gap-2">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                  >
                    <path
                      d="M17 7.5C17 7.225 17.225 7 17.5 7H22.5C22.775 7 23 7.225 23 7.5V12H17V7.5ZM28 12H26V7.5C26 5.56875 24.4312 4 22.5 4H17.5C15.5687 4 14 5.56875 14 7.5V12H12C9.79375 12 8 13.7937 8 16V30C8 32.2062 9.79375 34 12 34C12 35.1063 12.8938 36 14 36C15.1062 36 16 35.1063 16 34H24C24 35.1063 24.8937 36 26 36C27.1063 36 28 35.1063 28 34C30.2062 34 32 32.2062 32 30V16C32 13.7937 30.2062 12 28 12ZM15 18H25C25.55 18 26 18.45 26 19C26 19.55 25.55 20 25 20H15C14.45 20 14 19.55 14 19C14 18.45 14.45 18 15 18ZM15 26H25C25.55 26 26 26.45 26 27C26 27.55 25.55 28 25 28H15C14.45 28 14 27.55 14 27C14 26.45 14.45 26 15 26Z"
                      fill="#757575"
                    />
                  </svg>
                </span>
                <p className="text-2xl font-bold leading-10 text-[#757575]">
                  Bagasi Kabin 20 Kg
                </p>
              </div>
            </div>
            <div className="flex justify-center items-center p-4 h-[36px] bg-[#EDEDED] rounded-full">
              <p className="font-sans text-[#757575] font-semibold text-xl leading-7">
                Dewasa
              </p>
            </div>
          </div>
          <div className="flex justify-between">
            <div className="flex flex-col gap-4 font-sans">
              <div className="flex gap-2 text-[#505050] text-2xl font-bold leading-10">
                <div>2.</div>
                Nona Natasya
              </div>
              <div className="flex gap-2">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                  >
                    <path
                      d="M15 7.5V10H25V7.5C25 7.225 24.775 7 24.5 7H15.5C15.225 7 15 7.225 15 7.5ZM12 10V7.5C12 5.56875 13.5688 4 15.5 4H24.5C26.4312 4 28 5.56875 28 7.5V10V12V34H12V12V10ZM8 10H10V34H8C5.79375 34 4 32.2062 4 30V14C4 11.7937 5.79375 10 8 10ZM32 34H30V10H32C34.2062 10 36 11.7937 36 14V30C36 32.2062 34.2062 34 32 34Z"
                      fill="#757575"
                    />
                  </svg>
                </span>
                <div>
                  <p className="text-2xl font-bold leading-10 text-[#757575]">
                    Bagasi Kabin 7 Kg
                  </p>
                  <p className="text-base font-medium leading-7 text-[#757575]">
                    *dengan dimensi spesifik yang tunduk pada kebijakan maskapai
                  </p>
                </div>
              </div>
              <div className="flex gap-2">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                  >
                    <path
                      d="M17 7.5C17 7.225 17.225 7 17.5 7H22.5C22.775 7 23 7.225 23 7.5V12H17V7.5ZM28 12H26V7.5C26 5.56875 24.4312 4 22.5 4H17.5C15.5687 4 14 5.56875 14 7.5V12H12C9.79375 12 8 13.7937 8 16V30C8 32.2062 9.79375 34 12 34C12 35.1063 12.8938 36 14 36C15.1062 36 16 35.1063 16 34H24C24 35.1063 24.8937 36 26 36C27.1063 36 28 35.1063 28 34C30.2062 34 32 32.2062 32 30V16C32 13.7937 30.2062 12 28 12ZM15 18H25C25.55 18 26 18.45 26 19C26 19.55 25.55 20 25 20H15C14.45 20 14 19.55 14 19C14 18.45 14.45 18 15 18ZM15 26H25C25.55 26 26 26.45 26 27C26 27.55 25.55 28 25 28H15C14.45 28 14 27.55 14 27C14 26.45 14.45 26 15 26Z"
                      fill="#757575"
                    />
                  </svg>
                </span>
                <p className="text-2xl font-bold leading-10 text-[#757575]">
                  Bagasi Kabin 20 Kg
                </p>
              </div>
            </div>
            <div className="flex justify-center items-center p-4 h-[36px] bg-[#EDEDED] rounded-full">
              <p className="font-sans text-[#757575] font-semibold text-xl leading-7">
                Anak-anak
              </p>
            </div>
          </div>
          <div className="flex justify-between">
            <div className="flex flex-col gap-4 font-sans">
              <div className="flex gap-2 text-[#505050] text-2xl font-bold leading-10">
                <div>3.</div>
                Tuan Bryden
              </div>
              <div className="flex gap-2">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                  >
                    <path
                      d="M15 7.5V10H25V7.5C25 7.225 24.775 7 24.5 7H15.5C15.225 7 15 7.225 15 7.5ZM12 10V7.5C12 5.56875 13.5688 4 15.5 4H24.5C26.4312 4 28 5.56875 28 7.5V10V12V34H12V12V10ZM8 10H10V34H8C5.79375 34 4 32.2062 4 30V14C4 11.7937 5.79375 10 8 10ZM32 34H30V10H32C34.2062 10 36 11.7937 36 14V30C36 32.2062 34.2062 34 32 34Z"
                      fill="#757575"
                    />
                  </svg>
                </span>
                <div>
                  <p className="text-2xl font-bold leading-10 text-[#757575]">
                    Bagasi Kabin 7 Kg
                  </p>
                  <p className="text-base font-medium leading-7 text-[#757575]">
                    *dengan dimensi spesifik yang tunduk pada kebijakan maskapai
                  </p>
                </div>
              </div>
              <div className="flex gap-2">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                  >
                    <path
                      d="M17 7.5C17 7.225 17.225 7 17.5 7H22.5C22.775 7 23 7.225 23 7.5V12H17V7.5ZM28 12H26V7.5C26 5.56875 24.4312 4 22.5 4H17.5C15.5687 4 14 5.56875 14 7.5V12H12C9.79375 12 8 13.7937 8 16V30C8 32.2062 9.79375 34 12 34C12 35.1063 12.8938 36 14 36C15.1062 36 16 35.1063 16 34H24C24 35.1063 24.8937 36 26 36C27.1063 36 28 35.1063 28 34C30.2062 34 32 32.2062 32 30V16C32 13.7937 30.2062 12 28 12ZM15 18H25C25.55 18 26 18.45 26 19C26 19.55 25.55 20 25 20H15C14.45 20 14 19.55 14 19C14 18.45 14.45 18 15 18ZM15 26H25C25.55 26 26 26.45 26 27C26 27.55 25.55 28 25 28H15C14.45 28 14 27.55 14 27C14 26.45 14.45 26 15 26Z"
                      fill="#757575"
                    />
                  </svg>
                </span>
                <p className="text-2xl font-bold leading-10 text-[#757575]">
                  Bagasi Kabin 20 Kg
                </p>
              </div>
            </div>
            <div className="flex justify-center items-center p-4 h-[36px] bg-[#EDEDED] rounded-full">
              <p className="font-sans text-[#757575] font-semibold text-xl leading-7">
                Bayi
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoundTripMorePerson;
