import { useState, useEffect } from 'react';
import {
  CalculatorWrapper,
  Title,
  FormGroup,
  Label,
  Input,
  TotalSection,
  TotalAmount,
  TotalLabel,
  Wrapper,
  InputWrapper,
} from './styled';

const TheQuickBookCalculator = () => {
  const [total, setTotal] = useState(0);
  const [insertedValues, setInsertedValues] = useState({
    income: 0,
    commissions: 0,
    construction: 0,
    other: 0,
  });

  const handleOnChange = (event) => {
    setInsertedValues({
      ...insertedValues,
      [event.target.id]: Math.floor(event.target.value),
    });
  };

  useEffect(() => {
    const { income, commissions, construction, other } = insertedValues;
    setTotal(income + commissions + construction + other);
  }, [insertedValues]);

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      setInsertedValues({
        ...insertedValues,
        [event.target.id]: Math.floor(event.target.value),
      });
    }
  };

  return (
    <>
      <CalculatorWrapper>
        <Title>The QuickBooks Calculator</Title>
        <Wrapper>
          <FormGroup>
            <InputWrapper>
              <Label htmlFor='income'>Income from sales</Label>
              <Input
                type='number'
                id='income'
                placeholder='£0'
                onBlur={(value) => handleOnChange(value)}
                onKeyDown={(event) => handleKeyPress(event)}
              />
            </InputWrapper>
            <InputWrapper>
              <Label htmlFor='commissions'>Commissions</Label>
              <Input
                type='number'
                id='commissions'
                placeholder='£0'
                onBlur={(value) => handleOnChange(value)}
                onKeyDown={(event) => handleKeyPress(event)}
              />
            </InputWrapper>
            <InputWrapper>
              <Label htmlFor='construction'>Construction</Label>
              <Input
                type='number'
                id='construction'
                placeholder='£0'
                onBlur={(value) => handleOnChange(value)}
                onKeyDown={(event) => handleKeyPress(event)}
              />
            </InputWrapper>
            <InputWrapper>
              <Label htmlFor='other'>Other income</Label>
              <Input
                type='number'
                id='other'
                placeholder='£0'
                onBlur={(value) => handleOnChange(value)}
                onKeyDown={(event) => handleKeyPress(event)}
              />
            </InputWrapper>
          </FormGroup>
          <TotalSection>
            <TotalLabel>total</TotalLabel>
            <TotalAmount>{`£${total}`}</TotalAmount>
          </TotalSection>
        </Wrapper>
      </CalculatorWrapper>
    </>
  );
};

export default TheQuickBookCalculator;
