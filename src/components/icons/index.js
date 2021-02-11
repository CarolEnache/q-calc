import React from 'react';

import Logo from './Logo';
import Facebook from './Facebook';
import LinkedIn from './LinkedIn';
import Pinterest from './Pinterest';
import Instagram from './Instagram';
import Youtube from './Youtube';
import Mail from './Mail';
import Link from './Link';

const Icon = (props) => {
  switch (props.name) {
    case 'logo':
      return <Logo {...props} />;
    case 'facebook':
      return <Facebook {...props} />;
    case 'linkedIn':
      return <LinkedIn {...props} />;
    case 'pinterest':
      return <Pinterest {...props} />;
    case 'instagram':
      return <Instagram {...props} />;
    case 'youtube':
      return <Youtube {...props} />;
    case 'mail':
      return <Mail {...props} />;
    case 'link':
      return <Link {...props} />;
    default:
      return null;
  }
};

export default Icon;
