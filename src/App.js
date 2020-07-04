import React, { Component } from 'react';
import { connect } from 'react-redux'
import { add_remender, delete_remender, clear_remender } from './action'
import moment from 'moment';
import './App.css';

class App extends Component {
  state = {
    text: '',
    date: new Date()
  }
  Show_remnder = () => {
    const { remnder } = this.props
    console.log(remnder)
    return (
      <div>
        {remnder.map(r => {
          return (
            <div key={Math.random()}>
              <div>
                {r.text}
              </div>
              <div>
                {moment(new Date(r.date)).fromNow()}
              </div>
              <div className="remove btn btn-danger" onClick={() => this.props.delete_remender(r.id)} >x</div>
            </div>
          )
        })}
      </div>
    )
  }
  render() {

    return (

      <div className="App" >
        <img src="" />
        <div className="remnder-title" style={{ textAlign: "center" ,color:"#dc3545" }}>
          <h2> what shoud you do?</h2>
        </div>
        <div >
          <input
            className="form-control"
            value={this.state.text}
            type="text"
            placeholder="Enter what You think ....."
            onChange={(e) => this.setState({ text: e.target.value })}

          />

          <input
            className="form-control"
            value={this.state.date}
            type="datetime-local"
            onChange={(e) => this.setState({ date: e.target.value })}
          />
        </div>
        {this.Show_remnder()}
        <button className="btn btn-primary btn-block" onClick={() => {

          this.props.add_remender(this.state.text, this.state.date)
          this.setState({ text: '', date: '' })

        }}> Add Reminder</button>
        <button className="btn btn-danger btn-block" onClick={this.props.clear_remender}> Clear Reminders</button>
      </div>
    );
  }
}
// function mapDispatchToProps(dispatch) {
//   return {
//     add_reminder: () => dispatch(add_remender())
//   }
// }

function mapStateToProps(state) {
  return {
    remnder: state
  }
}

export default connect(mapStateToProps, { add_remender, delete_remender, clear_remender })(App);
