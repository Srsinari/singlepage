import React from 'react'
import "./Portfolio.scss"
import { useState } from 'react';

export default function Portfolio() {
    const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: "1",
      icon: "./assets/mobile.png",
      title: "Image1",
      desc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      img:
        "./assets/image3.jpg",
    },
    {
      id: "2",
      icon: "./assets/globe.png",
      title: "Image2",
      desc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img:
      "./assets/image2.jpg",
    },
    {
      id: "3",
      icon: "assets/writing.png",
      title: "Imagw3",
      desc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img:
        "./assets/image1.jpg",
    },
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };

  return (
    <div className="portfolio" id="portfolio">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                  
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                  
                </div>
              </div>
              <div className="right">
                <img
                  src={d.img}
                  alt=""
                />
                <h1>faihasghashgdsmj</h1>
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src="assets/arrow.png"
        className="arrow left"
        alt=""
        onClick={() => handleClick("left")}
      />
      <img
        src="assets/arrow.png"
        className="arrow right"
        alt=""
        onClick={() => handleClick()}
      />
    </div>
  );
}
