import Icon from '../icons';
import { IconWrapper, IconsSection, SocialSectionWrapper } from './styled'

const SocialSection = ({socialData}) => (
  <SocialSectionWrapper>
    <p>Share my results</p>
    <IconsSection>
      {socialData.map((social, index) => (
        <IconWrapper key={index}>
          <Icon name={social} width='25' height='25' fill='white' />
        </IconWrapper>
      ))}
    </IconsSection>
  </SocialSectionWrapper>
);
export default SocialSection;
