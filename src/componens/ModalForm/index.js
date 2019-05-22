import React, {PureComponent} from 'react';
import {Modal, Button} from 'antd';
export default class index extends PureComponent {
  state = {
    loading: false,
    visible: false,
  };
  componentWillMount () {
    const {showModal} = this.props;
    this.setState ({visible: showModal});
  }
  handleOk = () => {
    this.setState ({loading: true});
    setTimeout (() => {
      this.setState ({loading: false, visible: false});
    }, 3000);
  };
  handleCancel = () => {
    this.setState ({
      visible: false,
    });
  };
  render () {
    const {title} = this.props;
    const {loading, visible} = this.state;

    return (
      <React.Fragment>
        <Modal
          visible={visible}
          title={title}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={[
            <Button key="back" onClick={this.handleCancel}>
              Return
            </Button>,
            <Button
              key="submit"
              type="primary"
              loading={loading}
              onClick={this.handleOk}
            >
              Submit
            </Button>,
          ]}
        />
      </React.Fragment>
    );
  }
}
