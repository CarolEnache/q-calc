import styled from 'styled-components';

import Navigation from './components/nav-bar';
import TheQuickBookCalculator from './components/calculator';
import Faq from './components/frequently-asked';

import { FAQ, socialData } from './data'

const Section = styled.section`
  width: 747px;
  margin: 0 auto;
`;

function App() {

  return (
    <>
      <Navigation />
      <Section>
        <TheQuickBookCalculator socialData={socialData}/>
      </Section>
      <Section>
        <Faq faq={FAQ} />
      </Section>
    </>
  );
}

export default App;
