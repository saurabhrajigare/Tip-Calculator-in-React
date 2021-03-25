import React, { Component } from 'react';
import './Components/App_style.css'
import Header from './Components/Header';
import Footer from './Components/footer';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      amount: "", 
      service: "20", 
      tip: "",
      name: "", 
      customerlist: [], 
      count: 0, totaltip: ""
    };
  }

  tipCalc = () => {
    let ttip = this.state.amount * this.state.service / 100
    this.setState(prevstate => ({
      customerlist: [...prevstate.customerlist, { tip: ttip, name: this.state.name }]
    }))
    this.setState({ name: "" })

  }
  totaltips = () => {
    this.setState({
      count: this.state.customerlist.length, totaltip: this.state.customerlist.reduce((accum,arr) => {
      return accum + arr.tip
      },0)
    })
  }

  render() {
    return (
      <div className='main'>
        
        <Header/>
        
        <div style={{marginLeft:"50px"}}>
          <p className='txt'>Enter Your Bill Amount</p>
          <input type="text" className='input' placeholder='Enter Amount' value={this.state.amount} onChange={event => this.setState({ amount: event.target.value })} />
        </div>

        <div style={{marginLeft:"50px"}}>
          <p className='txt'>How Was The Service ?</p>
            <select className='option' value={this.state.service} onChange={event => { this.setState({ service: event.target.value }) }}>
              <option value="20">Excellent-20%</option>
              <option value="10">Moderate-10%</option>
              <option value="5">bad-5 %</option>
            </select>&nbsp;&nbsp;&nbsp;

            <input type="text" className='input' placeholder='Customer Name' value={this.state.name} onChange={e => { this.setState({ name: e.target.value }) }} />
            <button className='btn' onClick={this.tipCalc}>Add Customer</button>
        </div>

        <div style={{marginLeft:"50px",marginRight:"50px"}}>
          <h2 style={{textAlign:"center",fontSize:"28px",color:'white'}}>Customer List</h2><hr/>
          <div  className='list'>
            <ul style={{ marginBottom: "auto" }}>
              {this.state.customerlist.map(item => {
                return <li>{`${item.name} offering a tip of ${item.tip} rupees`}</li>
              })}
            </ul><hr/>
          </div>
          <div style={{textAlign:"center"}}>
            <button className='btn' style={{ margin: "auto" }} onClick={this.totaltips}>Calculate Tip & customer</button>
          </div>
        </div>

        <div style={{marginLeft:"50px"}}>

          <table className='table'>
            <thead>
              <tr>
                <th>Total customer</th>
                <th>Tip</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>{this.state.count}</th>
                <th>{this.state.totaltip}</th>
              </tr>
            </tbody>
          </table>

        </div>

        <Footer/>
        
      </div>
    );
  }
}

export default App;