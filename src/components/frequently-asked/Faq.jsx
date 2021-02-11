import { useState } from 'react';
import { Section, Arrow, Dropdown, Answer, Title } from './styled'

const Faq = ({faq}) => {
  const [toggle, setToggle] = useState(false);
  const [indexToToggle, setIndexToToggle] = useState(null);

  const handleClick = (index) => {
    setToggle(!toggle);
    setIndexToToggle(index);
  };

  return (
    <>
      <Section>
        <Title>Frequently asked questions</Title>
        {faq.map(({ question, answer }, index) => (
          <div key={index}>
            <Dropdown
              onClick={() => handleClick(index)}
              toggled={toggle && indexToToggle === index}
            >
              <p>{question}</p>
              <Arrow rotate={indexToToggle === index && toggle} />
            </Dropdown>
            {toggle && indexToToggle === index && <Answer>{answer}</Answer>}
          </div>
        ))}
      </Section>
    </>
  );
}

export default Faq;
