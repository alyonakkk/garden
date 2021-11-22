import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";
import redCup from "./img/redCup.svg";
import yellowCup from "./img/yellowCup.svg";
import blackCup from "./img/blackCup.svg";
import pinkCup from "./img/pinkCup.svg";
import blueCup from "./img/blueCup.svg";
import greenCup from "./img/greenCup.svg";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 20px;
`;
const Element = styled.div`
  position: absolute;
  width: 60px;
  height: 60px;

  filter: drop-shadow(8px 8px 30px rgba(0, 0, 0, 0.15));
`;
const Cup = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const Container = styled.div`
  padding: 50px 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 70vh;
`;
const TexteWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
const Title = styled.p`
  font-size: 60px;
  font-weight: 800;
  line-height: 40px;
`;
const SubTitle = styled.p`
  color: #bebebe;
  font-size: 14px;
  font-weight: 500;
`;
const Text = styled.p`
  font-size: 40px;
  font-weight: 800;
  text-transform: uppercase;
`;
const TextRed = styled.span`
  color: #f669a2;
`;

const Cups: React.FC = () => {
  const refCircle = useRef<HTMLDivElement>(null!);
  let [cupIndex, setCupIndex] = useState<number>(0);
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
    <Wrapper>
      <Element ref={refCircle} className={`element`}>
        <Cup src={cupsData[cupIndex]} alt="Cup" />
      </Element>
      <Container>
        <TexteWrapper>
          <Title>GARDEN</Title>
          <SubTitle>COFFEE ROASTERS</SubTitle>
        </TexteWrapper>
        <TexteWrapper>
          <Text>
            Заказ <br /> на сайте <br /> <TextRed>без очереди</TextRed>
          </Text>
        </TexteWrapper>
      </Container>
    </Wrapper>
  );
};

export default Cups;
