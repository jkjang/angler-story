import Header from 'components/base/Header';
import PageTemplate from 'components/base/PageTemplate';
import * as React from 'react';
import { connect } from 'react-redux';
import { loadDocuments } from 'redux/actions/actions';


interface Props {
  header: Header,
}

class Randing extends React.Component<Props> {
  public componentDidMount() {

  }
  public render() {
    console.log(this.props);
    const documents = this.props.documents
      .reverse()
      .map(document => <div>{document.createDate}</div>);

    return <PageTemplate header={<Header />} />;
  }
}

export default connect(
  mapStateToProps,
  { loadDocuments },
)(Randing);
