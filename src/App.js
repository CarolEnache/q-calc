import styled from 'styled-components';

import Navigation from './components/nav-bar';
import TheQuickBookCalculator from './components/calculator';
import Faq from './components/frequently-asked';

const Section = styled.section`
  width: 747px;
  margin: 0 auto;
`;

function App() {

  return (
    <>
      <Navigation />
      <Section>
        <TheQuickBookCalculator />
      </Section>
      <Section>
        <Faq />
      </Section>
    </>
  );
}

export default App;
