import styled from "styled-components";

const Badge = styled.span`
  font-weight: 500;
  font-size: calc(1.5vmin);
  color: #fff;
  background: #4a69dd;
  border: 1px solid #ffffff;
  position: absolute;
  bottom: 0;
  right: 15px;
  width: calc(5px + 2vmin);
  height: calc(5px + 2vmin);
  border-radius: calc(5px + 2vmin);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease-out;

  &.first {
    color: #b66d14;
    background: #fcc228;
  }
  &.second {
    color: #8d8b87;
    background: #d4d3d1;
  }
  &.third {
    color: #b66d14;
    background: #e5982c;
  }
`;

export default Badge;
