import React from 'react';
import {Card, Icon} from 'antd';
const List = props => (
  <div
    style={{
      display: 'flex',
      flexWrap: 'wrap',
      background: '#ECECEC',
      padding: '30px',
    }}
  >
    {console.log("props",props)}
    {props.items.map ((item,index,currentDate) => (
      <Card
        key={index}
        bordered={true}
        style={{width: 200, margin: 8}}
        actions={[
          <Icon type="setting" onClick={()=>alert(props.currentDate)}/>,
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
