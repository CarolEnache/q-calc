import styled, { css } from 'styled-components';

export const Section = styled.section`
  width: 747px;
  margin: 0 auto;
`;

export const Arrow = styled.div`
  width: 0;
  height: 0;
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  border-top: 8px solid black;

  ${(props) =>
    props.rotate &&
    css`
      transform: rotate(180deg);
    `}
`;

export const Dropdown = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-bottom: 1px solid lightgray;

  ${(props) =>
    props.toggled &&
    css`
      border-bottom: none;
    `}
`;

export const Answer = styled.p`
  border-bottom: 1px solid lightgray;
  padding: 0.5rem 5rem;
  width: 60%;
  margin: 0;
`;

export const Title = styled.h2`
  border-bottom: 1px solid lightgrey;
  margin: 0;
  padding: 1rem 2rem 1rem 5rem;
`;
