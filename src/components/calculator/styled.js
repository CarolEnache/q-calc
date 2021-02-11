import styled from 'styled-components';

export const CalculatorWrapper = styled.div`
  background-color: #eceef1;export 
`;

export const Title = styled.h1`
  padding: 2rem;
  font-weight: 900;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 200px;
`;

export const Label = styled.label`
  display: block;
  color: #6b6c72;
  line-height: 20px;
  font-size: 14px;
  font-weight: 400;
  margin: 0.5rem 0;
`;

export const Input = styled.input`
  border: 1px solid black;
  min-width: 160px;
  width: 100%;
  height: 35px;

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgb(44 160 28/25%);
    border: 1px solid #2ca01c;
  }
`;

export const TotalSection = styled.div`
  width: 250px;
  top: 0;
  position: absolute;
  height: 200px;
  right: -17%;
`;

export const TotalLabel = styled.p`
  margin: 0.5rem 0;
  margin: 0.5rem 0;
  font-weight: 600;
  text-transform: capitalize;
`;

export const TotalAmount = styled.p`
  text-align: center;
  font-size: 4rem;
  background-image: linear-gradient(to right, #53b700, #00c1bf);
  padding: 2rem;
  margin: 0;
  font-weight: bold;
  color: white;
`;

export const Wrapper = styled.div`
  position: relative;
`;

export const InputWrapper = styled.div`
  margin: 0 2rem;
  min-width: 250px;
`;
