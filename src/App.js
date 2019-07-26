import React, { Component } from 'react';
import './App.css';
import TechSpecList from './TechSpecList'
import Header from './Header'
import MainSummary from './Summary'
import SummaryOption from './SummaryItem'

class App extends Component {
  constructor(props){
    super(props);
    this.updateFeature=this.updateFeature.bind(this)
    this.state = {
      selected: {
        Processor: {
            name: '17th Generation Intel Core HB (7 Core with donut spare)',
            cost: 700
          },
        "Operating System": {
            name: 'Ubuntu Linux 16.04',
            cost: 200
          },
        "Video Card":{
            name: 'Toyota Corolla 1.5v',
            cost: 1150.98
          },
        Display: {
            name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
            cost: 1500
          }
      }
    }
  }

  updateFeature(feature, newValue) {
    const selected = Object.assign({}, this.state.selected);
    selected[feature] = newValue;
    this.setState({
      selected
    });
  }

  render() {
    const summary = <SummaryOption selected={this.state.selected}/>

    const total = Object.keys(this.state.selected)
          .reduce((acc, curr) => acc + this.state.selected[curr].cost, 0);    

    return (
      <div className="App">
            <Header />
        <main>
          <TechSpecList selected={this.state.selected} features={this.props.features} updateFeature={this.updateFeature} />
          <MainSummary summary={summary} total={total} />
        </main>
      </div>
    );
  }
}

export default App;  
