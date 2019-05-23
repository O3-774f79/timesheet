import React, {PureComponent} from 'react';
import List from './List';
import {Modal, Button, Icon} from 'antd';
export default class idnex extends PureComponent {
  state = {
    term: {
      data1: '',
    },
    taskList: [],
    items: [],
    currentDate: '',
    loading: false,
    visible: false,
  };
  componentWillMount () {
    const d = new Date ();
    const date = parseInt (d.getDate ());
    const year = parseInt (d.getFullYear ()) + 543;
    var month = '';
    switch (d.getMonth () + 1) {
      case 1:
        month = 'มกราคม';
        break;
      case 2:
        month = 'กุมภาพันธ์';
        break;
      case 3:
        month = 'มีนาคม';
        break;
      case 4:
        month = 'เมษายน';
        break;
      case 5:
        month = 'พฤษภาคม';
        break;
      case 6:
        month = 'มิถุนายน';
        break;
      case 7:
        month = 'กรกฎาคม';
        break;
      case 8:
        month = 'สิงหาคม';
        break;
      case 9:
        month = 'กันยายน';
        break;
      case 10:
        month = 'ตุลาคม';
        break;
      case 11:
        month = 'พฤษจิกายน';
        break;
      case 12:
        month = 'ธันวาคม';
        break;
    }

    this.setState ({
      currentDate: `${date} ${month} ${year}`,
    });
  }
  onChange = event => {
    this.setState ({
      term: {
        data1: event.target.value,
      },
    });
  };
  showModal = () => {
    this.setState ({visible: true});
  };
  handleCancel = () => {
    this.setState ({visible: false});
  };
  onSubmit = async event => {
    await event.preventDefault ();
    await this.state.items.push (this.state.term);
    await this.setState ({
      term: {
        data1: '',
      },
    });
    await alert (JSON.stringify (this.state.items));
  };
  render () {
    const {visible, loading, currentDate} = this.state;
    return (
      <div>
        <input value={this.state.term.data1} onChange={this.onChange} />
        <button onClick={this.onSubmit}>Submit</button>
        <Button style={{backgroundColor: '#4FFF33'}} onClick={this.showModal}>
          <b>Add</b>
        </Button>
        <List items={this.state.items} currentDate={this.state.currentDate} />
        <Modal
          visible={visible}
          title={currentDate}
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
        >
          <div style={{display: 'flex'}}>
            <Button style={{cursor: 'pointer', backgroundColor: 'green'}}>
              <Icon style={{fontSize: 20}} type="plus-circle" />
              <p style={{marginLeft: 5}}>Add Activity</p>
            </Button>
          </div>
        </Modal>
      </div>
    );
  }
}
