import * as React from 'react';
import PageTemplate from 'components/base/template/PageTemplate';
import HeaderCtr from 'containers/base/header/HeaderCtr';

export interface LandingProps {}

class Landing extends React.Component<LandingProps, any> {
  public render() {
    return (
      <PageTemplate header={<HeaderCtr />} children={<div>children</div>} />
    );
  }
}

export default Landing;
