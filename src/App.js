import * as React from 'react';
import './App.css';


import { Button, Row, Col } from 'antd';
import { Typography } from 'antd';

const { Title } = Typography;

class App extends React.Component {

  componentDidMount(){
    var that = this;
    // changes start
    
    fetch("https://coronavirus-monitor.p.rapidapi.com/coronavirus/worldstat.php", {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
        "x-rapidapi-key": "03589b9d39msh0934ea7c93c0b1fp124f6cjsn5d1c8dbecf28"
      }
    })
    .then(response => {
      return response.json()
    }).then(json=>{
      this.setState({
        overall:json
      });
    })
    .catch(err => {
      console.log(err);
    });

    //changes end
  }

  render() {
    var overall = ((this.state||{}).overall) || {};

    // SAMPLE DATA
    // {
    //   "total_cases": "203,663",
    //   "total_deaths": "8,231",
    //   "total_recovered": "82,866",
    //   "new_cases": "5,442",
    //   "new_deaths": "264",
    //   "statistic_taken_at": "2020-03-18 12:06:04"
    // }
    //
    // Use {overall.total_cases} inside brackets to show data
    //

    //DESIGN PART BELOW
    //==============================================================================
    return (
      <div className="App">
        <Row>
          <Col span={24}>
            <Title level={1}>Total Cases: {overall["total_cases"]}</Title>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <Title level={3}>
              Total Deaths: {overall["total_deaths"]}
            </Title>
          </Col>
        </Row>
        <Row>     
        <Col span={24}>
            <Title level={3}>
              Total Recovered: {overall["total_recovered"]}
              </Title>
          </Col>
        </Row>
        
        {/* <Button type="primary">Test</Button> */}
      </div>
    );
    //==============================================================================
  }
}

export default App;