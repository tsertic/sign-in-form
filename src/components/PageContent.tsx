import React, { Component } from 'react';

type MyProps = {
  children: React.ReactNode;
};
class PageContent extends Component<MyProps, {}> {
  render() {
    const { children } = this.props;
    const styles = {
      backgroundColor: '#eff5fe',
      height: '100vh',
      width: '100vw'
    };
    return <div style={styles}>{children}</div>;
  }
}

export default PageContent;
