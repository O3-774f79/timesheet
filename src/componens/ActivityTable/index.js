import React, {PureComponent} from 'react';
import List from './List';
import TableList from './TableList';
import {
  Modal,
  Button,
  Icon,
  Input,
  DatePicker,
  Select,
  Spin,
  Divider,
} from 'antd';
import {CurrentDate, FomatDate, tranferValueProjectName} from '../../Helper.js';
import axios from 'axios';
const axiosConfig = {withCredentials: true};
const Option = Select.Option;
const {TextArea} = Input;

export default class idnex extends PureComponent {
  state = {
    term: {
      data1: '',
    },
    taskList: [],
    items: [],
    dataSet: {
      isSubmit: false,
      timeSheet: [],
    },
    inputActivity: [],
    valueActivity: {
      projectCode: '',
      projectType: '',
      workHoursTotal: '',
      description: '',
    },
    inputProjectName: '',
    inputProjectType: '',
    inputWorkHours: '',
    inputDescription: '',

    workHours: [],
    projectName: [],
    projectType: [],
    datePicker: '',
    spinLoading: true,
    currentDate: '',
    loading: false,
    visible: false,
    display: 0,
  };
  async componentDidMount () {
    console.log (tranferValueProjectName ());
    const date = '2019-05-01';
    try {
      await axios.post (
        `/Login`,
        {
          username: 'nuttaphon@leaderplanet.co.th',
          password: 'Admin',
        },
        axiosConfig
      );

      const resTimesheet = await axios.get (
        `/TimeSheet?date=` + date,
        axiosConfig
      );
      const resProjectType = await axios.get (
        `/ValueHelp/GetTypeProject`,
        axiosConfig
      );
      const resProjectName = await axios.get (
        `/ValueHelp/GetProject`,
        axiosConfig
      );
      await this.setState ({
        dataSet: resTimesheet.data,
        projectName: resProjectName.data,
        projectType: resProjectType.data,
        spinLoading: false,
      });
      await console.log ('projecttype', this.state.projectType);
    } catch (e) {
      console.log (e);
    }
  }
  async componentWillMount () {
    var data = await [];
    for (let i = 0; i <= 16; i++) {
      await data.push (i);
    }
    await this.setState ({
      currentDate: CurrentDate (),
      workHours: data,
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
  onChangDatePicher = (date, dateString) => {
    this.setState ({datePicker: dateString});
  };
  onChangeTest = event => {
    this.setState ({
      valueActivity: {
        test: event.target.value,
      },
    });
  };
  DateFomat = d => {
    if (d === '') {
      return '';
    } else {
    }
    const {day, month, year} = FomatDate (d);
    return `Date :${day} ${month} ${year}`;
  };
  handleActivityAdd = async event => {
    await event.preventDefault ();
    await this.setState ({
      valueActivity: {
        projectCode: this.state.inputProjectName,
        projectType: this.state.inputProjectType,
        workHoursTotal: this.state.inputWorkHours,
        description: this.state.inputDescription,
      },
    });
    await this.state.inputActivity.push (this.state.valueActivity);
    await this.setState ({
      valueActivity: {
        projectCode: '',
        projectType: '',
        workHoursTotal: '',
        description: '',
      },
      inputProjectName: '',
      inputProjectType: '',
      inputWorkHours: '',
      inputDescription: '',
    });
    await console.log (this.state.inputActivity);
  };
  onDescriptionChange = event => {
    this.setState ({inputDescription: event.target.value});
  };
  onProjectChange = value => {
    this.setState ({inputProjectName: value});
    console.log (`selected ${value}`);
  };

  onProjectBlur = () => {
    console.log ('blur');
  };

  onProjectFocus = () => {
    console.log ('focus');
  };
  onWorkhoursChange = value => {
    this.setState ({inputWorkHours: value});
    console.log (`selected ${value}`);
  };

  onWorkhoursBlur = () => {
    console.log ('blur');
  };

  onWorkhoursFocus = () => {
    console.log ('focus');
  };
  onTypeChange = value => {
    this.setState ({inputProjectType: value});
    console.log (`selected ${value}`);
  };

  onTypeBlur = () => {
    console.log ('blur');
  };
  onTypeFocus = () => {
    console.log ('focus');
  };
  render () {
    const {visible, loading, currentDate, display} = this.state;
    return (
      <Spin spinning={this.state.spinLoading}>
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
                  currentDate={currentDate}
                  data={this.state.dataSet}
                />
              : <TableList
                  currentDate={currentDate}
                  dataSet={this.state.dataSet}
                />}
          </div>
          <Modal
            visible={visible}
            title={
              'Add Activity ' + `${this.DateFomat (this.state.datePicker)}`
            }
            onOk={this.handleOk}
            onCancel={this.handleCancel}
            footer={[
              <Button key="back" onClick={this.handleCancel}>
                Return
              </Button>,
              <Button key="submit" type="primary" loading={loading}>
                Submit
              </Button>,
            ]}
          >

            {this.state.inputActivity.map ((item, index) => (
              <div key={index}>
                <p>ProjectName:{item.projectCode}</p>
                <p>ProjectType:{item.projectType}</p>
                <p>WorkHours  :{item.workHoursTotal}</p>
                <p>Description:{item.description}</p>
                <Divider />
              </div>
            ))}
            <div>
              <div>
                <DatePicker
                  style={{width: 200}}
                  onChange={this.onChangDatePicher}
                />
              </div>
              <div>
                <Select
                  showSearch
                  style={{width: 200}}
                  placeholder="Project Name"
                  onChange={this.onProjectChange}
                  onFocus={this.onProjectFocus}
                  onBlur={this.onProjectBlur}
                >
                  {this.state.projectName.map ((item, key) => (
                    <Option key={key} value={item.valueKey}>
                      {item.valueText}
                    </Option>
                  ))}
                </Select>
              </div>
              <div>
                <Select
                  showSearch
                  style={{width: 200}}
                  placeholder="Project Type"
                  onChange={this.onTypeChange}
                  onFocus={this.onTypeFocus}
                  onBlur={this.onTypeBlur}
                >
                  {this.state.projectType.map ((item, key) => (
                    <Option key={key} value={item.valueKey}>
                      {item.valueText}
                    </Option>
                  ))}
                </Select>
              </div>
              <div>
                <Select
                  showSearch
                  style={{width: 200}}
                  placeholder="Workhours"
                  onChange={this.onWorkhoursChange}
                  onFocus={this.onWorkhoursFocus}
                  onBlur={this.onWorkhoursBlur}
                >
                  {this.state.workHours.map ((item, key) => (
                    <Option value={item}>{item}</Option>
                  ))}
                </Select>
                <input
                  value={this.state.valueActivity.test}
                  onChange={this.onChangeTest}
                />
              </div>
              <div>
                <TextArea rows={4} onChange={this.onDescriptionChange} />
              </div>
            </div>
            <Button
              style={{cursor: 'pointer', display: 'flex', alignItems: 'center'}}
              onClick={this.handleActivityAdd}
            >
              <Icon style={{fontSize: 20, color: 'black'}} type="plus-circle" />
            </Button>
          </Modal>
        </div>
      </Spin>
    );
  }
}
