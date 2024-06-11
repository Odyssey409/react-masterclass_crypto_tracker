import { useState } from "react";
import styled from "styled-components";

interface ContainerProps {
  bgColor: string;
  borderColor: string;
}

const Container = styled.div<ContainerProps>`
  width: 200px;
  height: 200px;
  background-color: ${(props) => props.bgColor};
  border-radius: 100px;
  border: 1px solid ${(props) => props.borderColor};
`;

interface CircleProps {
  bgColor: string;
  borderColor?: string;
}

function Circle({ bgColor, borderColor }: CircleProps) {
  const [counter, setCounter] = useState(1); // 이 방식으로 하면 Typescript가 자동으로 counter가 number type으로 인식
  const [value, setValue] = useState<number | string>(0); // 이 방식이면 Typescriot에게 value가 number일 수도 string일수도 있다고 알려주는 것
  return <Container bgColor={bgColor} borderColor={borderColor ?? bgColor} />;
}

export default Circle;

interface PlayerShape {
  name: string;
  age: number;
}

const sayHello = (playerObj: PlayerShape) => `
    Hello ${playerObj.name} you are ${playerObj.age} years old
`;

sayHello({ name: "odyssey", age: 23 });
