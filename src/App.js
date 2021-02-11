import Navigation from './components/nav-bar';
import TheQuickBookCalculator from './components/calculator';
import styled from 'styled-components';

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
    </>
  );
}

export default App;
