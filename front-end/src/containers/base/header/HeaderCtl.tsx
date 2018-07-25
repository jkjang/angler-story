import * as React from 'react';
import Header from 'components/base/header';

export interface HeaderCtlProps {
}

export interface HeaderCtlState {
}

export default class HeaderCtl extends React.Component<HeaderCtlProps, HeaderCtlState> {
  constructor(props: HeaderCtlProps) {
    super(props);

    this.state = {
    };
  }

  onOpen = () => {
      console.log(open);
  }

  public render() {
    return (
        <React.Fragment>
            <Header onOpen={this.onOpen}/>
        </React.Fragment>
    );
  }
}
