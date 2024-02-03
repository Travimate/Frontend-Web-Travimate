import React, { useRef } from 'react';
import './dateSlider.css';
import Left from '../../../assets/LeftArrow.svg';
import Right from '../../../assets/RightArrow.svg';

const DateSlider = () => {
  const dates=[
    {
    date: "2021-08-31",
    day: "Selasa"
  },
    {
    date: "2021-08-31",
    day: "Selasa"
  },
    {
    date: "2021-08-31",
    day: "Selasa"
  },
    {
    date: "2021-08-31",
    day: "Selasa"
  },
    {
    date: "2021-08-31",
    day: "Selasa"
  },
    {
    date: "2021-08-31",
    day: "Selasa"
  },
    {
    date: "2021-08-31",
    day: "Selasa"
  },
]
  const tabsBoxRef = useRef(null);

  const handleIcons = () => {
    const tabsBox = tabsBoxRef.current;
    const arrowIcons = document.querySelectorAll(".icon i");
    let maxScrollableWidth = tabsBox.scrollWidth - tabsBox.clientWidth;

    arrowIcons[0].parentElement.style.display = tabsBox.scrollLeft <= 0 ? "none" : "flex";
    arrowIcons[1].parentElement.style.display = maxScrollableWidth - tabsBox.scrollLeft <= 1 ? "none" : "flex";
  };

  const handleTabClick = (index) => {
    const tabsBox = tabsBoxRef.current;
    const tabs = tabsBox.querySelectorAll(".tab");

    tabsBox.querySelector(".active").classList.remove("active");
    tabs[index].classList.add("active");
  };

  const handleArrowClick = (direction) => {
    const tabsBox = tabsBoxRef.current;
    const scrollAmount = direction === 'left' ? -340 : 340;
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
    <div className="wrapper">
      <div className="icon" onClick={() => handleArrowClick('left')}>
        <img src={Left} alt="Left Arrow" />
      </div>
      <ul className="tabs-box" ref={tabsBoxRef}
      // onMouseDown={handleMouseDown}
      // onMouseMove={handleMouseMove}
      // onMouseUp={handleMouseUp}
        >
        {dates.map((date, index) => (
          <li key={index} className={`tab ${index === 0 ? 'active' : ''}`} onClick={() => handleTabClick(index)}>
            <div>
              <h1>{date.date}</h1>
              <h1>{date.day}</h1>
            </div>
          </li>
        ))}
      </ul>
      <div className="icon" onClick={() => handleArrowClick('right')}>
        <img src={Right} alt="Right Arrow" />
      </div>
    </div>
  );
};

export default DateSlider;
