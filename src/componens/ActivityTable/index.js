import React, {PureComponent} from 'react';
import List from './List';
import TableList from './TableList';
import {Modal, Button, Icon} from 'antd';

export default class idnex extends PureComponent {
  state = {
    term: {
      data1: '',
    },
    taskList: [],
    items: [],
    dataSet: {
      isSubmit: false,
      timeSheet: [
        {
          dateTimeStamp: '2019-05-01',
          taskList: [
            {
              projectCode: 'P001',
              typeCode: 'T001',
              workingHours: 2,
              description: 'Change Requirement Logic BS',
            },
            {
              projectCode: 'P002',
              typeCode: 'T002',
              workingHours: 6,
              description: 'Setup Project',
            },
          ],
        },
        {
          dateTimeStamp: '2019-05-02',
          taskList: [
            {
              projectCode: 'P001',
              typeCode: 'T001',
              workingHours: 2,
              description: 'Change Requirement Logic CA',
            },
            {
              projectCode: 'P002',
              typeCode: 'T002',
              workingHours: 6,
              description: 'Setup SmartObject',
            },
          ],
        },
        {
          dateTimeStamp: '2019-05-03',
          taskList: [
            {
              projectCode: 'P001',
              typeCode: 'T001',
              workingHours: 2,
              description: 'Change Requirement Logic PV',
            },
            {
              projectCode: 'P002',
              typeCode: 'T002',
              workingHours: 6,
              description: 'Setup SmartForm',
            },
          ],
        },
        {
          dateTimeStamp: '2019-05-06',
          taskList: [
            {
              projectCode: 'P001',
              typeCode: 'T001',
              workingHours: 2,
              description: 'Fixed Issue',
            },
            {
              projectCode: 'P002',
              typeCode: 'T002',
              workingHours: 6,
              description: 'Setup Workflow',
            },
          ],
        },
        {
          dateTimeStamp: '2019-05-07',
          taskList: [
            {
              projectCode: 'P001',
              typeCode: 'T001',
              workingHours: 2,
              description: 'Fixed Data Dup',
            },
            {
              projectCode: 'P002',
              typeCode: 'T002',
              workingHours: 6,
              description: 'Testing',
            },
          ],
        },
      ],
    },
    currentDate: '',
    loading: false,
    visible: false,
    display: 0,
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
  changeDisplay = p => {
    p === 1 ? this.setState ({display: 0}) : this.setState ({display: 1});
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
    const {visible, loading, currentDate, display} = this.state;
    return (
      <div style={{backgroundColor: '#ECECEC'}}>
        <input value={this.state.term.data1} onChange={this.onChange} />
        <button onClick={this.onSubmit}>Submit</button>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            paddingRight: '10px',
            paddingLeft: '10px',
          }}
        >
          <span>
            <Button style={{color: 'black'}} onClick={this.showModal}>
              <Icon style={{fontSize: 15}} type="plus-circle" />
              Add
            </Button>
          </span>
          <span style={{color: 'black', marginBottom: 8}}>
            <Button
              style={{marginRight: 3}}
              onClick={() => this.changeDisplay (1)}
            >
              <Icon type="idcard" />Card
            </Button>
            <Button onClick={() => this.changeDisplay (0)}>
              <Icon type="table" />Table
            </Button>
          </span>
        </div>
        <div
          style={{
            paddingLeft: '30px',
            paddingRight: '30px',
            paddingBottom: '30px',
          }}
        >
          {display === 0
            ? <List
                items={this.state.items}
                currentDate={this.state.currentDate}
              />
            : <TableList
                currentDate={this.state.currentDate}
                dataSet={this.state.dataSet}
              />}
        </div>
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
