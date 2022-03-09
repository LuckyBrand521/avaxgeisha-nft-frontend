import React from 'react';
import styled from 'styled-components';
import Digit from './Digit';

const TimerContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  font-family: "Aclonica", sans-serif;
`;

const SepartorContainer = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: flex-end;
  margin: 0 0 10px 0px;
`;

const Separtor = styled.span`
  display: inline-block;
  width: 6px;
  height: 6px;
  background-color: #fff;
  border-radius: 6px;
  margin: 5px 0px;
`;

export default function TimerStyled({ seconds, minutes, hours, days }) {

  return (
    <TimerContainer>
      {days !== undefined ? <Digit value={days} title="DAYS" addSeparator /> : null}
      {days !== undefined ? (<SepartorContainer><Separtor /><Separtor /></SepartorContainer>): null}
      <Digit value={hours} title="HOURS" addSeparator />
      <SepartorContainer><Separtor /><Separtor /></SepartorContainer>
      <Digit value={minutes} title="MINUTES" addSeparator />
      <SepartorContainer><Separtor /><Separtor /></SepartorContainer>
      <Digit value={seconds} title="SECONDS" />
    </TimerContainer>
  );
}
