import styled from "styled-components";

const Father = styled.div`
  display: flex;
`;

const Box = styled.div`
  width: 100px;
  height: 100px;
  background-color: teal;
`;

function App() {
  return (
    <Father>
      <Box></Box>
    </Father>
  );
}

export default App;
