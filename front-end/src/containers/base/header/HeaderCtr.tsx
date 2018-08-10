import * as React from 'react';
import Header from 'components/base/header';
import i18n from 'i18n';

export interface HeaderCtrProps {}

export interface HeaderCtrState {}

export default class HeaderCtr extends React.Component<
  HeaderCtrProps,
  HeaderCtrState
> {
  menus: DropdownMenuNameSpace.DropdownItem[] = [
    {
      id: 'num1',
      name: 'num1'
    },
    {
      id: 'num2',
      name: 'num2'
    }
  ];

  constructor(props: HeaderCtrProps) {
    super(props);

    this.state = {};
  }

  onOpen = () => {
    console.log(open);
  };

  changeLang = () => {
    // console.log(lng);
    i18n.changeLanguage('kr');
  };

  public render() {
    return (
      <React.Fragment>
        <Header
          title="dropdown menu"
          data={this.menus}
          onOpen={this.onOpen}
          changeLang={this.changeLang}
        />
      </React.Fragment>
    );
  }
}
