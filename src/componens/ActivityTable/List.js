import React from 'react';
import {Card, Icon} from 'antd';
const data = {
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
};
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
  return (
    <div style={{display: 'flex', justifyContent: 'space-between'}}>
      <div>
        <p style={{fontSize: 50, height: 10}}>{day}</p>
      </div>
      <div>
        {' '}     <p style={{alignItems: 'flex-end', fontSize: 16}}>{month}</p>
        {' '}     <p style={{alignItems: 'flex-end', fontSize: 16}}>{year}</p>

      </div>
    </div>
  );
};
const List = props => (
  <div
    style={{
      display: 'flex',
      flexWrap: 'wrap',
      // background: '#ECECEC',
    }}
  >
    {data.timeSheet.map ((item, index) => (
      <div key={index}>
        <Card
          key={index}
          bordered={true}
          style={{width: 300, margin: 8}}
          actions={[
            <Icon type="edit" onClick={() => alert (props.currentDate)} />,
          ]}
        >
          <p>{DateFomat (item.dateTimeStamp)}</p>
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
        </Card>
      </div>
    ))}
    {console.log (props.items)}
    {props.items.map ((item, index) => <p>{item.data1}</p>)}
  </div>
);

export default List;
