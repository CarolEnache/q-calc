import { useState } from 'react';
import { Section, Arrow, Dropdown, Answer, Title } from './styled'

const FAQ = [
  {
    question: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit?',
    answer:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupt fuga at vitae ab mollitia, iste similique voluptatum ipsam officiis, doloremque accusamus dolor, nisi repellat aspernatur! Sequi nihilipsa dolores mollitia',
  },
  {
    question: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit?',
    answer:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupt fuga at vitae ab mollitia, iste similique voluptatum ipsam officiis, doloremque accusamus dolor, nisi repellat aspernatur! Sequi nihilipsa dolores mollitia',
  },
  {
    question: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit?',
    answer:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupt fuga at vitae ab mollitia, iste similique voluptatum ipsam officiis, doloremque accusamus dolor, nisi repellat aspernatur! Sequi nihilipsa dolores mollitia',
  },
  {
    question: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit?',
    answer:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupt fuga at vitae ab mollitia, iste similique voluptatum ipsam officiis, doloremque accusamus dolor, nisi repellat aspernatur! Sequi nihilipsa dolores mollitia',
  },
];

const Faq = () => {
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
        {FAQ.map(({ question, answer }, index) => (
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
