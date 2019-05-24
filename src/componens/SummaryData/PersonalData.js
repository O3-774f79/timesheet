import React from 'react';
import {Card} from 'antd';
import {DurationOfmployment} from '../../Helper.js';
const PersonalData = props => {
  return (
    <div style={{paddingLeft: 10}}>
      <Card style={{width: 350}}>
        <div style={{display: 'flex', textAlign: 'left'}}>
          <img
            src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
            width={60}
            height={60}
          />
          <div>
            <p><b>ชื่อ-สกุล: </b> {props.data.name}</p>
            <p><b>ตำแหน่ง: </b> {props.data.role}</p>
            <p><b>เบอร์โทรศัพท์: </b>{props.data.telNo}</p>
            <p><b>E-Mail: </b>{props.data.email}</p>
            <p><b>วันที่เริ่มงาน: </b>{props.data.startWorkingDay}</p>
            <p>
              <b>อายุงาน: </b>{DurationOfmployment (props.data.totalWorking)}
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
};
export default PersonalData;
