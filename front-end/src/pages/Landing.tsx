import * as React from 'react';
import PageTemplate from 'components/base/template/PageTemplate';
import HeaderCtl from 'containers/base/header/HeaderCtl';

export interface LandingProps {
}

class Landing extends React.Component<LandingProps, any> {
  public render() {
    return (
      <PageTemplate header={<HeaderCtl/>} children={<div>children</div>} />
    );
  }
}

export default  Landing;