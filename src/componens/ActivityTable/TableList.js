import React, {PureComponent} from 'react';
import 'antd/dist/antd.css';
import {Card} from 'antd';
const gridStyle = {
  width: '25%',
  textAlign: 'Left',
};

export default class TableList extends PureComponent {
  state = {
    date: [],
    CurrentMonth: '',
  };
  componentWillMount () {
    const {currentDate} = this.props;
    this.setState ({CurrentMonth: currentDate.substring (3)});
  }
  render () {
    const {date, CurrentMonth} = this.state;
    const {dataSet} = this.props;
    const DateFomat = d => {
      const year = parseInt (d.substring (0, 4)) + 543;
      var month = '';
      const day = parseInt (d.substring (8, 11));
      switch (parseInt (d.substring (5, 8))) {
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
      return `${day} ${month} ${year}`;
    };
    return (
      <React.Fragment>
        <Card title={CurrentMonth} style={{alignContent: 'left'}}>
          {dataSet.timeSheet.map ((item, index) => (
            <Card.Grid style={gridStyle}>
              <p>
                <b>Date:</b> {DateFomat (item.dateTimeStamp)}
              </p>
              {item.taskList.map ((item, index) => (
                <div key={index}>
                  <p style={{textAlign: 'Left'}}>
                    <b>ProjectCode:</b> {item.projectCode}
                  </p>
                  <p style={{textAlign: 'Left'}}>
                    <b>Type:</b> {item.typeCode}
                  </p>
                  <p style={{textAlign: 'Left'}}>
                    <b>WorkingHours:</b> {item.workingHours}
                  </p>
                  <p style={{textAlign: 'Left'}}>
                    <b>Description:</b> {item.description}
                  </p>
                  <hr />
                </div>
              ))}
            </Card.Grid>
          ))}

        </Card>,
      </React.Fragment>
    );
  }
}
