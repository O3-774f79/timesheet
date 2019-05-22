import React, {PureComponent} from 'react';
import {Input} from 'antd';
import Modal from '../ModalForm/';
import ActivityTable from '../ActivityTable';
export default class index extends PureComponent {
  state = {
    showModalParent: false,
  };
  openModal = async () => {
    await this.setState ({showModalParent: true, click: true});
  };
  render () {
    const {showModalParent} = this.state;
    return (
      <React.Fragment>
        <Modal showModal={showModalParent} title={'...'} />
        <ActivityTable />
      </React.Fragment>
    );
  }
}
