import React, { useState } from "react";

const Accordion = ({ title, answer }) => {
  const [accordionOpen, setAccordionOpen] = useState(false);

  return (
    <div className="py-2">
      <button
        onClick={() => setAccordionOpen(!accordionOpen)}
        className="flex justify-between w-full"
      >
        <span>{title}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="33"
          height="32"
          viewBox="0 0 33 32"
          fill="none"
        >
          {accordionOpen ? (
            <path
              d="M22.62 20.9375L16.5 14.8308L10.38 20.9375L8.5 19.0575L16.5 11.0575L24.5 19.0575L22.62 20.9375Z"
              fill="#505050"
            />
          ) : (
            <path
              d="M10.38 11.0625L16.5 17.1692L22.62 11.0625L24.5 12.9425L16.5 20.9425L8.5 12.9425L10.38 11.0625Z"
              fill="#505050"
            />
          )}
        </svg>
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-sm ${
          accordionOpen
            ? "grid-rows-[1fr] opacity-100 pt-2"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">{answer}</div>
      </div>
    </div>
  );
};

export default Accordion;
