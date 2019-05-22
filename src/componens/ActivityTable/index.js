import React, {PureComponent} from 'react';
import List from './List'
export default class idnex extends PureComponent {
  state = {
    term: '',
    term2: '',
    items: [],
    currentDate: ''
  };
  componentWillMount(){
      const d = new Date()    
      this.setState({currentDate:d.getDate()})
  }
  onChange = event => {
    this.setState ({term: event.target.value});
  };
  onSubmit = async event => {
    await event.preventDefault ();
    await this.setState ({
      term: '',
      items: [...this.state.items, this.state.term],
    });
  };
  render () {
    return (
      <div>
          <input value={this.state.term} onChange={this.onChange} />
          <input value={this.state.term2} onChange={this.onChange2} />
          <button onClick={this.onSubmit}>Submit</button>
        <List items={this.state.items} currentDate={this.state.currentDate} />
      </div>
    );
  }
}
