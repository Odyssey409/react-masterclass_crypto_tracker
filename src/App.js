import styled, { keyframes } from "styled-components";

const Wrapper = styled.div`
  display: flex;
`;

const rotateAnimation = keyframes`
  0%{
    transform:rotate(0deg);
    border-radius:0px;
  }
  50%{
    transform:rotate(360deg);
    border-radius:100px;
  }
  100%{
    transform:rotate(0deg);
    border-radius:0px;
  }
`;

const Emoji = styled.span`
  font-size: 36px;
`;

const Box = styled.div`
  height: 100px;
  width: 100px;
  background-color: tomato;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${rotateAnimation} 1s linear infinite;

  ${Emoji} {
    &:hover {
      font-size: 98px;
    }
  }
`;

function App() {
  return (
    <Wrapper>
      <Box>
        <Emoji>😀</Emoji>
      </Box>
      <Emoji>😀</Emoji>
      {/* 여기 있는 Emoji는 pseudo  selecting에 의해 영향을 받지 않음 */}
    </Wrapper>
  );
}

export default App;
