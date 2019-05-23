import React from 'react';
import {Card, Icon} from 'antd';
const data = {
  employeeNo: '000001',
  taskList: [
    {
      project: 'DS',
      type: [
        {
          typeName: 'Support',
          timeStamp: [
            {
              dateTimeStamp: '2019-05-01T00:00:00',
              workingHours: 2,
            },
            {
              dateTimeStamp: '2019-05-02T00:00:00',
              workingHours: 2,
            },
            {
              dateTimeStamp: '2019-05-03T00:00:00',
              workingHours: 2,
            },
            {
              dateTimeStamp: '2019-05-04T00:00:00',
              workingHours: 2,
            },
            {
              dateTimeStamp: '2019-05-05T00:00:00',
              workingHours: 2,
            },
          ],
        },
      ],
    },
    {
      project: 'SmartForm',
      type: [
        {
          typeName: 'POC',
          timeStamp: [
            {
              dateTimeStamp: '2019-05-01T00:00:00',
              workingHours: 6,
            },
            {
              dateTimeStamp: '2019-05-02T00:00:00',
              workingHours: 6,
            },
            {
              dateTimeStamp: '2019-05-03T00:00:00',
              workingHours: 6,
            },
            {
              dateTimeStamp: '2019-05-04T00:00:00',
              workingHours: 6,
            },
            {
              dateTimeStamp: '2019-05-05T00:00:00',
              workingHours: 6,
            },
          ],
        },
      ],
    },
  ],
};
const List = props => (
  <div
    style={{
      display: 'flex',
      flexWrap: 'wrap',
      background: '#ECECEC',
      padding: '30px',
    }}
  >
    {console.log (data.taskList)}
    {console.log (props.items)}
    {data.taskList.map ((item,index) => (
        <div key={index}>
            <Card>
                <p>{item.project}</p>
                {item.type.map((item,index)=>(
                    <p key={index}>Type: {item.typeName}</p>
                ))}
            </Card>
        </div>
    ))}
    {props.items.map ((item, index, currentDate) => (
      <Card
        key={index}
        bordered={true}
        style={{width: 200, margin: 8}}
        actions={[
          <Icon type="setting" onClick={() => alert (props.currentDate)} />,
          <Icon type="edit" />,
          <Icon type="ellipsis" />,
        ]}
      >
        <p>{item}</p>
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
      </Card>
    ))}
  </div>
);

export default List;
