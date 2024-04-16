import React, { useEffect, useRef, useState } from "react";
import "./dateSlider.css";
import Left from "../../../assets/LeftArrow.svg";
import Right from "../../../assets/RightArrow.svg";

interface IDateSlider {
  setDateSelected: any;
  dates: any;
  index: number;
}

const DateSlider = ({setDateSelected, dates, index}: IDateSlider) => {
  console.log(index)
  const [activeIndex, setActiveIndex] = useState(index);

  useEffect(()=>{
    setActiveIndex(index)
  },[index])

  const tabsBoxRef = useRef(null); 

  const handleIcons = () => {
    const tabsBox = tabsBoxRef.current;
    const arrowIcons = document.querySelectorAll(".icon i");
    let maxScrollableWidth = tabsBox.scrollWidth - tabsBox.clientWidth;

    arrowIcons[0].parentElement.style.display =
      tabsBox.scrollLeft <= 0 ? "none" : "flex";
    arrowIcons[1].parentElement.style.display =
      maxScrollableWidth - tabsBox.scrollLeft <= 1 ? "none" : "flex";
  };

  const selectedDate = dates[activeIndex];

  console.log(selectedDate, activeIndex, index)

  useEffect(()=>{
    setDateSelected(selectedDate)
  },[index])

  const handleTabClick = (index) => {
    setActiveIndex(index);
    setDateSelected(selectedDate)
    const tabsBox = tabsBoxRef.current;
    const tabs = tabsBox.querySelectorAll(".tab");

    tabsBox.querySelector(".active").classList.remove("active");
    tabs[index].classList.add("active");
  };

  const handleArrowClick = (direction) => {
    const tabsBox = tabsBoxRef.current;
    const scrollAmount = direction === "left" ? -340 : 340;
    tabsBox.scrollLeft += scrollAmount;
    handleIcons();
  };

  const handleMouseDown = () => {
    tabsBoxRef.current.classList.add("dragging");
  };

  const handleMouseMove = (e) => {
    const tabsBox = tabsBoxRef.current;
    tabsBox.scrollLeft -= e.movementX;
    handleIcons();
  };

  const handleMouseUp = () => {
    tabsBoxRef.current.classList.remove("dragging");
  };

  return (
    <div className="pt-10 pb-6 px-12">
      <div className="wrapper">
        <div className="icon" onClick={() => handleArrowClick("left")}>
          <img src={Left} alt="Left Arrow" />
        </div>
        <ul
          className="tabs-box"
          ref={tabsBoxRef}
          // onMouseDown={handleMouseDown}
          // onMouseMove={handleMouseMove}
          // onMouseUp={handleMouseUp}
        >
          {dates.map((date, index) => (
            <li
              key={index}
              className={`tab ${index === 0 ? "active" : ""}`}
              onClick={() => handleTabClick(index)}
            >
              <div>
                <h1>{date.date}</h1>
                <h1>{date.day}</h1>
              </div>
            </li>
          ))}
        </ul>
        <div className="icon" onClick={() => handleArrowClick("right")}>
          <img src={Right} alt="Right Arrow" />
        </div>
      </div>
    </div>
  );
};

export default DateSlider;
