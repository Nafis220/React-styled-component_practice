import { useState } from "react";
import styled from "styled-components";
const BaseButton = styled.button`
  border: none;
  outline: none;
  background: ${(props) => (props.state ? "white" : "black")};
  color: ${(props) => (props.state ? "black" : "white")};
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  padding: 0.5rem 1rem;
`;

export default function App() {
  const [white, setWhite] = useState(false);

  const changeColor = () => {
    white ? setWhite(false) : setWhite(true);
  };

  return (
    <div>
      <h2>Styles Component</h2>
      <BaseButton onClick={changeColor} state={white}>
        I'm a Button
      </BaseButton>
    </div>
  );
}
