import React, {PureComponent} from 'react';
import PersonalData from './PersonalData.js';
export default class SummaryData extends PureComponent {
  state = {
    personalData: {},
  };
  async componentDidMount () {
    const data = await {
      name: 'Nuttaphon Ratsameeraweemat',
      role: 'Senior ',
      startWorkingDay: '2018-05-01',
      token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoibnV0dGFwaG9uQGxlYWRlcnBsYW5ldC5jby50aCIsIkVtcE5hbWUiOiJOdXR0YXBob24gUmF0c2FtZWVyYXdlZW1hdCIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IlNlbmlvciIsImV4cCI6MTU1ODY3OTQ0NywiaXNzIjoiTGVhZGVycGxhbmV0IiwiYXVkIjoiTGVhZGVycGxhbmV0In0.wwoGsSrgmNWwZZAHmN_Bxhyl1cHw-e_1O8O4JR8ICAo',
      telNo: '0802630627',
      email: 'nuttaphon@leaderplanet.co.th',
      totalWorking: 11,
    };
    await this.setState ({personalData: data});
  }
  render () {
    const {personalData} = this.state;
    return (
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          width: '100%',
          height: '100% auto',
          marginTop: 10,
        }}
      >
        {/* <div style={{width: '30%', backgroundColor: 'red'}}> */}
        <PersonalData data={personalData} />
        {/* </div> */}
        <div style={{width: '70%', backgroundColor: 'green', height: '100vh'}}>
          Right
        </div>
      </div>
    );
  }
}
