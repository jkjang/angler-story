import * as React from 'react';
import './PageTemplate.scss';

export interface Props {
    header: any;
    children: any;
}

const defaultProps: Props = {
    header: null,
    children: null,
};

const PageTemplate: React.SFC<Props> = (props) => {
    return ( 
        <div className="container">
            {props.header}
            <main>children{props.children}</main>
        </div> 
        );
};

PageTemplate.defaultProps = defaultProps;
 
export default PageTemplate;
