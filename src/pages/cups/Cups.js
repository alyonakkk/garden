import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import style from "./cups.module.css";
import redCup from "./img/redCup.svg";
import yellowCup from "./img/yellowCup.svg";
import blackCup from "./img/blackCup.svg";
import pinkCup from "./img/pinkCup.svg";
import blueCup from "./img/blueCup.svg";
import greenCup from "./img/greenCup.svg";

function Cups() {
  let i = 0;

  const refCircle = useRef(0);
  let [cupIndex, setCupIndex] = useState(i);

  const cupsData = [redCup, greenCup, pinkCup, blueCup, yellowCup, blackCup];

  function getIndex() {
    setTimeout(() => {
      if (cupIndex !== cupsData.length - 1) {
        setCupIndex(cupIndex + 1);
      }
    }, 200);
  }

  useEffect(() => {
    getIndex();
  }, [cupIndex]);

  useEffect(() => {
    const windowHeight =
      window.innerHeight - refCircle.current.offsetHeight * 2.5;
    const windowWidth = window.innerWidth - refCircle.current.offsetWidth * 2.5;

    gsap.to(".element", {
      x: windowWidth,
      y: windowHeight,
      duration: 1.5,
      scale: 3,
      rotate: 360,
    });
  }, []);

  return (
    <div className={style.wrapper}>
      <div ref={refCircle} className={`${style.element} element`}>
        <img className={style.cup} src={cupsData[cupIndex]} alt="Cup" />
      </div>
      <div className={style.container}>
        <div className={style.text_wrapper}>
          <p className={style.title}>GARDEN</p>
          <p className={style.subtitle}>COFFEE ROASTERS</p>
        </div>
        <div className={style.text_wrapper}>
          <p className={style.text}>
            Заказ <br /> на сайте <br />{" "}
            <span className={style.text_red}>без очереди</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Cups;
