import * as React from 'react';

const DropdownMenu: React.SFC<
  DropdownMenuNameSpace.DropdownMenuProps
> = props => {
  return (
    <div id="demo-menu" className="mdc-menu-anchor">
      <button id="menu-button">{props.title}</button>
      <div className="mdc-menu">
        <ul className="mdc-menu__items mdc-list" role="menu" aria-hidden="true">
          {props.data &&
            props.data.map(d => (
              <li key={d.id} className="mdc-list-item" role="menuitem">
                {d.name}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default DropdownMenu;
